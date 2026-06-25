import { spawn } from 'node:child_process';
import assert from 'node:assert';
import { readFile } from 'node:fs/promises';

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

const helpChild = spawn(process.execPath, ['mcp/free-ai-ops-server.mjs', '--help'], {
  stdio: ['ignore', 'pipe', 'inherit']
});

let helpStdout = '';
helpChild.stdout.on('data', (chunk) => {
  helpStdout += chunk;
});

await new Promise((resolve, reject) => {
  helpChild.on('error', reject);
  helpChild.on('close', (code) => {
    if (code !== 0) reject(new Error('help exited with ' + code));
    else resolve();
  });
});

assert.match(helpStdout, /npx -y free-ai-ops-mcp@npm:@miraigent\/free-ai-ops-mcp/);
assert.match(helpStdout, /human_review_gate/);
assert.match(helpStdout, /Do not paste secrets/);

const requests = [
  { jsonrpc: '2.0', id: 1, method: 'initialize', params: {} },
  { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} },
  {
    jsonrpc: '2.0',
    id: 3,
    method: 'tools/call',
    params: {
      name: 'human_review_gate',
      arguments: {
        draftType: 'support reply',
        audience: 'customer',
        riskFlags: ['privacy'],
        reviewOwner: 'support lead',
        sendMode: 'manual'
      }
    }
  },
  {
    jsonrpc: '2.0',
    id: 4,
    method: 'tools/call',
    params: {
      name: 'faq_candidate_review',
      arguments: {
        inquiryPattern: 'pricing plan difference',
        frequency: 'high',
        responseCost: 'medium',
        riskLevel: 'low'
      }
    }
  },
  {
    jsonrpc: '2.0',
    id: 5,
    method: 'tools/call',
    params: {
      name: 'ai_safe_crm_note',
      arguments: {
        rawNoteSummary: 'Customer asked about setup timing.',
        channel: 'form',
        containsPersonalData: false,
        nextAction: 'send setup checklist',
        owner: 'sales'
      }
    }
  },
  {
    jsonrpc: '2.0',
    id: 6,
    method: 'tools/call',
    params: {
      name: 'prompt_risk_review',
      arguments: {
        operation: 'support automation',
        promptSummary: 'Draft a customer reply from inquiry details.',
        dataTypes: ['customer email', 'inquiry body'],
        customerFacing: true,
        riskLevel: 'medium'
      }
    }
  }
];

async function runServerWithRequests(requestLines) {
  const child = spawn(process.execPath, ['mcp/free-ai-ops-server.mjs'], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  let stdout = '';
  child.stdout.on('data', (chunk) => {
    stdout += chunk;
  });

  for (const requestLine of requestLines) {
    child.stdin.write(requestLine + '\n');
  }
  child.stdin.end();

  await new Promise((resolve, reject) => {
    child.on('error', reject);
    child.on('close', (code) => {
      if (code !== 0) reject(new Error('server exited with ' + code));
      else resolve();
    });
  });

  return stdout.trim().split('\n').map((line) => JSON.parse(line));
}

const responses = await runServerWithRequests(requests.map((request) => JSON.stringify(request)));
assert.equal(responses.length, requests.length);
assert.equal(responses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(responses[0].result.serverInfo.version, packageJson.version);
assert.equal(responses[1].result.tools.length, 4);
assert.match(responses[2].result.content[0].text, /review_required|stop/);
assert.match(responses[2].result.content[0].text, /nextLogRow/);
assert.match(responses[3].result.content[0].text, /public_faq_candidate/);
assert.match(responses[4].result.content[0].text, /crmNote/);
assert.match(responses[5].result.content[0].text, /stop_before_ai_use|human_review_required/);

const sampleSession = await readFile(
  new URL('../examples/mcp-json-rpc-session/sample-session.jsonl', import.meta.url),
  'utf8'
);
const sampleLines = sampleSession.trim().split('\n');
const sampleResponses = await runServerWithRequests(sampleLines);
assert.equal(sampleResponses.length, 3);
assert.equal(sampleResponses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(sampleResponses[0].result.serverInfo.version, packageJson.version);
assert.equal(sampleResponses[1].result.tools.length, 4);
assert.match(sampleResponses[2].result.content[0].text, /gateStatus/);
assert.match(sampleResponses[2].result.content[0].text, /reviewOwner/);
assert.match(sampleResponses[2].result.content[0].text, /boundary/);

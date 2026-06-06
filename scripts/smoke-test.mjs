import { spawn } from 'node:child_process';
import assert from 'node:assert';

const child = spawn(process.execPath, ['mcp/free-ai-ops-server.mjs'], {
  stdio: ['pipe', 'pipe', 'inherit']
});

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

let stdout = '';
child.stdout.on('data', (chunk) => {
  stdout += chunk;
});

for (const request of requests) {
  child.stdin.write(JSON.stringify(request) + '\n');
}
child.stdin.end();

await new Promise((resolve, reject) => {
  child.on('error', reject);
  child.on('close', (code) => {
    if (code !== 0) reject(new Error('server exited with ' + code));
    else resolve();
  });
});

const responses = stdout.trim().split('\n').map((line) => JSON.parse(line));
assert.equal(responses.length, requests.length);
assert.equal(responses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(responses[1].result.tools.length, 4);
assert.match(responses[2].result.content[0].text, /review_required|stop/);
assert.match(responses[3].result.content[0].text, /public_faq_candidate/);
assert.match(responses[4].result.content[0].text, /crmNote/);
assert.match(responses[5].result.content[0].text, /stop_before_ai_use|human_review_required/);

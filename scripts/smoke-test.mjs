import { spawn } from 'node:child_process';
import assert from 'node:assert';
import { readFile } from 'node:fs/promises';

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const rootReadme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
const candidateRequestTemplate = await readFile(
  new URL('../.github/ISSUE_TEMPLATE/free_mcp_candidate_request.md', import.meta.url),
  'utf8'
);
const bugReportTemplate = await readFile(
  new URL('../.github/ISSUE_TEMPLATE/free_mcp_bug_report.md', import.meta.url),
  'utf8'
);
const triedItFeedbackTemplate = await readFile(
  new URL('../.github/ISSUE_TEMPLATE/tried_it_feedback.md', import.meta.url),
  'utf8'
);

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
assert.match(helpStdout, new RegExp(`Miraigent Free AI Ops MCP ${packageJson.version.replaceAll('.', '\\.')}`));
assert.match(helpStdout, /human_review_gate/);
assert.match(helpStdout, /Do not paste secrets/);
assert.match(helpStdout, /private memory behavior/);
assert.match(helpStdout, /github\.com\/Miraigent\/miraigent-free-ai-ops-mcp\/issues\/new\/choose/);
assert.match(rootReadme, /tail -n 1 \| node -e/);
assert.match(rootReadme, /console\.log\(JSON\.parse\(r\.result\.content\[0\]\.text\)\.gateStatus\)/);
assert.match(rootReadme, /Quick field map:/);
assert.match(rootReadme, /`human_review_gate`: read `gateStatus`/);
assert.match(rootReadme, /`faq_candidate_review`: read `recommendedStatus`/);
assert.match(rootReadme, /`ai_safe_crm_note`: read `crmNote\.nextAction` and the `maskingChecklist`/);
assert.match(rootReadme, /`prompt_risk_review`: read `recommendation` and `riskFlags`/);
assert.match(rootReadme, /For public `prompt_risk_review` feedback/);
assert.match(rootReadme, /operation label/);
assert.match(rootReadme, /sanitized data-type labels/);
assert.match(rootReadme, /Do not paste the original prompt/);
assert.match(rootReadme, /For public `ai_safe_crm_note` feedback/);
assert.match(rootReadme, /masked note label/);
assert.match(rootReadme, /returned `crmNote\.nextAction`/);
assert.match(rootReadme, /Do not paste the raw CRM note/);
assert.match(rootReadme, /examples\/ai-safe-crm-note-json-rpc-session\/sample-session\.jsonl \| tail -n 1 \| node -e/);
assert.match(rootReadme, /crmNote\.nextAction\); \}\)'/);
assert.match(rootReadme, /send setup checklist and confirm kickoff date/);
assert.match(rootReadme, /examples\/ai-safe-crm-note-json-rpc-session\/sample-session\.jsonl/);
assert.match(rootReadme, /If that tools-list check passes, the next safest tool-call check/);
assert.match(rootReadme, /should return `gateStatus: "stop"`/);
assert.match(candidateRequestTemplate, /This can be demonstrated with synthetic input and output only/);
assert.match(candidateRequestTemplate, /decision field you expect users to read first/);
assert.match(candidateRequestTemplate, /does not send messages or store customer data/);
assert.match(candidateRequestTemplate, /paid product files, secrets, cookies, tokens, or private keys/);
assert.match(bugReportTemplate, /MCP method or step: initialize \/ tools\/list \/ tools\/call \/ --help/);
assert.match(bugReportTemplate, /JSON-RPC request id or response line number/);
assert.match(
  bugReportTemplate,
  /First decision field you checked: gateStatus \/ recommendedStatus \/ recommendation \/ nextAction \/ error\.message/
);
assert.match(triedItFeedbackTemplate, /Useful minimal examples:/);
assert.match(triedItFeedbackTemplate, /free-ai-ops-mcp@npm:@miraigent\/free-ai-ops-mcp/);
assert.match(triedItFeedbackTemplate, /desktop MCP args shape/);
assert.match(triedItFeedbackTemplate, /`gateStatus`, `recommendedStatus`, `recommendation`, or `nextAction`/);
assert.match(triedItFeedbackTemplate, /synthetic input shape/);
assert.match(triedItFeedbackTemplate, /CRM note feedback shape/);
assert.match(triedItFeedbackTemplate, /returned `crmNote\.nextAction`/);
assert.match(triedItFeedbackTemplate, /returned `maskingChecklist` result only/);
assert(packageJson.files.includes('.github/ISSUE_TEMPLATE/free_mcp_candidate_request.md'));
assert(packageJson.files.includes('.github/ISSUE_TEMPLATE/free_mcp_bug_report.md'));
assert(packageJson.files.includes('.github/ISSUE_TEMPLATE/tried_it_feedback.md'));

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
assert.equal(responses[0].result.protocolVersion, '2024-11-05');
assert.deepEqual(responses[0].result.capabilities, { tools: {} });
assert.equal(responses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(responses[0].result.serverInfo.version, packageJson.version);
assert.equal(responses[1].result.tools.length, 4);
assert.deepEqual(
  responses[1].result.tools.map((tool) => tool.name),
  ['human_review_gate', 'faq_candidate_review', 'ai_safe_crm_note', 'prompt_risk_review']
);
assert.deepEqual(responses[1].result.tools[0].inputSchema.required, [
  'draftType',
  'audience',
  'riskFlags',
  'reviewOwner',
  'sendMode'
]);
assert.deepEqual(responses[1].result.tools[1].inputSchema.required, [
  'inquiryPattern',
  'frequency',
  'responseCost',
  'riskLevel'
]);
assert.deepEqual(responses[1].result.tools[2].inputSchema.required, [
  'rawNoteSummary',
  'channel',
  'containsPersonalData',
  'nextAction',
  'owner'
]);
assert.deepEqual(responses[1].result.tools[3].inputSchema.required, [
  'operation',
  'promptSummary',
  'dataTypes',
  'customerFacing',
  'riskLevel'
]);
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
assert.equal(sampleResponses[0].result.protocolVersion, '2024-11-05');
assert.deepEqual(sampleResponses[0].result.capabilities, { tools: {} });
assert.equal(sampleResponses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(sampleResponses[0].result.serverInfo.version, packageJson.version);
assert.equal(sampleResponses[1].result.tools.length, 4);
assert.deepEqual(
  sampleResponses[1].result.tools.map((tool) => tool.name),
  ['human_review_gate', 'faq_candidate_review', 'ai_safe_crm_note', 'prompt_risk_review']
);
assert.match(sampleResponses[2].result.content[0].text, /gateStatus/);
assert.match(sampleResponses[2].result.content[0].text, /reviewOwner/);
assert.match(sampleResponses[2].result.content[0].text, /boundary/);
const sampleToolResult = JSON.parse(sampleResponses[2].result.content[0].text);
assert.equal(sampleToolResult.tool, 'human_review_gate');
assert.equal(sampleToolResult.gateStatus, 'stop');
assert.equal(sampleToolResult.nextLogRow.gate_status, 'stop');
assert.equal(sampleToolResult.boundary, 'This tool is a review helper. It does not send messages.');

const toolsListSession = await readFile(
  new URL('../examples/tools-list-json-rpc-session/sample-session.jsonl', import.meta.url),
  'utf8'
);
const toolsListResponses = await runServerWithRequests(toolsListSession.trim().split('\n'));
assert.equal(toolsListResponses.length, 2);
assert.equal(toolsListResponses[0].result.protocolVersion, '2024-11-05');
assert.equal(toolsListResponses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(toolsListResponses[0].result.serverInfo.version, packageJson.version);
assert.deepEqual(
  toolsListResponses[1].result.tools.map((tool) => tool.name),
  ['human_review_gate', 'faq_candidate_review', 'ai_safe_crm_note', 'prompt_risk_review']
);
assert.match(rootReadme, /examples\/tools-list-json-rpc-session\/sample-session\.jsonl/);

const promptRiskSession = await readFile(
  new URL('../examples/prompt-risk-json-rpc-session/sample-session.jsonl', import.meta.url),
  'utf8'
);
const promptRiskResponses = await runServerWithRequests(promptRiskSession.trim().split('\n'));
assert.equal(promptRiskResponses.length, 3);
assert.equal(promptRiskResponses[0].result.protocolVersion, '2024-11-05');
assert.deepEqual(promptRiskResponses[0].result.capabilities, { tools: {} });
assert.equal(promptRiskResponses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(promptRiskResponses[0].result.serverInfo.version, packageJson.version);
assert.equal(promptRiskResponses[1].result.tools.length, 4);
assert.deepEqual(
  promptRiskResponses[1].result.tools.map((tool) => tool.name),
  ['human_review_gate', 'faq_candidate_review', 'ai_safe_crm_note', 'prompt_risk_review']
);
assert.match(promptRiskResponses[2].result.content[0].text, /prompt_risk_review/);
assert.match(promptRiskResponses[2].result.content[0].text, /stop_before_ai_use/);
assert.match(promptRiskResponses[2].result.content[0].text, /customer_facing/);
assert.match(promptRiskResponses[2].result.content[0].text, /sensitive_data_possible/);
const promptRiskToolResult = JSON.parse(promptRiskResponses[2].result.content[0].text);
assert.equal(promptRiskToolResult.tool, 'prompt_risk_review');
assert.equal(promptRiskToolResult.recommendation, 'stop_before_ai_use');
assert.deepEqual(promptRiskToolResult.riskFlags, ['customer_facing', 'sensitive_data_possible']);
assert.equal(
  promptRiskToolResult.boundary,
  'This tool is a prompt risk helper. It is not legal advice and does not call an AI API.'
);

const crmNoteSession = await readFile(
  new URL('../examples/ai-safe-crm-note-json-rpc-session/sample-session.jsonl', import.meta.url),
  'utf8'
);
const crmNoteResponses = await runServerWithRequests(crmNoteSession.trim().split('\n'));
assert.equal(crmNoteResponses.length, 3);
assert.equal(crmNoteResponses[0].result.protocolVersion, '2024-11-05');
assert.deepEqual(crmNoteResponses[0].result.capabilities, { tools: {} });
assert.equal(crmNoteResponses[0].result.serverInfo.name, 'miraigent-free-ai-ops-mcp');
assert.equal(crmNoteResponses[0].result.serverInfo.version, packageJson.version);
assert.equal(crmNoteResponses[1].result.tools.length, 4);
assert.deepEqual(
  crmNoteResponses[1].result.tools.map((tool) => tool.name),
  ['human_review_gate', 'faq_candidate_review', 'ai_safe_crm_note', 'prompt_risk_review']
);
assert.match(crmNoteResponses[2].result.content[0].text, /ai_safe_crm_note/);
assert.match(crmNoteResponses[2].result.content[0].text, /crmNote/);
assert.match(crmNoteResponses[2].result.content[0].text, /customerFacts/);
assert.match(crmNoteResponses[2].result.content[0].text, /nextAction/);
assert.match(crmNoteResponses[2].result.content[0].text, /maskingChecklist/);
const crmNoteToolResult = JSON.parse(crmNoteResponses[2].result.content[0].text);
assert.equal(crmNoteToolResult.tool, 'ai_safe_crm_note');
assert.equal(crmNoteToolResult.crmNote.channel, 'contact form');
assert.equal(crmNoteToolResult.crmNote.nextAction, 'send setup checklist and confirm kickoff date');
assert.deepEqual(crmNoteToolResult.maskingChecklist, [
  'Confirm no personal data is included.',
  'Keep synthetic examples in public issues.'
]);
assert.equal(
  crmNoteToolResult.boundary,
  'This tool structures notes. It is not an anonymizer and does not store data.'
);

const unknownToolResponses = await runServerWithRequests([
  JSON.stringify({
    jsonrpc: '2.0',
    id: 7,
    method: 'tools/call',
    params: { name: 'unknown_public_tool', arguments: {} }
  })
]);
assert.equal(unknownToolResponses.length, 1);
assert.equal(unknownToolResponses[0].id, 7);
assert.equal(unknownToolResponses[0].error.code, -32000);
assert.equal(unknownToolResponses[0].error.message, 'Unknown tool: unknown_public_tool');

const unsupportedMethodResponses = await runServerWithRequests([
  JSON.stringify({
    jsonrpc: '2.0',
    id: 8,
    method: 'resources/list',
    params: {}
  })
]);
assert.equal(unsupportedMethodResponses.length, 1);
assert.equal(unsupportedMethodResponses[0].id, 8);
assert.equal(unsupportedMethodResponses[0].error.code, -32000);
assert.equal(unsupportedMethodResponses[0].error.message, 'Unsupported method: resources/list');

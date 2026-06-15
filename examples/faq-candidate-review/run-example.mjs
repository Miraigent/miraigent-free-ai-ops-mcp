import { spawn } from 'node:child_process';
import fs from 'node:fs';

const child = spawn(process.execPath, ['mcp/free-ai-ops-server.mjs'], {
  stdio: ['pipe', 'pipe', 'inherit']
});

const request = fs.readFileSync('examples/faq-candidate-review/sample-request.jsonl', 'utf8');
let stdout = '';

child.stdout.on('data', (chunk) => {
  stdout += chunk;
});

child.stdin.write(request.trim() + '\n');
child.stdin.end();

await new Promise((resolve, reject) => {
  child.on('error', reject);
  child.on('close', (code) => {
    if (code !== 0) reject(new Error('server exited with ' + code));
    else resolve();
  });
});

const response = JSON.parse(stdout.trim());
const payload = JSON.parse(response.result.content[0].text);
console.log(JSON.stringify(payload, null, 2));

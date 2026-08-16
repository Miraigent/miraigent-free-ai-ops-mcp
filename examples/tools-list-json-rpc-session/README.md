# Tools List JSON-RPC Session Example

This example lets MCP client users confirm the public tool list before sending
any sample tool-call input.

Use it when a desktop MCP client starts the server but does not show the tools
you expected.

## Run

From the repository root:

    npm run mcp < examples/tools-list-json-rpc-session/sample-session.jsonl

From the public npm package:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/tools-list-json-rpc-session/sample-session.jsonl

You should receive two JSON-RPC response lines. The second response should list:

- human_review_gate
- faq_candidate_review
- ai_safe_crm_note
- prompt_risk_review

To print only the public tool names and avoid copying a full JSON-RPC response,
pipe the final response line through Node:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/tools-list-json-rpc-session/sample-session.jsonl | tail -n 1 | node -e 'process.stdin.on("data", c => { const r = JSON.parse(c); console.log(r.result.tools.map(t => t.name).join("\n")); })'

Use that four-line output in public feedback instead of desktop client logs.

If those tools appear in the terminal but not in your desktop MCP client,
restart the client and re-check the configured command and args before changing
private workflow data.

Do not include secrets, credentials, private customer records, internal policy
text, paid product files, or private memory behavior in public issues.

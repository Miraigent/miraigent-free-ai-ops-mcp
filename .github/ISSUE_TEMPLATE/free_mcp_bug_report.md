---
name: Free MCP bug report
about: Report a bug in a public free MCP tool
title: "[Bug]: "
labels: bug
assignees: ""
---

## Tool

Which MCP tool has the issue?

## Environment

- Package version:
- Registry version from `npm view @miraigent/free-ai-ops-mcp version`:
- Version shown by `npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp --help`:
- How you ran it: npx / Claude Desktop / Cursor / other MCP client
- Command or MCP client args shape:
- MCP method or step: initialize / tools/list / tools/call / --help
- JSON-RPC request id or response line number, if you used a `.jsonl` example:
- First decision field you checked: gateStatus / recommendedStatus / recommendation / nextAction / error.message
- Node.js version:
- Operating system:

## What happened?

Describe the problem.

## Expected behavior

What should happen instead?

## Public-safe example

Use synthetic data only. Include the command or client config shape, the smallest
public-safe JSON-RPC input that reproduces the issue, and the returned status or
error field. Do not paste full desktop client logs, internal policy text, paid
product files, or private workflow data.

If the issue is a wrong review decision, include the expected public decision
field and one sentence explaining why that synthetic example should proceed,
require review, or stop. Keep the explanation about the sample behavior only,
not your private workflow rules.

If the issue is `Unknown tool: <name>`, include only this public-safe copy block:

- requested synthetic tool name:
- JSON-RPC request id:
- returned `error.message`:
- visible tool count from `tools/list`:
- visible tool names from `tools/list`:

Do not paste the full MCP client log or private workflow name to explain a tool
name mismatch.

## Boundary check

- [ ] No secrets, tokens, passwords, cookies, or credentials.
- [ ] No private customer information.
- [ ] No internal policy text, paid product files, or full private client logs.
- [ ] No MIRAI Memory engine details.
- [ ] No working memory MCP request.

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

## Boundary check

- [ ] No secrets, tokens, passwords, cookies, or credentials.
- [ ] No private customer information.
- [ ] No internal policy text, paid product files, or full private client logs.
- [ ] No MIRAI Memory engine details.
- [ ] No working memory MCP request.

---
name: Tried It feedback
about: Share what happened when you tried the public MCP package
title: "[Tried It]: "
labels: feedback
assignees: ""
---

## What did you try?

Which command, example, or MCP tool did you run?

## What happened?

Describe the result. If possible, include the public-safe input shape and the
returned status or output field that was unclear.

If this happened in Claude Desktop, Cursor, or another MCP client, include only
the client name, operating system, command/args shape, and the public-safe
status or error field. Do not paste full client logs, internal policy text, paid
product files, or private workflow data.

Useful minimal examples:

- npx command: `npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp --help`
- desktop MCP args shape: `["-y", "free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp"]`
- returned field: `gateStatus`, `recommendedStatus`, `recommendation`, or `nextAction`
- synthetic input shape: risk flags, workflow type, review owner, and send mode
  only
- CRM note feedback shape: masked note label, channel, personal-data yes/no,
  returned `crmNote.nextAction`, and returned `maskingChecklist` result only

## What were you trying to decide?

For example:

- whether an AI draft should be sent, reviewed, or stopped
- whether a repeated support question should become an FAQ candidate
- whether a CRM note clearly separates facts, AI suggestions, and human decisions
- whether a prompt or task should be reviewed before use

## What would make the next run easier?

Tell us the smallest improvement that would help: clearer README steps, a better
example, another risk flag, a different output field, or a new workflow.

## Public-safe boundary check

- [ ] No secrets, tokens, passwords, cookies, or credentials.
- [ ] No private customer information.
- [ ] No private company notes.
- [ ] No internal policy text, paid product files, or full private client logs.
- [ ] No MIRAI Memory engine details.
- [ ] No working memory MCP request.

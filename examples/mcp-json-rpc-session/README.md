# MCP JSON-RPC Session Example

This example gives developers a copy-ready MCP session for the public
@miraigent/free-ai-ops-mcp package.

The sample JSONL file in this directory is part of the repository smoke test.
When `npm test` passes, this public copy-paste session has been replayed against
the local MCP server and checked for the expected response fields.

Use it before wiring the package into Claude Desktop, Cursor, or a custom MCP
client. It verifies that the server responds to:

- initialize
- tools/list
- tools/call for human_review_gate

## Run

From the repository root:

    npm run mcp < examples/mcp-json-rpc-session/sample-session.jsonl

You should receive three JSON-RPC response lines. The final response should
include a human_review_gate result with:

- gateStatus: stop
- reviewOwner: support lead
- boundary: this tool is a review helper and does not send messages

## Read The Responses

Use the response shape as a quick acceptance check before changing a desktop MCP
client config:

- Response 1 should include `serverInfo.name` set to
  `miraigent-free-ai-ops-mcp`.
- Response 2 should include four tool names:
  `human_review_gate`, `faq_candidate_review`, `ai_safe_crm_note`, and
  `prompt_risk_review`.
- Response 3 should return a `human_review_gate` content block whose JSON text
  includes `gateStatus`, `reviewOwner`, `nextAction`, and `boundary`.

If those fields appear in the terminal but not in Claude Desktop, Cursor, or
another client, the package is likely running and the next thing to check is the
client config, restart behavior, or command path.

Maintainers should update this sample and the smoke test together whenever a
response field or tool name changes. That keeps the GitHub example, npm package,
and README troubleshooting path from drifting apart.

## Public-Safe Feedback

If the output is unclear, open a Tried It feedback issue and include only:

- which command you ran
- the public-safe input shape
- the returned status or field that was unclear

Do not include secrets, credentials, private customer records, internal policy
text, or MIRAI Memory behavior.

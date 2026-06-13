# MCP JSON-RPC Session Example

This example gives developers a copy-ready MCP session for the public
@miraigent/free-ai-ops-mcp package.

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

## Public-Safe Feedback

If the output is unclear, open a Tried It feedback issue and include only:

- which command you ran
- the public-safe input shape
- the returned status or field that was unclear

Do not include secrets, credentials, private customer records, internal policy
text, or MIRAI Memory behavior.

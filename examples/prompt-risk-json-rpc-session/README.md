# Prompt Risk JSON-RPC Session Example

This example gives developers a copy-ready `prompt_risk_review` MCP session for
the public @miraigent/free-ai-ops-mcp package.

Use it when you want to check whether a customer-facing prompt should stop
before AI use. The sample is synthetic and is covered by `npm test`, so the
public example stays aligned with the packaged server response fields.

## Run

From the repository root:

    npm run mcp < examples/prompt-risk-json-rpc-session/sample-session.jsonl

You should receive three JSON-RPC response lines. The final response should
include a `prompt_risk_review` result with:

- recommendation: stop_before_ai_use
- riskFlags: customer_facing and sensitive_data_possible
- boundary: this tool is a prompt risk helper and does not call an AI API

## Public-Safe Feedback

If the output is unclear, open a Tried It feedback issue and include only:

- which command you ran
- the public-safe prompt shape
- the returned recommendation or risk flag that was unclear

Do not include secrets, credentials, private customer records, internal policy
text, paid product files, or private memory behavior.

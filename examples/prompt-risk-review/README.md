# Prompt Risk Review Example

This example shows how to call the public prompt_risk_review MCP tool before an
operational prompt is sent to AI.

Use it when a support, CRM, FAQ, or workflow automation prompt might include
customer-facing output or sensitive data.

## Run

From the repository root:

    npm run example:prompt-risk-review

The example sends sample-request.jsonl to the MCP server and prints the
prompt_risk_review result.

## What To Look For

The sample includes a customer-facing support operation and customer email data,
so the tool should return:

- recommendation: human_review_required or stop_before_ai_use
- riskFlags: customer_facing and sensitive_data_possible
- saferNextStep: a human-reviewed data-handling step before real use

## Safe Use

Use synthetic examples only. Do not paste private customer records, secrets,
contracts, payment details, or internal policy text into public issues,
examples, or screenshots.

This is an operations review helper, not legal or compliance advice.

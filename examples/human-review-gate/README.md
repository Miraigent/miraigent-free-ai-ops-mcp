# Human Review Gate Example

This example shows how FREE-004 connects to the public human_review_gate MCP
tool.

Use it when an AI-drafted reply is ready but you still need a human review
decision before anything reaches a customer.

## Run

From the repository root:

    npm run example:human-review-gate

The example sends sample-request.jsonl to the MCP server and prints the
human_review_gate result.

## What To Copy Into Your Log

Copy result.nextLogRow into review-gate-flow.csv or your own support log.

The sample uses synthetic data only. Do not use private customer data in public
issues, examples, or screenshots.

## Expected Decision

The sample includes refund, complaint, and personal data risk flags, so the tool
should return:

- gateStatus: stop
- reviewOwner: support lead
- boundary: this tool reviews and logs; it does not send messages

This is an operations helper, not legal or compliance advice.

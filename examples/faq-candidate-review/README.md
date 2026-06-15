# FAQ Candidate Review Example

This example shows how to call the public faq_candidate_review MCP tool when a
support question keeps repeating.

Use it before turning repeated inquiry patterns into a public FAQ, internal FAQ,
or human-review rule.

## Run

From the repository root:

    npm run example:faq-candidate-review

The example sends sample-request.jsonl to the MCP server and prints the
faq_candidate_review result.

## What To Look For

The sample uses a low-risk pricing-plan question, so the tool should return:

- recommendedStatus: public_faq_candidate
- faqOutline: a question pattern and answer-scope hint
- reviewSignals: frequency, response cost, and risk level

## Safe Use

Use synthetic examples only. Do not paste private customer records, contracts,
payment details, internal policy text, or support inbox exports into public
issues, examples, or screenshots.

This is an operations review helper. It does not publish FAQ pages or send
customer replies.

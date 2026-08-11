# FAQ Candidate Review JSON-RPC Session Example

This example gives developers a copy-ready `faq_candidate_review` MCP session
for the public @miraigent/free-ai-ops-mcp package.

Use it when you want to confirm whether a repeated support question should
become a public FAQ candidate, internal FAQ, or human-review rule before you
open an issue or draft public help content. The sample is synthetic and is
covered by `npm test`, so the public example stays aligned with the packaged
server response fields.

## Run

From the repository root:

    npm run mcp < examples/faq-candidate-review-json-rpc-session/sample-session.jsonl

From the public npm package:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/faq-candidate-review-json-rpc-session/sample-session.jsonl

You should receive three JSON-RPC response lines. The final response should
include a `faq_candidate_review` result with:

- recommendedStatus: public_faq_candidate
- faqOutline.questionPattern
- faqOutline.answerScope
- reviewSignals.frequency
- reviewSignals.riskLevel

## Public-Safe Feedback

If the output is unclear, open a Tried It feedback issue and include only:

- which command you ran
- the repeated question pattern, frequency, response cost, and risk level
- the returned `recommendedStatus` that was unclear

Do not include support inbox exports, names, emails, contracts, payment details,
internal policy text, paid product files, or private memory behavior.

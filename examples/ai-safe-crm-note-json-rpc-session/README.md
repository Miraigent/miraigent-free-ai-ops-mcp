# AI-Safe CRM Note JSON-RPC Session Example

This example gives developers a copy-ready `ai_safe_crm_note` MCP session for
the public @miraigent/free-ai-ops-mcp package.

Use it when you want to confirm the CRM note output shape from npm before
connecting a real CRM, desktop MCP client, or private support workflow. The
sample is synthetic and is covered by `npm test`, so the public example stays
aligned with the packaged server response fields.

## Run

From the repository root:

    npm run mcp < examples/ai-safe-crm-note-json-rpc-session/sample-session.jsonl

From the public npm package:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/ai-safe-crm-note-json-rpc-session/sample-session.jsonl

You should receive three JSON-RPC response lines. The final response should
include an `ai_safe_crm_note` result with:

- crmNote.customerFacts
- crmNote.aiSuggestion
- crmNote.humanDecision
- crmNote.nextAction
- maskingChecklist

## Public-Safe Feedback

If the output is unclear, open a Tried It feedback issue and include only:

- which command you ran
- the masked note label, channel, and personal-data yes/no field
- the returned `crmNote.nextAction` or `maskingChecklist` item that was unclear

Do not include raw CRM notes, names, emails, account IDs, contracts, payment
details, internal policy text, paid product files, or private memory behavior.

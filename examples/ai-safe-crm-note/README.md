# AI-Safe CRM Note Example

This example shows how to call the public ai_safe_crm_note MCP tool before a
support, sales, or onboarding note is copied into a CRM.

Use it when a note mixes customer facts, AI suggestions, human decisions, and
next actions in one paragraph.

## Run

From the repository root:

    npm run example:ai-safe-crm-note

The example sends sample-request.jsonl to the MCP server and prints the
ai_safe_crm_note result.

## What To Look For

The sample uses a public-safe setup-timing note, so the tool should return:

- crmNote.customerFacts: the factual summary only
- crmNote.aiSuggestion: a separate AI suggestion placeholder
- crmNote.humanDecision: a separate human decision placeholder
- crmNote.nextAction: the next support or sales action

## Safe Use

Use synthetic examples only. Do not paste private customer records, names,
emails, phone numbers, account IDs, contracts, payment details, internal policy
text, or CRM exports into public issues, examples, or screenshots.

This is an operations note helper. It does not write to a CRM or call an AI API.

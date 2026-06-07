# Miraigent Free AI Ops MCP

Free public Model Context Protocol (MCP) server for practical AI operations.

This repository starts with small alpha tools that help teams review AI usage
before they automate customer-facing work.

Use it when a team wants AI drafts, prompts, FAQ candidates, or CRM notes to go
through a visible human-review gate before they reach customers or shared
systems.

## Alpha Tools

- human_review_gate: decide whether an AI draft should be sent, reviewed, or stopped.
- faq_candidate_review: turn repeated inquiry patterns into FAQ candidates.
- ai_safe_crm_note: structure CRM notes without mixing facts, AI suggestions, and human decisions.
- prompt_risk_review: review an AI prompt or task before it is used in operations.

These tools are public alpha candidates. Please use GitHub issues for bugs,
unclear outputs, missing fields, and safe public use cases.

## Start With One Review Gate

The first practical use case is a review gate for AI-drafted customer replies.
Before a team lets an AI draft leave a help desk, inbox, form workflow, or CRM,
the tool separates three outcomes:

- auto_ok: low-risk internal or routine copy can continue.
- review_required: a human should review the draft before it is sent.
- stop: sensitive, legal, payment, complaint, privacy, or public-facing risks
  should be handled by a person before AI-assisted sending continues.

### Quick MCP Example

Example input:

    {
      "draftType": "customer support reply",
      "audience": "customer",
      "riskFlags": ["refund", "complaint", "personal data"],
      "reviewOwner": "support lead",
      "sendMode": "manual"
    }

Expected result:

    {
      "gateStatus": "stop",
      "reviewOwner": "support lead",
      "boundary": "This tool is a review helper. It does not send messages."
    }

Use this as a small public proof before building a larger AI support workflow.

See examples/human-review-gate/ for copy-ready JSON-RPC examples and a sample
decision log that match the free Gumroad kit.

## Launch Flow

See LAUNCH_FLOW.md for the first public posting plan, issue collection flow, and
routes toward Miraigent and Agent Memories.

## Run

    npm run mcp

Run from npm:

    npx @miraigent/free-ai-ops-mcp

Run checks:

    npm run check
    npm test

Direct JSON-RPC smoke call:

    printf '%s\n' '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"human_review_gate","arguments":{"draftType":"customer support reply","audience":"customer","riskFlags":["refund","complaint","personal data"],"reviewOwner":"support lead","sendMode":"manual"}}}' | npm run mcp

Run the public FREE-004 example:

    npm run example:human-review-gate

## npm Package

Package name: @miraigent/free-ai-ops-mcp

Command:

    npx @miraigent/free-ai-ops-mcp

## Public Boundary

This repository may publish:

- free MCP tools for reviewable AI operations
- examples without private customer data
- tests and issue templates

This repository must not publish:

- credentials, tokens, cookies, or private keys
- customer records
- private company notes
- MIRAI Memory engine details
- working memory MCP behavior
- full paid product files

## Related Resources

- Resource hub: https://miraigent.com/resources.html
- Parent template repository: https://github.com/Miraigent/miraigent-ai-ops-templates
- Free template library: https://miraigent.com/en/free-ai-operations-templates.html
- Free Gumroad review kit: https://miraigent.gumroad.com/l/human-review-gate-ai-drafts

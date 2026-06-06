# Miraigent Free AI Ops MCP

Free public MCP tools for practical AI operations.

This repository starts with small alpha tools that help teams review AI usage
before they automate customer-facing work.

## Alpha Tools

- human_review_gate: decide whether an AI draft should be sent, reviewed, or stopped.
- faq_candidate_review: turn repeated inquiry patterns into FAQ candidates.
- ai_safe_crm_note: structure CRM notes without mixing facts, AI suggestions, and human decisions.

These tools are public alpha candidates. Please use GitHub issues for bugs,
unclear outputs, missing fields, and safe public use cases.

## Run

    npm run mcp

Run checks:

    npm run check
    npm test

## npm Plan

Package name: @miraigent/free-ai-ops-mcp

Expected command after npm publication:

    npx @miraigent/free-ai-ops-mcp

Publishing requires an authenticated npm account with access to the @miraigent
scope.

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

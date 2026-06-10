# Miraigent Free AI Ops MCP

Free public Model Context Protocol (MCP) server for human-reviewed AI
operations.

Use it when you are building an AI tool, MCP server, support workflow, or
internal automation that needs a visible human-review gate before AI output
reaches customers or shared systems.

## Try It In 30 Seconds

Run the public MCP server:

    npx @miraigent/free-ai-ops-mcp

Then send a JSON-RPC tool call such as the copy-ready example in
examples/human-review-gate/.

If you are not a developer and only want the spreadsheet/checklist version
first, download the free review kit:

https://miraigent.gumroad.com/l/human-review-gate-ai-drafts?utm_source=github&utm_medium=readme&utm_campaign=free-ai-ops-mcp-013

## Use With Claude Desktop or Cursor

Add to your `claude_desktop_config.json` or Cursor MCP settings:

    {
      "mcpServers": {
        "miraigent-free-ai-ops-mcp": {
          "command": "npx",
          "args": ["-y", "@miraigent/free-ai-ops-mcp"]
        }
      }
    }

After restarting Claude Desktop or Cursor, the four tools
(`human_review_gate`, `faq_candidate_review`, `ai_safe_crm_note`,
`prompt_risk_review`) will be available in the MCP tools panel.

Claude Desktop config location:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

## Who This Helps

- Developers adding review gates to AI agents or MCP tools.
- Indie hackers building support, FAQ, CRM, or prompt-review utilities.
- AI automation builders who need a safe stop/review/approve step.
- Teams prototyping human-in-the-loop AI workflows before integrating real data.
- Operators who can run npm/npx and want a small public MCP example.

## What To Do Next

- Try one tool with synthetic data.
- Share what happened in the Tried It feedback issue if setup, JSON-RPC input,
  or the returned gate decision was unclear.
- Open a workflow request if a risk flag, status, or output field is missing.
- Use the Gumroad kit only if you want CSV/checklist files instead of npm.
- Adapt the review-gate fields before connecting private systems or real users.

Issue entry points:

- Tried It feedback: https://github.com/Miraigent/miraigent-free-ai-ops-mcp/issues/new?template=tried_it_feedback.md
- Workflow request: https://github.com/Miraigent/miraigent-free-ai-ops-mcp/issues/new?template=free_mcp_candidate_request.md
- Bug report: https://github.com/Miraigent/miraigent-free-ai-ops-mcp/issues/new?template=free_mcp_bug_report.md

## Alpha Tools

- human_review_gate: decide whether an AI draft should be sent, reviewed, or stopped.
- faq_candidate_review: turn repeated inquiry patterns into FAQ candidates.
- ai_safe_crm_note: structure CRM notes without mixing facts, AI suggestions, and human decisions.
- prompt_risk_review: review an AI prompt or task before it is used in operations.

These tools are public alpha candidates. Please use GitHub issues for bugs,
unclear outputs, missing fields, and safe public use cases:

https://github.com/Miraigent/miraigent-free-ai-ops-mcp/issues/new/choose

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
developer-focused distribution route.

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
- Free Gumroad review kit: https://miraigent.gumroad.com/l/human-review-gate-ai-drafts?utm_source=github&utm_medium=readme&utm_campaign=free-ai-ops-mcp-013

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

For a complete public-safe MCP session that covers initialize, tools/list, and
one tool call, see examples/mcp-json-rpc-session/.

## One-Command Public Smoke Test

Use this when you want to confirm the npm package works before editing a desktop
MCP client config:

    npx -y @miraigent/free-ai-ops-mcp < examples/mcp-json-rpc-session/sample-session.jsonl

The response should include:

- serverInfo.name: miraigent-free-ai-ops-mcp
- tools/list with four tools
- human_review_gate returning `stop` for the synthetic refund/complaint/personal
  data example

This is the fastest public proof path for npm and GitHub users. If the command
starts but the returned status is confusing, open a Tried It feedback issue with
the command, synthetic input shape, and returned status only.

If the result is unclear, open a Tried It feedback issue with synthetic input
only. A useful issue can be as small as:

- the tool you ran
- the returned status or field that was confusing
- the review rule, risk flag, or example that would make the next run easier

https://github.com/Miraigent/miraigent-free-ai-ops-mcp/issues/new?template=tried_it_feedback.md

If you are not a developer and only want the spreadsheet/checklist version after
seeing the MCP example, download the free review kit:

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

## What Success Looks Like

Use this quick check before connecting private systems or opening an issue:

- The MCP client starts `miraigent-free-ai-ops-mcp` without credentials.
- `tools/list` shows four public alpha tools:
  `human_review_gate`, `faq_candidate_review`, `ai_safe_crm_note`, and
  `prompt_risk_review`.
- A support-reply review returns one of `auto_ok`, `review_required`, or
  `stop`, plus a `boundary` note that confirms the package does not send
  messages.
- A prompt review returns `proceed_with_checklist`,
  `human_review_required`, or `stop_before_ai_use` before any real customer
  data is used.

If one of those checks fails, open a Tried It feedback issue with the command
you ran, the public-safe input shape, and the returned status field. Do not
paste private customer records, secrets, internal policy text, or paid product
files.

## Copy A Useful Feedback Result

When you open a Tried It feedback issue, the most useful report is the smallest
public-safe result shape that shows where the review gate helped or felt unclear.

Good public-safe issue body:

    Command: npx @miraigent/free-ai-ops-mcp
    Tool: human_review_gate
    Input shape:
      draftType: customer support reply
      audience: customer
      riskFlags: refund; complaint; personal data
      sendMode: manual
    Returned status: stop
    Confusing part: I expected review_required, but stop may be correct because refund and personal data were both present.
    Requested improvement: Add one sentence explaining why stop is stronger than review_required.

Keep the report synthetic. Replace names, emails, customer text, internal policy
text, and private CRM notes with short labels before posting.

## Who This Helps

- Developers adding review gates to AI agents or MCP tools.
- Indie hackers building support, FAQ, CRM, or prompt-review utilities.
- AI automation builders who need a safe stop/review/approve step.
- Teams prototyping human-in-the-loop AI workflows before integrating real data.
- Operators who can run npm/npx and want a small public MCP example.

## Pick Your First Tool

Start with the tool that matches the first unsafe handoff in your workflow:

- AI draft may reach a customer: use `human_review_gate`.
- Repeated support questions should become a public FAQ: use
  `faq_candidate_review`.
- CRM notes mix facts, AI suggestions, and human decisions: use
  `ai_safe_crm_note`.
- A prompt may touch customer data or public output: use `prompt_risk_review`.

Copy-ready examples:

- Human review gate: `npm run example:human-review-gate`
- FAQ candidate review: `npm run example:faq-candidate-review`
- Prompt risk review: `npm run example:prompt-risk-review`

All examples use synthetic data. Keep private customer records, secrets,
internal policy text, and paid product files out of public issues and screenshots.

## What To Do Next

- Try one tool with synthetic data.
- If you ran `npx @miraigent/free-ai-ops-mcp`, paste the public-safe result
  shape into the Tried It feedback issue.
- Share what happened in the Tried It feedback issue if setup, JSON-RPC input,
  or the returned gate decision was unclear.
- Open a workflow request if a risk flag, status, or output field is missing.
- Use the Gumroad kit after the MCP example if you want CSV/checklist files
  instead of npm.
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

## Copy-Ready MCP Session

Use this when you want to confirm the package responds like an MCP server before
connecting it to Claude Desktop, Cursor, or your own MCP client:

    npm run mcp < examples/mcp-json-rpc-session/sample-session.jsonl

The session sends three JSON-RPC messages:

- initialize: confirms protocolVersion, capabilities, and serverInfo.
- tools/list: confirms the four public alpha tools are visible.
- tools/call: runs human_review_gate with synthetic support-reply data.

If you open a GitHub issue, copy only synthetic input shapes and returned status
fields. Do not paste private customer records, secrets, tokens, internal policy
text, or MIRAI Memory behavior.

## Check A Prompt Before AI Use

Use prompt_risk_review before a support, CRM, FAQ, or workflow prompt is sent to
AI. It helps developers decide whether a prompt can proceed with a checklist,
needs human review, or should stop before use because it touches sensitive data
or customer-facing output.

Example input:

    {
      "operation": "support automation",
      "promptSummary": "Draft a customer reply from inquiry details and suggest the next support step.",
      "dataTypes": ["customer email", "inquiry body", "plan name"],
      "customerFacing": true,
      "riskLevel": "medium"
    }

Expected result:

    {
      "recommendation": "human_review_required",
      "riskFlags": ["customer_facing", "sensitive_data_possible"],
      "boundary": "This tool is a prompt risk helper. It is not legal advice and does not call an AI API."
    }

Run the copy-ready example:

    npm run example:prompt-risk-review

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

Run the prompt risk review example:

    npm run example:prompt-risk-review

Run the FAQ candidate review example:

    npm run example:faq-candidate-review

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

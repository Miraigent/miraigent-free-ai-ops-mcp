# Miraigent Free AI Ops MCP

Free public Model Context Protocol (MCP) server for human-reviewed AI
operations.

Use it when you are building an AI tool, MCP server, support workflow, or
internal automation that needs a visible human-review gate before AI output
reaches customers or shared systems.

## Try It In 30 Seconds

Run the public MCP server:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp

Then send a JSON-RPC tool call such as the copy-ready example in
examples/human-review-gate/.

For a complete public-safe MCP session that covers initialize, tools/list, and
one tool call, see examples/mcp-json-rpc-session/.

If you only want to confirm which tools the server exposes before sending any
sample tool-call input, use examples/tools-list-json-rpc-session/.

If your first concern is whether a customer-facing prompt should be stopped
before AI use, use examples/prompt-risk-json-rpc-session/ for a copy-ready
prompt_risk_review session.

If your first concern is separating customer facts, AI suggestions, human
decisions, and next actions before a note goes into a CRM, use
examples/ai-safe-crm-note-json-rpc-session/ for a copy-ready ai_safe_crm_note
session.

That JSON-RPC session is also covered by `npm test`, so the README proof path
and packaged example stay aligned when the MCP response shape changes.

## One-Command Public Smoke Test

Use this when you want to confirm the npm package works before editing a desktop
MCP client config:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/mcp-json-rpc-session/sample-session.jsonl

The response should include:

- serverInfo.name: miraigent-free-ai-ops-mcp
- tools/list with four tools
- human_review_gate returning `stop` for the synthetic refund/complaint/personal
  data example

This is the fastest public proof path for npm and GitHub users. If the command
starts but the returned status is confusing, open a Tried It feedback issue with
the command, synthetic input shape, and returned status only.

To inspect the public tool list without running any tool call:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/tools-list-json-rpc-session/sample-session.jsonl

That response should include `human_review_gate`, `faq_candidate_review`,
`ai_safe_crm_note`, and `prompt_risk_review`.

If that tools-list check passes, the next safest tool-call check is the bundled
`human_review_gate` session:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/mcp-json-rpc-session/sample-session.jsonl

That sample uses only synthetic refund, complaint, and personal-data flags, and
should return `gateStatus: "stop"`. Use this step to confirm tool-call output
before pasting any real workflow data into an MCP client.

For maintainers and contributors, `npm test` replays the same public
`examples/mcp-json-rpc-session/sample-session.jsonl` file and checks the
returned server name, version, tool count, and review-gate fields.

If you are checking the package from npm search, run the public help first:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp --help

The help output lists the available MCP tools, the one-command smoke test, and
the public-safe boundary before you send any JSON-RPC input. The first line
also prints `Miraigent Free AI Ops MCP <version>`, which is the quickest way to
confirm whether `npx` is using the current public package or a stale local
cache.

If a local npx cache or desktop MCP client appears stale, compare it with the
public registry version before changing private client configuration:

    npm view @miraigent/free-ai-ops-mcp version

The version printed by `npm view` should match the version shown in the package
help output and in the MCP `initialize` response.

Quick version mismatch check:

1. Run `npm view @miraigent/free-ai-ops-mcp version`.
2. Run `npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp --help` and
   confirm the header shows the same version.
3. Run the one-command smoke test and confirm the `initialize` response includes
   the same `serverInfo.version`.

If only the desktop MCP client shows an older version after those checks pass,
restart the client and re-check its `command` and `args` path before changing
any private workflow data.

Quick initialize response check:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/mcp-json-rpc-session/sample-session.jsonl | head -n 1

That first response should include `protocolVersion: "2024-11-05"`,
`capabilities.tools`, and `serverInfo.version`. If those fields appear in the
terminal but not in a desktop MCP client, debug the client restart/config path
before changing private workflow data.

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
          "args": ["-y", "free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp"]
        }
      }
    }

After restarting Claude Desktop or Cursor, the four tools
(`human_review_gate`, `faq_candidate_review`, `ai_safe_crm_note`,
`prompt_risk_review`) will be available in the MCP tools panel.

Before connecting a real workflow, try one synthetic `human_review_gate` call in
your MCP client and compare the input shape with this public example:

    {
      "draftType": "support reply",
      "audience": "customer",
      "riskFlags": ["refund", "personal data"],
      "reviewOwner": "support lead",
      "sendMode": "manual"
    }

For that kind of input, the expected result is `stop` or `review_required`, plus
a boundary note saying the tool does not send messages. If your client shows a
different field name or hides the returned status, open a Tried It feedback
issue with synthetic input only.

Claude Desktop config location:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

## MCP Client Troubleshooting Checklist

If the package runs from the terminal but does not appear inside Claude Desktop,
Cursor, or another MCP client, check the connection in this order:

- Run `npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp --help` in the
  same shell account that launches the MCP client.
- Confirm the client config uses `command: "npx"` and the exact args shown in
  this README.
- Restart the MCP client after saving the config. Most desktop clients read MCP
  server config only on startup.
- Run the one-command smoke test with the public JSON-RPC session before
  changing private workflows.
- If `tools/list` works in the terminal but not in the client, open a Tried It
  feedback issue with the client name, operating system, command shape, and the
  returned public-safe status fields.

Do not paste real customer records, secrets, internal policy text, paid product
files, or private memory behavior into client logs or GitHub issues.

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

## Read The Returned Status

After the smoke test runs, look for the status field from the tool you called
before changing client configuration or private workflows.

Quick field map:

- `human_review_gate`: read `gateStatus`.
- `faq_candidate_review`: read `recommendedStatus`.
- `ai_safe_crm_note`: read `crmNote.nextAction` and the `maskingChecklist`.
- `prompt_risk_review`: read `recommendation` and `riskFlags`.

Those fields are returned inside MCP `content[0].text`, so parse that wrapped
text as JSON before deciding whether the next action is proceed, review, or
stop.

In raw JSON-RPC output, MCP wraps each tool result inside `content[0].text`.
Parse that text value as JSON before you check the returned decision:

    const response = JSON.parse(lineFromStdout);
    const toolResult = JSON.parse(response.result.content[0].text);
    console.log(toolResult.gateStatus);

For the bundled smoke-test session, that prints `stop`. Use the parsed
`gateStatus`, `recommendation`, or `recommendedStatus` field from the relevant
tool before changing a desktop MCP client config or connecting private data.

If you only need a terminal check, you can copy the final JSON-RPC line from the
smoke-test output and inspect the wrapped text field with Node:

    node -e 'const r=JSON.parse(process.argv[1]); console.log(JSON.parse(r.result.content[0].text));' '<paste one response line here>'

To avoid copying any response text at all, run the bundled public sample and
parse only its final synthetic tool-call response:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp < examples/mcp-json-rpc-session/sample-session.jsonl | tail -n 1 | node -e 'process.stdin.on("data", c => { const r = JSON.parse(c); console.log(JSON.parse(r.result.content[0].text).gateStatus); })'

That prints `stop` for the bundled support-reply example. If it does, the
package is returning the expected MCP result shape and you can debug client
configuration separately from tool behavior.

Paste only the synthetic response from the public example. Do not paste private
customer records or desktop client logs into shell history, screenshots, or
GitHub issues.

For `human_review_gate`:

- `auto_ok`: the synthetic draft looks low risk, but the tool still does not
  send anything.
- `review_required`: keep a human reviewer in the workflow before sending.
- `stop`: pause the workflow and resolve the sensitive, payment, complaint,
  privacy, public-facing, or policy issue first.

For `prompt_risk_review`:

- `review_checklist_required`: document the data-handling checklist before
  running the prompt.
- `human_review_required`: add a human review step before AI output can affect a
  customer-facing workflow.
- `stop_before_ai_use`: do not run the prompt until the data-handling rule is
  reviewed.

For public `prompt_risk_review` feedback, share only the operation label,
sanitized data-type labels, the returned `recommendation`, and the returned
`riskFlags`. Do not paste the original prompt, customer text, internal policy,
or private workflow logs.

For public `ai_safe_crm_note` feedback, share only a masked note label, channel,
whether personal data was present, the returned `crmNote.nextAction`, and the
returned `maskingChecklist` result. Do not paste the raw CRM note, customer
message, contact details, internal policy, or private workflow logs.

For `faq_candidate_review`, use `recommendedStatus` to decide whether the
pattern belongs in a public FAQ, internal FAQ, or human-review rule. For
`ai_safe_crm_note`, check that facts, AI suggestions, human decisions, and next
actions stay in separate fields.

If the status is surprising, open a Tried It feedback issue with synthetic input
only. The most useful report says which status you expected, which status you
received, and what extra rule or explanation would have made the result easier
to use.

## Copy A Useful Feedback Result

When you open a Tried It feedback issue, the most useful report is the smallest
public-safe result shape that shows where the review gate helped or felt unclear.

Good public-safe issue body:

    Command: npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp
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
- AI-safe CRM note: `npm run example:ai-safe-crm-note`
- AI-safe CRM note JSON-RPC session:
  `npm run mcp < examples/ai-safe-crm-note-json-rpc-session/sample-session.jsonl`
- Prompt risk review: `npm run example:prompt-risk-review`
- Prompt risk JSON-RPC session:
  `npm run mcp < examples/prompt-risk-json-rpc-session/sample-session.jsonl`

All examples use synthetic data. Keep private customer records, secrets,
internal policy text, and paid product files out of public issues and screenshots.

## What To Do Next

- Try one tool with synthetic data.
- If you ran `npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp`, paste the public-safe result
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

The first response should include `protocolVersion: "2024-11-05"`,
`capabilities.tools`, and a `serverInfo.version` value that matches
`package.json` and the public npm registry version.

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

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp

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

Run the AI-safe CRM note example:

    npm run example:ai-safe-crm-note

Run the AI-safe CRM note JSON-RPC session:

    npm run mcp < examples/ai-safe-crm-note-json-rpc-session/sample-session.jsonl

## npm Package

Package name: @miraigent/free-ai-ops-mcp

Command:

    npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp

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

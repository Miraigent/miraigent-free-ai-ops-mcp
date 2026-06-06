# Launch Flow

This document defines the first public launch flow for Miraigent Free AI Ops MCP.

The goal is to distribute useful free MCP tools, collect public GitHub issues,
and guide interested users toward Miraigent and Agent Memories.

## Launch Position

Use this framing:

Free MCP tools for teams that want to use AI in customer operations without
losing human review.

Do not frame this as full automation.

The public promise is:

- start with review gates
- organize FAQ candidates
- keep CRM notes safer
- collect feedback in GitHub issues
- connect deeper implementation needs to Miraigent
- connect reusable operating lessons to Agent Memories

## First Three MCPs

### 1. Human Review Gate MCP

Primary hook:

Before an AI draft is sent to a customer, decide whether it can proceed, needs
human review, or should stop.

Why first:

- Easy to understand.
- Strong safety message.
- Connects directly to AI governance and support operations.
- Likely to generate issue feedback about missing risk flags and review fields.

Route:

GitHub free tool -> Issue feedback -> Miraigent free diagnosis for company
workflow design -> Agent Memories for reusable review lessons.

### 2. FAQ Candidate Review MCP

Primary hook:

Turn repeated inquiries into FAQ candidates before building a chatbot or AI
reply system.

Why second:

- Strong fit for small business support.
- Leads naturally to Miraigent's FAQ and inquiry-flow diagnosis.
- Generates practical issues about status names, fields, and review flows.

Route:

GitHub free tool -> Qiita/Zenn example -> Miraigent resource hub -> free
diagnosis -> Agent Memories for FAQ decision memory.

### 3. AI-Safe CRM Notes MCP

Primary hook:

Separate customer facts, AI suggestions, human decisions, and next actions in
CRM notes.

Why third:

- Easy to connect to sales and support.
- Useful without private integrations.
- Creates a bridge from free MCP to paid business workflow design.

Route:

GitHub free tool -> note article -> Miraigent free diagnosis -> Agent Memories
for repeated customer-operation lessons.

### 4. Prompt Risk Review MCP

Primary hook:

Before sending an operational prompt to AI, check whether the task includes
customer-facing output or sensitive data.

Why fourth:

- It connects naturally to AI safety and public issue feedback.
- It is useful before users connect the MCP to real workflows.
- It supports the message that free MCP tools are review helpers, not full
  automation.

Route:

GitHub free tool -> Issue feedback about missing risk flags -> Miraigent free
diagnosis for data-handling and review-rule design.

## Second Wave Candidates

Publish after the first three tools have public examples and issue feedback.

- Customer Data Masking Checklist MCP
- Diagnosis Intake Log MCP
- Decision Log MCP
- Support Workflow Starter Map MCP

## Funnel Design

### Step 1: Free Distribution

Channels:

- GitHub repository
- npm after authentication is ready
- Qiita implementation article
- Zenn technical article
- note business-facing article
- X thread with one clear use case

CTA:

- Try the free MCP.
- Open an issue if output fields or review rules are missing.
- Use only synthetic or public-safe examples in issues.

### Step 2: Issue Collection

Issue types to encourage:

- Missing risk flag.
- Confusing output.
- Better checklist field.
- New workflow candidate.
- Public-safe real-world use case.

Do not collect:

- private customer records
- credentials
- company internal manuals
- MIRAI Memory engine details
- working memory MCP requests

### Step 3: Miraigent Route

When a user needs company-specific workflow design, route them to Miraigent.

CTA language:

If your team needs to adapt this to real support, CRM, or FAQ workflows, start
with Miraigent's free diagnosis.

Primary URL:

https://miraigent.com/diagnosis

Secondary URL:

https://miraigent.com/resources

### Step 4: Agent Memories Route

When a user wants repeated review lessons, decisions, and operating notes to be
reused, route them to Agent Memories.

CTA language:

If the same review decisions repeat, turn them into reusable operating memory
with Agent Memories.

Primary URL:

https://agentmemories.jp/

## Posting Plan

### Post 1: GitHub Launch

Goal:

Announce the repository and ask for issues.

Hook:

We published free MCP alpha tools for human-reviewed AI operations.

CTA:

Try them, and open an issue if a review field is missing.

### Post 2: Human Review Gate

Goal:

Explain the most understandable tool first.

Hook:

Do not start with auto-send. Start with a review gate.

CTA:

Use Human Review Gate MCP and tell us what risk flags are missing.

### Post 3: FAQ Candidate Review

Goal:

Connect to inquiry and FAQ pain.

Hook:

Before building an AI chatbot, decide which questions should become FAQ.

CTA:

Use FAQ Candidate Review MCP and suggest missing statuses or fields.

### Post 4: AI-Safe CRM Notes

Goal:

Connect sales/support operations to Miraigent.

Hook:

CRM notes should not mix facts, AI suggestions, and human decisions.

CTA:

Use AI-Safe CRM Notes MCP, then book a Miraigent free diagnosis for real
workflow design.

### Post 5: Prompt Risk Review

Goal:

Connect free MCP usage to AI safety before automation.

Hook:

Before sending a prompt into AI, check whether it touches customer-facing output
or sensitive data.

CTA:

Use Prompt Risk Review MCP and open an issue if a risk flag is missing.

### Post 6: Agent Memories Bridge

Goal:

Connect repeated decisions to Agent Memories.

Hook:

If the same AI review decision repeats, it should become reusable operating
memory.

CTA:

Try the free MCP tools, then use Agent Memories for repeated operating lessons.

## Suggested First Public Thread

Post 1:

Free MCP alpha tools are now public.

They help teams review AI operations before customer-facing automation:

- Human Review Gate
- FAQ Candidate Review
- AI-Safe CRM Notes
- Prompt Risk Review

GitHub:
https://github.com/Miraigent/miraigent-free-ai-ops-mcp

Post 2:

The first goal is not full automation.

The first goal is to decide:

- what AI may draft
- what humans must review
- what should stop
- what should be logged

Post 3:

If an output feels unclear, open an issue.

Useful issues:

- missing risk flag
- missing CRM field
- unclear FAQ status
- better public-safe example

Please do not include private customer data.

Post 4:

Prompt Risk Review MCP checks whether an operational prompt touches:

- customer-facing output
- personal data
- contracts or payments
- complaints or risk areas

Post 5:

For company-specific support, CRM, or FAQ workflow design, use Miraigent's free
diagnosis:

https://miraigent.com/diagnosis

Post 6:

For repeated review lessons and operating decisions, connect the workflow to
Agent Memories:

https://agentmemories.jp/

## Success Signals

Early signals:

- GitHub stars
- issue reports
- npm downloads after publication
- article views
- resource hub clicks
- free diagnosis clicks
- Agent Memories clicks

Do not over-optimize for stars only. Practical issues from real users are more
valuable.

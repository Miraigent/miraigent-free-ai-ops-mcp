---
name: Free MCP candidate request
about: Request or prioritize a public free MCP tool
title: "[Candidate]: "
labels: enhancement
assignees: ""
---

## Candidate or workflow

Which workflow should the MCP support?

## Why it helps

Explain how it improves human review, privacy, CRM notes, FAQ work, or support operations.

## Expected inputs

List the public-safe fields the tool should accept.

Example shape:

- workflow_type: support reply review
- risk_flags: refund; personal data; complaint
- review_owner: support lead

## Expected output

List the output fields the tool should return.

Include the decision field you expect users to read first, such as
`gateStatus`, `recommendedStatus`, `recommendation`, or `nextAction`.

Example shape:

- decision_field: gateStatus
- possible_statuses: auto_ok; review_required; stop
- boundary_note: does not send messages or store customer data

## Boundary check

- [ ] This can work without private customer data.
- [ ] This can be demonstrated with synthetic input and output only.
- [ ] This does not require MIRAI Memory engine behavior.
- [ ] This does not request a working memory MCP.
- [ ] This does not require paid product files, secrets, cookies, tokens, or private keys.

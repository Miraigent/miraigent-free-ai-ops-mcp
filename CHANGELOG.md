# Changelog

## [0.1.72] - 2026-08-20

### Changed

- Clarified the Tried It feedback template for version-mismatch reports so users
  can share the `npm view` version, `--help` header version, MCP `initialize`
  serverInfo.version, and desktop-client stale-cache signal without pasting
  private MCP client logs.

## [0.1.71] - 2026-08-19

### Changed

- Added a copy-safe status extraction command to the `faq_candidate_review`
  JSON-RPC example README, with smoke-test coverage so users can confirm the
  recommended FAQ status without sharing a full MCP response or support inbox
  export.

## [0.1.70] - 2026-08-18

### Changed

- Clarified the public bug report template for `Unknown tool` reports so users
  can share the requested synthetic tool name, JSON-RPC request id,
  `error.message`, and visible `tools/list` names without pasting private MCP
  client logs.

## [0.1.69] - 2026-08-16

### Changed

- Added a copy-safe tools-list example README command for printing only the
  public MCP tool names, with smoke-test coverage so desktop client feedback
  can avoid full JSON-RPC logs.

## [0.1.68] - 2026-08-15

### Changed

- Added a copy-safe status extraction command to the `prompt_risk_review`
  JSON-RPC example README, with smoke-test coverage so users can confirm the
  recommendation and risk flags without sharing a full MCP response.

## [0.1.67] - 2026-08-14

### Changed

- Added a copy-safe README command for extracting only the
  `faq_candidate_review` recommended status from the bundled JSON-RPC session,
  with smoke-test coverage so FAQ feedback can stay public-safe.

## [0.1.66] - 2026-08-13

### Changed

- Clarified the Tried It feedback template for `tools/list` problems so users
  can report the client name, command shape, visible tool count, tool names, and
  public error field without pasting private MCP client logs.

## [0.1.65] - 2026-08-12

### Changed

- Added a copy-safe README command for extracting only the
  `prompt_risk_review` recommendation and risk flags from the bundled JSON-RPC
  session, with smoke-test coverage so prompt-risk troubleshooting can stay
  public-safe.

## [0.1.64] - 2026-08-11

### Added

- Added a copy-ready public JSON-RPC session for `faq_candidate_review`, plus
  README routing and smoke-test coverage so npm users can confirm the FAQ
  recommendation field without sharing support inbox exports.

## [0.1.63] - 2026-08-10

### Changed

- Added a clone-free npm tarball command for printing only the packaged
  `tools/list` tool names, with smoke-test coverage so npm users can confirm the
  public tool set without leaving downloaded tarballs in a checkout.

## [0.1.62] - 2026-08-09

### Changed

- Added a copy-safe README command for printing only the public MCP tool names
  from `tools/list`, with smoke-test coverage so npm users can confirm the
  exposed tool set without pasting full client logs.

## [0.1.61] - 2026-08-08

### Changed

- Clarified how public MCP users should handle `Unknown tool` JSON-RPC errors:
  re-run `tools/list`, compare the requested tool name with the four public
  tool names, and report only the command shape plus public error field.

## [0.1.60] - 2026-08-04

### Changed

- Clarified the npm tarball smoke-test success criteria so users know to check
  the initialize response and final `gateStatus: "stop"` result from the
  packaged synthetic JSON-RPC session, with smoke-test coverage to keep that
  guidance visible.

## [0.1.59] - 2026-08-03

### Changed

- Clarified the public bug report template for wrong review-decision reports so
  users include the expected decision field and a synthetic behavior reason
  without sharing private workflow rules, with smoke-test coverage to keep that
  guidance packaged.

## [0.1.58] - 2026-08-02

### Changed

- Added a no-leftover npm tarball smoke-test variant that runs from a temporary
  directory and removes the downloaded package after streaming the bundled
  public JSON-RPC example, with smoke-test coverage to keep the public cleanup
  path visible.

## [0.1.57] - 2026-08-01

### Changed

- Clarified how npm users can stream the bundled public JSON-RPC example from
  the package tarball without cloning the repository, with smoke-test coverage
  so the README path stays packaged and public-safe.

## [0.1.56] - 2026-07-31

### Changed

- Added a copy-safe README command for extracting only the
  `ai_safe_crm_note` next action from the bundled JSON-RPC session, with
  smoke-test coverage so CRM note troubleshooting can stay public-safe.

## [0.1.55] - 2026-07-30

### Added

- Added a copy-ready public JSON-RPC session for `ai_safe_crm_note`, plus README
  routing and smoke-test coverage so npm users can test CRM note field
  separation without cloning the repository or sharing raw CRM notes.

## [0.1.54] - 2026-07-29

### Changed

- Clarified the public-safe `ai_safe_crm_note` feedback shape so users can
  report separated CRM-note fields and masking results without sharing raw CRM
  notes, customer text, or private workflow data, with smoke-test coverage to
  keep that guidance packaged.

## [0.1.53] - 2026-07-28

### Changed

- Clarified the public-safe `prompt_risk_review` feedback shape so users can
  report recommendation and risk flags without sharing the original prompt or
  customer data, with smoke-test coverage to keep that guidance packaged.

## [0.1.52] - 2026-07-27

### Changed

- Clarified the public bug report template with the JSON-RPC request id or
  response line number to identify failing `.jsonl` examples without private
  MCP client logs, with smoke-test coverage to keep that report field packaged.

## [0.1.51] - 2026-07-27

### Changed

- Clarified the public bug report template with the MCP method/step and first
  decision field to check, with smoke-test coverage so reports can identify the
  failing JSON-RPC stage without private logs.

## [0.1.50] - 2026-07-27

### Changed

- Included the public bug report and Tried It feedback templates in the npm
  package files list, with smoke-test coverage so packed releases keep the same
  public-safe issue guidance as the GitHub repository.

## [0.1.49] - 2026-07-26

### Changed

- Clarified the Tried It feedback template with minimal public-safe examples for
  npx, desktop MCP clients, and returned decision fields, with smoke-test
  coverage so public issue reports stay useful without private logs or data.

## [0.1.48] - 2026-07-24

### Changed

- Clarified the README path from a tools-list-only check to the safest bundled
  `human_review_gate` tool-call smoke test, with smoke-test coverage so public
  users know the next step before using real workflow data.

## [0.1.47] - 2026-07-23

### Changed

- Clarified the free MCP candidate request template with public-safe input and
  output examples, expected decision-field guidance, and smoke-test coverage so
  new workflow requests stay useful without exposing private data or paid files.

## [0.1.46] - 2026-07-22

### Changed

- Added a README field map for each public MCP tool so users know which returned
  status field to inspect before changing MCP client configuration or sharing a
  public-safe issue.

## [0.1.45] - 2026-07-21

### Changed

- Clarified the public GitHub issue templates so MCP users report command
  shapes and synthetic results without sharing paid product files, internal
  policy text, or private workflow logs.

## [0.1.44] - 2026-07-20

### Added

- Added a tools-list-only JSON-RPC session example and smoke-test coverage so
  MCP client users can confirm the four public tools before sending any sample
  tool-call input.

## [0.1.43] - 2026-07-19

### Changed

- Added a README command that extracts and parses the bundled JSON-RPC smoke-test
  result without copy-pasting response lines, plus smoke-test coverage so the
  public proof path stays visible for npm users.

## [0.1.42] - 2026-07-18

### Changed

- Clarified that the public help header prints the package version and added
  smoke-test coverage for that header so npm users can spot stale `npx` cache
  behavior before editing MCP client configuration.

## [0.1.41] - 2026-07-17

### Changed

- Added an initialize response check to the public smoke-test path so MCP users
  can confirm the protocol version, capabilities, and package version before
  debugging desktop client configuration.

## [0.1.40] - 2026-07-16

### Changed

- Added a public npm command to the prompt-risk JSON-RPC session example so
  users can test the stop-before-AI-use path before cloning the repository or
  connecting private workflow data.

## [0.1.39] - 2026-07-15

### Added

- Added smoke-test coverage for the public `--help` feedback route and
  private-memory boundary so npm users keep seeing the safe GitHub issue path
  before sharing MCP troubleshooting details.

## [0.1.38] - 2026-07-14

### Changed

- Added a README tool-call preview so MCP client users can compare the expected
  `human_review_gate` input shape before pasting synthetic data into a desktop
  client or public issue.

## [0.1.37] - 2026-07-12

### Added

- Added smoke-test coverage that verifies unsupported JSON-RPC methods return a
  request-scoped error instead of a successful result.

## [0.1.36] - 2026-07-11

### Added

- Added smoke-test coverage that verifies unknown MCP tool calls return a
  JSON-RPC error with the request ID instead of being treated as a successful
  tool result.

## [0.1.35] - 2026-07-10

### Changed

- Added a README version mismatch checklist so npm and GitHub users can compare
  the registry version, npx help output, and MCP initialize response before
  changing desktop client configuration.

## [0.1.34] - 2026-07-09

### Changed

- Added a README version-check command so npm and GitHub users can confirm the
  public registry version before debugging local npx or desktop MCP client
  cache behavior.

## [0.1.33] - 2026-07-08

### Changed

- Added a minimal README parsing example that shows MCP users how to read the
  JSON tool result from `content[0].text` before wiring the package into a
  desktop client or private workflow.

## [0.1.32] - 2026-07-07

### Added

- Added smoke-test assertions that parse MCP tool results from
  `content[0].text` as JSON and verify exact public fields for the human review
  and prompt risk JSON-RPC sessions.

## [0.1.31] - 2026-07-06

### Changed

- Clarified that MCP JSON-RPC tool results are wrapped in `content[0].text`, so
  npm and GitHub users know where to parse the public smoke-test status before
  connecting a real workflow or changing desktop client config.

## [0.1.30] - 2026-07-03

### Fixed

- Corrected the MCP JSON-RPC session README to name the actual
  `human_review_gate` response field `nextLogRow`, so npm and GitHub users can
  compare the public smoke-test output without looking for an old field name.

## [0.1.29] - 2026-07-02

### Changed

- Declared required MCP input fields for all four public tools so Claude
  Desktop, Cursor, and custom MCP clients can render clearer tool forms from
  `tools/list` before users connect private workflows.

## [0.1.28] - 2026-07-01

### Fixed

- Read the MCP initialize server version from `package.json` so npm releases,
  README smoke checks, and desktop MCP clients cannot drift when the package
  version changes.

## [0.1.27] - 2026-06-30

### Added

- Added smoke-test coverage for the exact public MCP tool names returned by
  `tools/list` so README examples and desktop MCP clients stay aligned with the
  packaged server.

## [0.1.26] - 2026-06-29

### Changed

- Clarified the bug report template so npm, Claude Desktop, Cursor, and custom
  MCP users can include version, runtime, command shape, and synthetic JSON-RPC
  reproduction details without sharing private data.

## [0.1.25] - 2026-06-28

### Added

- Added a copy-ready prompt_risk_review JSON-RPC session example and smoke-test
  coverage so developers can verify the customer-facing prompt stop path before
  connecting private support or CRM workflows.

## [0.1.24] - 2026-06-25

### Changed

- Added smoke-test coverage for the public MCP JSON-RPC session example so npm
  and GitHub users can trust that the copy-ready sample stays aligned with the
  packaged server response fields.

## [0.1.23] - 2026-06-24

### Changed

- Added README guidance for reading returned MCP status fields so npm and
  GitHub users can choose the next safe action before changing client config or
  connecting private workflows.

## [0.1.22] - 2026-06-22

### Changed

- Added response-reading guidance to the MCP JSON-RPC session example so npm and
  GitHub users can tell whether the package is running before debugging desktop
  MCP client configuration.

## [0.1.21] - 2026-06-21

### Changed

- Added an MCP client troubleshooting checklist to README so Claude Desktop,
  Cursor, and other MCP users can separate terminal package success from client
  configuration issues before opening public-safe feedback issues.

## [0.1.20] - 2026-06-20

### Added

- Added a copy-ready ai_safe_crm_note example so developers can test separating
  customer facts, AI suggestions, human decisions, and next actions before
  connecting private CRM notes.

## [0.1.19] - 2026-06-19

### Fixed

- Updated README, help output, and MCP client config examples to the verified
  npm alias command `npx -y free-ai-ops-mcp@npm:@miraigent/free-ai-ops-mcp`,
  which resolves the scoped package binary consistently in public tests.

## [0.1.18] - 2026-06-19

### Fixed

- Replaced the direct scoped-package `npx @miraigent/free-ai-ops-mcp` README
  path with the verified `npm exec --package ... -- free-ai-ops-mcp` command so
  npm users get a reliable public run path.

## [0.1.17] - 2026-06-19

### Fixed

- Restored the package to a single npm bin entry so `npx
  @miraigent/free-ai-ops-mcp` resolves to the default command reliably.

## [0.1.16] - 2026-06-19

### Added

- Added a public `--help` path for npm/npx users so package search visitors can
  see the available MCP tools, one-command smoke test, safety boundary, and
  feedback route before sending JSON-RPC input.

## [0.1.15] - 2026-06-18

### Fixed

- Added a shorter `free-ai-ops-mcp` bin alias while keeping the existing
  `miraigent-free-ai-ops-mcp` command so scoped npm/npx users have a more
  reliable explicit command path.

## [0.1.14] - 2026-06-18

### Changed

- Added a one-command npx smoke-test path to README so npm and GitHub visitors
  can verify the public MCP JSON-RPC session before editing desktop client
  settings.
- Added npm discovery keywords for JSON-RPC and MCP JSON-RPC searches.

## [0.1.13] - 2026-06-17

### Changed

- Added a README feedback-result example so developers who try the npx package
  can open safer, more actionable GitHub issues with synthetic input shapes and
  returned status fields.

## [0.1.12] - 2026-06-16

### Changed

- Added a README success-check section so first-time npm/npx and GitHub users
  can verify the MCP server, visible tools, and returned gate statuses before
  opening feedback issues or connecting private workflows.

## [0.1.11] - 2026-06-15

### Added

- Added a copy-ready faq_candidate_review example so developers can test the
  repeated-support-question to FAQ candidate path before opening workflow
  requests or connecting private support data.

## [0.1.10] - 2026-06-14

### Changed

- Added a README tool picker so npm/GitHub visitors can choose the first MCP
  tool by workflow risk before opening issues or integrating the package.

## [0.1.9] - 2026-06-13

### Added

- Added a copy-ready JSON-RPC MCP session example so developers can verify
  initialize, tools/list, and a human_review_gate call before integrating with a
  desktop MCP client.
- Added README guidance for using the session example as a public-safe smoke
  test when opening GitHub issues.

## [0.1.8] - 2026-06-12

### Added

- Added a copy-ready prompt_risk_review example for developers checking
  customer-facing prompts before AI use.
- Added README input/output for the prompt risk workflow and a matching npm
  example script.

## [0.1.7] - 2026-06-10

### Added

- Added Claude Desktop and Cursor MCP configuration example to README so
  developers can copy-paste the mcpServers block directly.
- Added npm keywords: claude-desktop, cursor-mcp, mcp-tools, ai-agent-tools, npx.

## [0.1.6] - 2026-06-08

### Added

- Added a Tried It feedback issue template for users who run the MCP package and
  want to report setup friction, unclear JSON-RPC input, or confusing output.

### Changed

- Added direct README links for Tried It feedback, workflow requests, and bug
  reports so GitHub visitors have a clearer next action after running npx.

## [0.1.5] - 2026-06-07

### Changed

- Updated LAUNCH_FLOW.md so the package distribution route stays focused on
  npm/GitHub developers and issue feedback.
- Removed remaining Agent Memories consumer routing from the npm package files.

## [0.1.4] - 2026-06-07

### Changed

- Repositioned the npm package toward developers, indie hackers, MCP builders,
  and AI automation builders instead of general creator/audience messaging.
- Removed Agent Memories consumer links from the npm README so the channel
  matches npm users.
- Updated npm metadata to emphasize human-in-the-loop developer tooling.

## [0.1.3] - 2026-06-07

### Changed

- Moved the README toward a faster discovery path with a 30-second try step,
  clearer user pain points, issue CTA, and UTM-marked resource links.
- Added additional npm discovery keywords for agent memory, AI agents, workflow
  automation, and review gates.

## [0.1.2] - 2026-06-07

### Changed

- Improved npm discovery metadata with Model Context Protocol, MCP server,
  support automation, prompt risk, and FAQ review keywords.
- Clarified README positioning and added the live npx command.

## [0.1.1] - 2026-06-07

### Added

- Added FREE-004 Human Review Gate examples with JSON-RPC input, expected output,
  and a sample decision log.
- Added an example npm script for the human_review_gate workflow.

### Changed

- human_review_gate now returns a decision note and nextLogRow so users can copy
  the result into the free Gumroad review-gate flow CSV.

### Fixed

- Kept the MCP initialize server version aligned with the npm package version
  and added smoke test coverage for that release metadata.

## [0.1.0] - 2026-06-06

### Added

- Added the first public alpha MCP server.
- Added human_review_gate, faq_candidate_review, and ai_safe_crm_note.
- Added prompt_risk_review for pre-AI prompt and task risk review.
- Added smoke tests, secret scan, GitHub Actions, and issue templates.
- Added LAUNCH_FLOW.md for free distribution, issue collection, and Miraigent / Agent Memories routing.

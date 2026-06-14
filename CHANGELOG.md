# Changelog

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

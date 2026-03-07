# AntigravityKit Implementation Plan
**Target:** Antigravity AI coding assistant (`.agent/` folder convention)
**Source:** ClaudeKit `G:\My Drive\KitBuild\Biz\General\.claude`
**Reference:** Old transformation `G:\My Drive\KitBuild\ClaudeKit\.agent\`
**Research report:** `G:\My Drive\KitBuild\Biz\General\plans\reports\researcher-260307-1238-claudekit-to-antagravity.md`

> **Key facts:** `.agent/` = Antigravity's native folder (equivalent to `.claude/`). YAML frontmatter is Antigravity-native. Workflows auto-register as slash commands from filename. Do NOT add `.agent/` to `.gitignore`.

---

## Phases Overview

| Phase | Name | Status |
|-------|------|--------|
| 1 | Project Structure + Registry | Pending |
| 2 | Entry Point (ANTIGRAVITY.md + AI_HANDOVER) | Pending |
| 3 | Agent Adaptation (14 → ~16) | Pending |
| 4 | Skill Curation (~30 skills) | Pending |
| 5 | Workflow Slash Commands (~10) | Pending |
| 6 | Validation Scripts | Pending |
| 7 | Verification & Testing | Pending |

---

## Phase 1 — Project Structure + Registry

**Files to create:**
```
.agent/
├── ARCHITECTURE.md
├── rules/
├── AI_HANDOVER-AntigravityKit/
├── agents/
├── skills/
├── workflows/
└── scripts/
```

**ARCHITECTURE.md** — central registry listing all agents, skills, workflows with one-line descriptions. ~80 lines max.

---

## Phase 2 — Entry Point

**Files to create:**
- `.agent/rules/ANTIGRAVITY.md` — master rules, always_on, Tier 0/1/2
- `.agent/AI_HANDOVER-AntigravityKit/00-README.md`
- `.agent/AI_HANDOVER-AntigravityKit/01-Architecture.md`
- `.agent/AI_HANDOVER-AntigravityKit/02-Agents-and-Skills.md`
- `.agent/AI_HANDOVER-AntigravityKit/03-Workflows-and-Orchestration.md`
- `.agent/AI_HANDOVER-AntigravityKit/04-Extension-Guide.md`

**Key content in ANTIGRAVITY.md:**
- REQUEST CLASSIFIER (route to agent/skill/workflow)
- INTELLIGENT AGENT ROUTING (auto-select by task type)
- TIER 0: universal rules (YAGNI/KISS/DRY, naming, file size, report paths)
- TIER 1: code rules (Socratic Gate, project routing)
- TIER 2: reference to specialist agent files

---

## Phase 3 — Agent Adaptation

**Adapt from ClaudeKit** (remove hooks/Task refs, update orchestration patterns):

| Agent | Source File | Changes |
|-------|-------------|---------|
| project-planner | `.claude/agents/planner.md` | Remove hook-based path injection |
| researcher | `.claude/agents/researcher.md` | Keep Gemini toggle as optional |
| debugger | `.claude/agents/debugger.md` | Remove Claude Task refs |
| code-reviewer | `.claude/agents/code-reviewer.md` | Replace scout skill call |
| test-engineer | `.claude/agents/tester.md` | Rename + remove Task wiring |
| docs-manager | `.claude/agents/docs-manager.md` | Minimal changes |
| git-manager | `.claude/agents/git-manager.md` | Remove Claude CLI assumptions |
| fullstack-developer | `.claude/agents/fullstack-developer.md` | Remove Task orchestration |
| brainstormer | `.claude/agents/brainstormer.md` | Minimal |
| code-simplifier | `.claude/agents/code-simplifier.md` | Minimal |
| journal-writer | `.claude/agents/journal-writer.md` | Minimal |
| project-manager | `.claude/agents/project-manager.md` | Remove TaskCreate/Update refs |
| ui-ux-designer | `.claude/agents/ui-ux-designer.md` | Minimal |
| ~~mcp-manager~~ | DROP | Claude-specific |

**New agents (port from old):**
- `orchestrator.md` — from `G:\My Drive\KitBuild\ClaudeKit\.agent\agents\orchestrator.md`
- `explorer-agent.md` — from old transformation

---

## Phase 4 — Skill Curation

**~30 skills to port** (see research report for full list). For each:
1. Copy SKILL.md from `.claude/skills/<name>/SKILL.md`
2. Remove Claude-specific tool refs (`TaskCreate`, `SendMessage`, hook patterns)
3. Update cross-references from `ck:skill-name` to `skill-name`
4. Test selective reading pattern (Content Map)

**Priority order:**
1. Core: `plan`, `research`, `scout`, `debug`, `cook`, `fix`
2. Quality: `code-review`, `simplify`, `sequential-thinking`
3. Dev: `frontend-development`, `backend-development`, `databases`
4. Testing: `test`, `web-testing`
5. Domain: `payment-integration`, `better-auth`, `ui-ux-pro-max`

---

## Phase 5 — Workflows

**~10 slash commands** to create in `.agent/workflows/`:

| Command | Purpose |
|---------|---------|
| `/plan` | Create implementation plan (NO CODE) |
| `/research` | Multi-source research + report |
| `/orchestrate` | Parallel multi-agent execution |
| `/debug` | Systematic debugging flow |
| `/review` | Code quality review |
| `/test` | Run tests + report |
| `/deploy` | Deployment workflow |
| `/docs` | Documentation update |
| `/brainstorm` | Socratic ideation session |
| `/commit` | Git commit with conventional format |

Each workflow: YAML frontmatter + phases + approval checkpoints.

---

## Phase 6 — Validation Scripts

**Port from old `.agent/scripts/`:**
- `checklist.py` — security + lint + schema + tests + UX + SEO
- `verify_all.py` — full suite including Lighthouse, Playwright, bundle analysis

**New scripts (port from `.claude/scripts/` where applicable):**
- `generate_catalogs.py` — skill catalog generation (adapt for `.agent/` paths)

---

## Phase 7 — Verification

1. Open project in Antigravity IDE
2. Confirm `.agent/` folder detected + ANTIGRAVITY.md loaded
3. Test agent routing (describe a task, verify correct agent activates)
4. Test a skill load (e.g., trigger `research` skill)
5. Run `/orchestrate` workflow end-to-end
6. Verify `checklist.py` runs cleanly

---

## Files NOT to Port

- `.claude/hooks/` — entire hooks system (no equivalent)
- `.claude/metadata.json` — replaced by ARCHITECTURE.md
- `.claude/settings.json` — Claude Code specific
- `.claude/statusline.*` — Claude Code specific
- `.claude/schemas/` — Claude Code specific
- `mcp-manager` agent — Claude MCP specific
- `cc-configure-model-provider` skill — Claude specific
- `grabgpt:*`, `llm-kit:*` skills — Grab internal
- `context-engineering`, `watzup` skills — Claude session-specific

# AntigravityKit

AI agent toolkit for the [Antigravity](https://antigravity.ai) coding assistant — and any AI IDE that reads a `.agent/` folder.

**15 agents · 36 skills · 16 workflows**

## Install

```bash
npx @hoanggummyvn/ag-kit init
```

Copies `.agent/` into your project. That's it.

## What you get

| Component | Count | Examples |
|-----------|-------|---------|
| Agents | 15 | project-planner, debugger, code-reviewer, fullstack-developer |
| Skills | 36 | plan, research, fix, bootstrap, preview, ai-multimodal |
| Workflows | 16 | /plan, /cook, /fix, /debug, /review, /brainstorm, /ask |

## Usage

After install, open your project in Antigravity (or any compatible AI assistant) and use slash commands:

```
/plan    — Create phased implementation plan
/cook    — Step-by-step task execution
/fix     — Targeted bug fix with root cause analysis
/debug   — Systematic debugging
/review  — Code quality review
/test    — Run tests and coverage report
/commit  — Conventional commit + push
/ask     — Expert architectural consultation
/brainstorm — Socratic ideation
/bootstrap  — Scaffold a new project from scratch
```

Full reference: `.agent/ARCHITECTURE.md`

## Update

```bash
npx @hoanggummyvn/ag-kit init
```

Re-running overwrites `.agent/` with the latest version (prompts before overwriting).

## License

MIT

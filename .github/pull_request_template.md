## Summary
<!-- Describe what this PR does and why. Link any related issue. -->

## Commit Type Reminder
Your commit messages determine the version bump. Use Conventional Commits:

| Type | When to use | Version bump |
|------|-------------|--------------|
| `feat:` | New feature | Minor (x.Y.0) |
| `fix:` | Bug fix | Patch (x.y.Z) |
| `feat!:` or `BREAKING CHANGE:` in body | Breaking change | Major (X.0.0) |
| `docs:` | Documentation only | No release |
| `chore:` | Maintenance (deps, configs) | No release |
| `refactor:` | Code restructure, no behavior change | No release |
| `perf:` | Performance improvement | Patch |
| `test:` | Adding or updating tests | No release |
| `ci:` | CI/CD changes | No release |
| `build:` | Build system or external deps | No release |
| `style:` | Formatting only | No release |
| `revert:` | Revert a prior commit | Depends on what's reverted |

**Format:** `<type>(<optional scope>): <short description>`

**Examples for this project:**
- `feat(contact): add file upload to lead form`
- `fix(seo): correct sitemap canonical for /portfolio`
- `perf(home): lazy-load hero video on mobile`
- `chore: bump next to 15.2`

## Checklist
- [ ] Commit messages follow Conventional Commits format (lint check will enforce)
- [ ] `npm run verify` passes locally (typecheck + lint + tests)
- [ ] If this changes user-visible behavior, screenshots/notes are included above
- [ ] If this affects SEO (titles, meta, schema, sitemap, robots), it has been verified

## Notes for reviewer
<!-- Anything reviewer should pay special attention to. -->

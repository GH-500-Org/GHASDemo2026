# GHAS + Quality Demo

A small, deliberately vulnerable Node.js repository for demonstrating GitHub
Advanced Security (GHAS), Dependabot, code quality automation, and GitHub Pages.

> [!WARNING]
> The vulnerabilities and credentials in this repository are synthetic training
> fixtures. Do not deploy the sample application or copy these patterns into
> production code.

## Demo links

| Experience | Link |
| --- | --- |
| Security overview | [Security](https://github.com/haslam93/GHASDemo2026/security) |
| CodeQL alerts | [Code scanning](https://github.com/haslam93/GHASDemo2026/security/code-scanning) |
| Dependency alerts | [Dependabot](https://github.com/haslam93/GHASDemo2026/security/dependabot) |
| Secret alerts | [Secret scanning](https://github.com/haslam93/GHASDemo2026/security/secret-scanning) |
| Dependabot update PRs | [Dependabot pull requests](https://github.com/haslam93/GHASDemo2026/pulls?q=is%3Apr+author%3Aapp%2Fdependabot) |
| Automation | [Actions](https://github.com/haslam93/GHASDemo2026/actions) |
| Demo site | [GitHub Pages](https://haslam93.github.io/GHASDemo2026/) |

## What this demonstrates

- **Code scanning:** CodeQL analyzes `src/app.js`, which contains intentional
  command injection, SQL injection, reflected XSS, path traversal, and open
  redirect examples.
- **Copilot Autofix:** Eligible CodeQL alerts can generate an explanation and a
  suggested patch that can be committed to a branch or opened as a pull request.
- **Dependabot:** The lock file pins several old packages so the dependency
  graph can produce security alerts. Dependabot also checks npm and GitHub
  Actions weekly.
- **Secret scanning:** Synthetic provider-shaped tokens were added in repository
  history, bypassed as `used_in_tests`, and removed from the current branch.
  Push protection is enabled for future commits.
- **Malware simulation:** A custom SARIF upload produces a clearly labeled,
  synthetic code-scanning alert for suspicious download-and-execute behavior.
  The referenced fixture is plain text and contains no executable malware.
- **Quality scanning:** Every push installs dependencies, runs Node's built-in
  test runner, and records an npm audit summary.
- **Pull request protection:** Dependency Review blocks newly introduced
  high-severity vulnerable dependencies.
- **GitHub Pages:** `docs/` provides a presentation-friendly landing page with
  direct links to every demo surface.

## Suggested five-minute demo

1. Open the Pages site and explain the layered security model.
2. Open a command-injection or SQL-injection CodeQL alert, select **Generate
   fix**, and review the Copilot Autofix explanation and proposed patch.
3. Open the synthetic malware code-scanning alert and explain how third-party
   scanners can upload SARIF into the same developer experience.
4. Open Dependabot alerts and discuss vulnerable transitive dependencies and
   automated update pull requests.
5. Open the historical secret alerts, explain that the values are fake, and show
   that push protection is now enabled.
6. Open a Dependabot pull request to demonstrate the quality and
   dependency-review checks.

## Copilot Autofix demo

1. Go to [Code scanning](https://github.com/haslam93/GHASDemo2026/security/code-scanning).
2. Open an eligible CodeQL alert such as command injection or reflected XSS.
3. Select **Generate fix**. Copilot Autofix uses the alert's data flow, source
   context, and CodeQL rule to propose a focused code change and explanation.
4. Review the diff, create a branch or pull request, and let CodeQL plus the
   quality workflow confirm whether the alert is resolved without regressions.

Autofix proposes code; the developer remains in control of reviewing, editing,
testing, and merging it.

## Local validation

```powershell
npm ci --ignore-scripts
npm test
```

The web application is not intended to be run; its insecure routes exist only
as static-analysis fixtures.

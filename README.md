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
| Automation | [Actions](https://github.com/haslam93/GHASDemo2026/actions) |
| Demo site | [GitHub Pages](https://haslam93.github.io/GHASDemo2026/) |

## What this demonstrates

- **Code scanning:** CodeQL analyzes `src/app.js`, which contains intentional
  command injection, SQL injection, reflected XSS, path traversal, and open
  redirect examples.
- **Dependabot:** The lock file pins several old packages so the dependency
  graph can produce security alerts. Dependabot also checks npm and GitHub
  Actions weekly.
- **Secret scanning:** A synthetic GitHub-style token was added in repository
  history and removed from the current branch. Push protection is enabled for
  future commits.
- **Quality scanning:** Every push installs dependencies, runs Node's built-in
  test runner, and records an npm audit summary.
- **Pull request protection:** Dependency Review blocks newly introduced
  high-severity vulnerable dependencies.
- **GitHub Pages:** `docs/` provides a presentation-friendly landing page with
  direct links to every demo surface.

## Suggested five-minute demo

1. Open the Pages site and explain the layered security model.
2. Show the CodeQL workflow and open one data-flow finding in `src/app.js`.
3. Open Dependabot alerts and discuss vulnerable transitive dependencies and
   automated update pull requests.
4. Open the historical secret alert, explain that the value is fake, and show
   that push protection is now enabled.
5. Open a pull request to demonstrate the quality and dependency-review checks.

## Local validation

```powershell
npm ci --ignore-scripts
npm test
```

The web application is not intended to be run; its insecure routes exist only
as static-analysis fixtures.

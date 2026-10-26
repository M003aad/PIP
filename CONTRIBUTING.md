# Contributing to PIP

Thanks for taking the time to improve the project.

## Reporting bugs

Before opening a bug report, please:

- search for existing issues to avoid duplicates
- confirm the issue is reproducible in the current extension code
- include the browser name and version
- note the exact page URL where the issue occurs
- describe the expected and actual behavior
- attach a screenshot or console log if helpful

Open a new bug report from the repository issue tracker and provide as much detail as possible.

## Suggesting features

Feature ideas are welcome. Please open a feature request with:

- a short problem statement
- why the feature would be useful
- a proposed solution or behavior change
- any relevant examples or references

## Local development setup

This project is a plain browser extension with no package manager or build tooling in the workspace.

1. Clone the repository:
   ```bash
   git clone https://github.com/M003aad/PIP.git
   cd PIP
   ```
2. Open the project in your editor.
3. Load the extension in developer mode:
   - Open `chrome://extensions` (or `edge://extensions`)
   - Enable **Developer mode**
   - Choose **Load unpacked**
   - Select the project root folder
4. Make your changes and reload the extension as needed.

## Pull request standards

When preparing a pull request:

- keep the scope focused and specific
- describe the problem and the fix clearly
- include a brief validation summary
- avoid unrelated formatting or refactors
- ensure the extension still loads in the browser after your changes

## Security reports

Please do not disclose vulnerabilities publicly in the issue tracker. Use the private security process described in [SECURITY.md](./SECURITY.md).

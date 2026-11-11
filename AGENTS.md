# Project instructions

- Use WebdriverIO MCP to inspect the app and find elements.
- Read the device configuration from `wdio.conf.ts`.
- Prefer stable accessibility IDs when available.
- Verify that each locator matches exactly one element.
- Only modify files when I explicitly ask you to.
- Close any Appium session you create after completing the inspection.
- Stop the Appium server only if you started it yourself.
- You may inspect the local test app, query Appium sessions, and count locator matches without asking for confirmation.
- You may navigate within the test app as needed for inspection.

## Git workflow

When I explicitly ask to commit and push:
- Review git status and the diff.
- Stage only files relevant to the requested changes.
- Exclude secrets, generated artifacts, and unrelated changes.
- Create a descriptive commit and push the current branch to origin.
- Do not force-push.
- Report the commit hash and push result.
- Do not rerun tests if I have confirmed they passed for the current changes.

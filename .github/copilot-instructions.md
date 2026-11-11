
# Appium Automation Portfolio

## Tech Stack
- Appium 3
- WebdriverIO 10
- TypeScript
- Mocha
- iOS: XCUITest
- Android: UiAutomator2

## Project Structure
- iOS tests: `test/specs/ios/`
- Android tests: `test/specs/android/`
- Shared setup: `test/setup/`
- iOS configuration: `wdio.conf.ts`
- Android configuration: `wdio.android.conf.ts`

## Test Development
- Follow existing project conventions.
- Keep tests simple, readable, and maintainable.
- Reuse existing helpers when appropriate.
- Preserve existing `describe()` and `it()` titles.
- Do not introduce unnecessary abstractions.
- Do not modify working tests without a clear reason.

## Locators
- Prefer accessibility IDs and stable resource IDs.
- Inspect actual UI elements before selecting locators.
- Never invent locators.
- Use ADB for Android UI inspection when appropriate.

## Project Changes
- Make minimal, targeted changes.
- Do not install dependencies without approval.
- Do not restructure the project without approval.
- Explain significant changes before implementing them.

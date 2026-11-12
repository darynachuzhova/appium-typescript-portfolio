# Mobile Test Automation Portfolio

Automated UI tests for the Wikipedia iOS and Android apps, built with Appium, WebdriverIO, and TypeScript. This portfolio demonstrates native app navigation, article search, saved-article workflows, and iOS settings validation.

The project uses Mocha tests, platform-specific screen objects, and shared app lifecycle utilities. Some locators remain inline in the specs. Tests run locally against an installed app on a simulator or emulator.

## Technology stack

| Technology | Role |
| --- | --- |
| TypeScript | Test code with strict type checking configured |
| WebdriverIO 10 | Local test runner and automation client |
| Appium 3 | Native mobile automation server |
| XCUITest driver | iOS automation |
| UiAutomator2 driver | Android automation |
| Mocha | Test suites and lifecycle hooks |
| expect-webdriverio | UI assertions |
| WebdriverIO Spec reporter | Console test results |
| tsx | TypeScript execution support |

Dependency versions are defined in [package.json](package.json) and locked in `package-lock.json`.

## Implemented test coverage

### iOS

| Spec | Checks |
| --- | --- |
| `app-launch.spec.ts` | Wikipedia is running in the foreground |
| `search.spec.ts` | Search for Appium, verify the result, and open the article with the expected heading |
| `saved-articles.spec.ts` | Ensure Appium is initially unsaved, save it, verify the saved-button label and Saved list entry, then remove it during cleanup |
| `for-you.spec.ts` | Display and select the For You tab, verify its selected state, and perform a left swipe |
| `settings-search.spec.ts` | Navigate to Settings and Search settings; toggle Show languages on search and restore its original value |

### Android

| Spec | Checks |
| --- | --- |
| `app-launch.spec.ts` | The foreground package is `org.wikipedia.alpha` |
| `search.spec.ts` | Search for Appium, open the result, and verify the article page is displayed |
| `saved-articles.spec.ts` | Remove an existing saved Appium article when present, search and open it, save it, dismiss the bottom sheet, and verify it under Saved → All articles |

These tables describe the implemented assertions, rather than a guarantee that every test passes on every app version. The For You test performs a swipe but does not assert the resulting content.

## Project structure

```text
test/
├── helpers/
│   └── step.ts                   # Named step logging and error context
├── screens/
│   ├── android/
│   │   ├── article.screen.ts
│   │   └── saved.screen.ts
│   └── ios/
│       ├── article.screen.ts
│       ├── home.screen.ts
│       ├── search.screen.ts
│       └── settings.screen.ts
├── setup/
│   └── restart-app.ts            # App restart function and beforeEach hook
└── specs/
    ├── android/                  # Launch, search, and saved-article tests
    └── ios/                      # Launch, search, saved articles, home, settings
wdio.conf.ts                      # Shared runner options and iOS capabilities
wdio.android.conf.ts              # Android capabilities and spec selection
tsconfig.json
package.json
package-lock.json
```

The Android configuration extends the base configuration. Both use one concurrent session, a 10-second default element wait, and a 60-second Mocha timeout. Specs importing `restart-app.ts` register its app restart hook; the utility terminates and activates the platform's Wikipedia app.

## Prerequisites

- Node.js compatible with the installed dependencies. Appium 3.8.0 declares Node.js `^20.19.0`, `^22.12.0`, or `>=24.0.0`, and npm 10 or later.
- Internet access for dependency installation and Wikipedia article searches.
- English app UI, since several selectors use English labels and article descriptions.
- Wikipedia installed and onboarding completed before running the tests. The configurations target installed apps; no APK or iOS app binary is bundled or configured for installation.

### iOS environment

- macOS with Xcode, command-line tools, and an available iOS simulator runtime.
- An installed Wikipedia app with bundle ID `org.wikimedia.wikipedia`.
- The current configuration targets **iPhone 17 Pro, iOS 26.0**. Update the device name, platform version, and simulator UDID in `wdio.conf.ts` to match your environment.

List available simulators:

```bash
xcrun simctl list devices available
```

### Android environment

- Android SDK, platform tools (`adb`), and a running Android emulator.
- Wikipedia Alpha installed with package `org.wikipedia.alpha` and activity `org.wikipedia.main.MainActivity`.
- The current configuration targets `emulator-5554`. Update the UDID and app capabilities in `wdio.android.conf.ts` if needed.

Check connected devices:

```bash
adb devices -l
```

## Setup

1. Clone this repository and open its root directory.
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Check Appium driver availability:

   ```bash
   npx appium driver list --installed
   ```

   Both driver packages are declared in `package.json`. If a required driver is not available to your Appium installation, register it with the corresponding command:

   ```bash
   npx appium driver install xcuitest
   npx appium driver install uiautomator2
   ```

4. Start the target simulator or emulator, install and prepare Wikipedia, and align the capabilities with your device.

The WebdriverIO Appium service starts the server for a test run. The configured endpoint is `127.0.0.1:4723` with path `/`; keep that port available when using the service.

## Run tests

Run all iOS specs:

```bash
npx wdio run ./wdio.conf.ts
```

Run all Android specs:

```bash
npx wdio run ./wdio.android.conf.ts
```

Run only the saved-article spec for a platform:

```bash
npx wdio run ./wdio.conf.ts --spec ./test/specs/ios/saved-articles.spec.ts
npx wdio run ./wdio.android.conf.ts --spec ./test/specs/android/saved-articles.spec.ts
```

Use these CLI commands directly: `npm test` is currently a placeholder that exits with an error.

## Test data and execution notes

- Both platforms use the **Appium** Wikipedia article as test data.
- `noReset: true` preserves app data between sessions; restarting the app does not clear saved articles or preferences.
- The Android saved-article preparation currently waits for Appium or the empty Saved state. It assumes the collection contains Appium or is empty; a collection containing only unrelated articles does not satisfy this wait. That test leaves Appium saved after a successful run.
- The iOS saved-article test removes Appium after execution. The settings tests use a sequential navigation flow, so running a later settings case alone requires the expected screen to be open.

## Reporting

The configured Spec reporter prints test outcomes to the terminal. The shared `step.ts` helper adds `[STEP]`, `[PASS]`, and `[FAIL]` messages and includes the step name in errors for tests that use it.

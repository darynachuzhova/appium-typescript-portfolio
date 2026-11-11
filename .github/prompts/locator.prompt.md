
---
description: Find Android UI locators using ADB
agent: agent
---

Use ADB to inspect the currently running Android emulator.

## Steps
1. Verify that an Android device is connected using `adb devices`.
2. Inspect the current screen using `adb shell uiautomator dump`.
3. Identify the UI element requested by the user.
4. Extract its actual attributes:
   - resource-id
   - content-desc
   - text
   - class
   - clickable
5. Recommend the most reliable WebdriverIO selector.

## Locator Priority
1. Accessibility ID (`~content-desc`)
2. Resource ID (`id:package:id/element`)
3. Text-based selector
4. XPath only when necessary

## Rules
- Never invent locators.
- Use actual attributes from the current UI hierarchy.
- Do not modify project files.
- Do not install dependencies.
- If the element cannot be found, explain why.
- If the element is inside a WebView, report that native ADB inspection may not expose it.

## Output
Provide:
- Element name
- Recommended WebdriverIO selector
- Relevant UI attributes
- Brief explanation of the selector choice

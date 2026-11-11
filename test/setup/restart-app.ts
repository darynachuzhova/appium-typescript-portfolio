import { browser } from '@wdio/globals';

export async function restartApp() {
    const appId = browser.isAndroid
        ? 'org.wikipedia.alpha'
        : 'org.wikimedia.wikipedia';

    await browser.terminateApp(appId);
    await browser.activateApp(appId);
}

beforeEach(async () => {
    await restartApp();
});
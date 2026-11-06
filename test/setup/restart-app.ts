import { browser } from '@wdio/globals';

export async function restartApp() {
    await browser.terminateApp('org.wikimedia.wikipedia');
    await browser.activateApp('org.wikimedia.wikipedia');
}

beforeEach(async () => {
    await restartApp();     
});
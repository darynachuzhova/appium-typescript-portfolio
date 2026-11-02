import { browser } from '@wdio/globals';

beforeEach(async () => {
    await browser.terminateApp('org.wikimedia.wikipedia');
    await browser.activateApp('org.wikimedia.wikipedia');
});
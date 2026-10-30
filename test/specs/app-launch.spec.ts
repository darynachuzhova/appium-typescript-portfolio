import { browser, expect } from '@wdio/globals';

describe('Wikipedia launch', () => {
    it('should run in the foreground', async () => {
        const appState = await browser.queryAppState(
            'org.wikimedia.wikipedia'
        );

        await expect(appState).toBe(4);
    });
});
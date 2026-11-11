import { browser, expect } from '@wdio/globals';

describe('Wikipedia Android', () => {
    it('should launch Wikipedia app', async () => {
        const currentPackage = await browser.getCurrentPackage();

        expect(currentPackage).toBe('org.wikipedia.alpha');
    });
});
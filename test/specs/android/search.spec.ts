import { expect, $ } from '@wdio/globals';
import '../../setup/restart-app.js';

describe('Wikipedia Android Search', () => {
    it('should search and open Appium article', async () => {
        await $('~Search').click();
        await $('id:org.wikipedia.alpha:id/search_card').click();

        const searchField = $('id:org.wikipedia.alpha:id/search_src_text');
        await searchField.setValue('Appium');

        const article = $('//android.widget.TextView[@text="Appium"]');
        await expect(article).toBeDisplayed();

        await article.click();

        const articlePage = $('id:org.wikipedia.alpha:id/page_fragment');
        await expect(articlePage).toBeDisplayed();
    });
});
import { browser, expect, $, $$ } from '@wdio/globals';
import '../../setup/restart-app.js';
import SavedScreen from '../../screens/android/saved.screen.js';
import ArticleScreen from '../../screens/android/article.screen.js';

describe('Wikipedia Android Saved Articles', () => {
    beforeEach(async () => {
        // restart-app.ts already restarts the app before each test.
        await SavedScreen.savedTab.click();
        await SavedScreen.allArticles.click();

        const emptyState =
            '//android.widget.TextView[@text="No saved articles yet"]';
        const articleTitle =
            '//android.widget.TextView[@text="Appium"]';

        await browser.waitUntil(
            async () =>
                (await $$(articleTitle).length) === 1 ||
                (await $$(emptyState).length) === 1,
            {
                timeout: 10000,
                timeoutMsg: 'Saved articles did not finish loading',
            },
        );

        if (await SavedScreen.appiumArticle.isExisting()) {
            await SavedScreen.appiumArticle.longPress({ duration: 1000 });
            await expect(SavedScreen.removeFromSaved).toBeDisplayed();
            await SavedScreen.removeFromSaved.click();

            await expect(SavedScreen.appiumArticle).not.toBeExisting();
        }
    });

    it('should save Appium article', async () => {
        await $('~Search').click();
        await $('id:org.wikipedia.alpha:id/search_card').click();

        const searchField = $('id:org.wikipedia.alpha:id/search_src_text');
        await expect(searchField).toBeDisplayed();
        await searchField.setValue('Appium');

        const articleSelector =
            '//android.view.View[android.widget.TextView[@text="Automation for Apps"]]' +
            '/android.widget.TextView[@text="Appium"]';

        await browser.waitUntil(
            async () => (await $$(articleSelector).length) === 1,
            {
                timeout: 10000,
                timeoutMsg: 'Expected exactly one Appium search result',
            },
        );

        await expect($(articleSelector)).toBeDisplayed();
        await $(articleSelector).click();

        await expect(ArticleScreen.articlePage).toBeDisplayed();
        await ArticleScreen.saveButton.click();
        await expect(ArticleScreen.bottomSheet).toBeDisplayed();

        await browser.back();
        await expect(ArticleScreen.bottomSheet).not.toBeExisting();
        await expect(ArticleScreen.articlePage).toBeDisplayed();

        await browser.back();
        await expect(searchField).toBeDisplayed();

await ArticleScreen.navigateUp.click();
await expect(SavedScreen.savedTab).toBeDisplayed();

        await SavedScreen.savedTab.click();
        await SavedScreen.allArticles.click();

        await expect(SavedScreen.appiumArticle).toBeDisplayed();
    });
});
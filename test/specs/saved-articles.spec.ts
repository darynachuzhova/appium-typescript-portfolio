import {$, expect} from '@wdio/globals';
import searchScreen from '../screens/search.screen.js';
import articleScreen from '../screens/article.screen.js';
import '../setup/restart-app.js';

describe('Saved articles', () => {
    afterEach(async () => {
        const saveButton = articleScreen.saveArticleButton;

        if (
            await saveButton.isExisting() &&
            await saveButton.getAttribute('label') ===
                'Saved. Activate to unsave.'
        ) {
            await saveButton.click();

            await expect(saveButton)
                .toHaveAttribute('label', 'Save for later');
        }
    });

    it('should save an article', async () => {
    await searchScreen.searchForArticle('Appium');
    await expect($('~Appium')).toBeDisplayed();
    await $('~Appium').click();

    await expect(articleScreen.heading).toBeDisplayed();

    await expect(articleScreen.saveArticleButton)
        .toHaveAttribute('label', 'Save for later');

    await articleScreen.saveArticleButton.click();

    await expect(articleScreen.saveArticleButton)
        .toHaveAttribute('label', 'Saved. Activate to unsave.');
});
});
import {$, expect} from '@wdio/globals';
import searchScreen from '../../screens/search.screen.js';
import articleScreen from '../../screens/article.screen.js';
import { restartApp } from '../../setup/restart-app.js';
import { step } from '../../helpers/step.js';


describe('Saved articles', () => {
    beforeEach(async () => {
    await step ('Preparation: open the Appium article', async () => {
    await restartApp();
    await searchScreen.searchForArticle('Appium');
    await expect($('~Appium')).toBeDisplayed();
    await $('~Appium').click();
    await expect(articleScreen.heading).toBeDisplayed();
    });

    await step('Preparation: ensure the Appium article is not saved', async () => {
    const saveButton = articleScreen.saveArticleButton;
    if (
        await saveButton.getAttribute('label') ===
        'Saved. Activate to unsave.'
    ) {
        await saveButton.click();
    }

    await expect(saveButton)
        .toHaveAttribute('label', 'Save for later');

    });    
});

it ('should save an article and verify it is in the saved list', async () => {
    await step('Save the article', async () => {
    await articleScreen.saveArticleButton.click();

    await expect(articleScreen.saveArticleButton)
        .toHaveAttribute('label', 'Saved. Activate to unsave.');
    });

    await step('Return to search results', async () => {
    await $('~BackButton').click();
    });

    await step('Close search field', async () => {
    await $('~Close').click();
    });

    await step ('Open the home screen', async () => {
    await $('~house.fill').click();
    });

    await step ('Open the saved articles tab', async () => {
    await $('~Root Tab Saved Button').click();
    });

    await step ('Verify Appium is in the saved list', async () => {
    await expect($('~Saved All Articles Row Appium')).toBeDisplayed();
      });
});

afterEach(async () => {

     await step ('Cleanup: reopen the Appium article', async () => {
     await restartApp();
     await searchScreen.searchForArticle('Appium');
     await expect($('~Appium')).toBeDisplayed();
     await $('~Appium').click();
    
     await expect(articleScreen.heading).toBeDisplayed();
     });

    await step('Cleanup: remove the saved article', async () => {
     const saveButton = articleScreen.saveArticleButton;

     if (
        await saveButton.getAttribute('label') ===
        'Saved. Activate to unsave.'
     ) {
        await saveButton.click();
     }

     await expect(saveButton)
        .toHaveAttribute('label', 'Save for later');
     });    
});
});
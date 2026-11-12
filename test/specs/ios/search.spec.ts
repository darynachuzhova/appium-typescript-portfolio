import { $, browser,expect } from '@wdio/globals';
import searchScreen from '../../screens/ios/search.screen.js';
import articleScreen from '../../screens/ios/article.screen.js';
import '../../setup/restart-app.js';

    it('should find an article', async () => {
        await searchScreen.searchForArticle('Appium');
        await expect($('~Appium')).toBeDisplayed();
    });


    it('should open correct article', async () => {
        await searchScreen.searchForArticle('Appium');
        await expect($('~Appium')).toBeDisplayed();
        await $('~Appium').click();
        await expect(articleScreen.heading).toBeDisplayed();
    });
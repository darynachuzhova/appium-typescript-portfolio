import { $, browser,expect } from '@wdio/globals';
import searchScreen from '../screens/search.screen';

describe('Wikipedia search', () => {
    beforeEach(async () => {
        await browser.terminateApp('org.wikimedia.wikipedia');
        await browser.activateApp('org.wikimedia.wikipedia');
    });

    it('should find an article', async () => {
        await searchScreen.searchForArticle('Appium');
        await expect($('~Appium')).toBeDisplayed();
    });


    it('should open correct article', async () => {
        await searchScreen.searchForArticle('Appium');
        await expect($('~Appium')).toBeDisplayed();
        await $('~Appium').click();
        const articleHeading = $('//XCUIElementTypeOther[@name="banner"]//XCUIElementTypeStaticText[@name="Appium"]');
        await expect(articleHeading).toBeDisplayed();
    });
});
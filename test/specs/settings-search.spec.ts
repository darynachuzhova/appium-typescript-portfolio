import { $, expect } from '@wdio/globals';
import settingsScreen from '../screens/settings.screen.js';

describe('Settings', () => {
    it('should open settings screen', async () => {
        await expect($('~profile-button')).toBeDisplayed();
        await $('~profile-button').click();

        await expect(settingsScreen.settingsScreen).toBeDisplayed();
        await settingsScreen.settingsScreen.click();

    });


    it ('Search settings', async () => {
        
        const searchButton = $(
            '-ios class chain:**/XCUIElementTypeButton[`name == "Search"`]'
        );
        await searchButton.click();

        await expect($('~Show languages on search')).toBeDisplayed();
    });


it('should toggle Show languages on search', async () => {
    const toggleButton = $(
        '//XCUIElementTypeStaticText[@name="Show languages on search"]/../XCUIElementTypeSwitch/XCUIElementTypeSwitch'
    );

    await expect(toggleButton).toBeDisplayed();

    const initialValue = await toggleButton.getAttribute('value');
    if (initialValue === null) {
        throw new Error('Could not read the initial toggle value');
    }

    await toggleButton.click();

    const expectedValue = initialValue === '1' ? '0' : '1';
    await expect(toggleButton).toHaveAttribute('value', expectedValue);

    await toggleButton.click();
    
    await expect(toggleButton).toHaveAttribute('value', initialValue);
});

});

import {$, expect} from '@wdio/globals';
import { restartApp } from '../../setup/restart-app.js';
import { step } from '../../helpers/step.js';
import homeScreen from '../../screens/home.screen.js';

describe('For You tab', () => {

it ('should verify the "For You" tab is displayed', async () => {
    await step ('Preparation: restart the app', async () => {
        await restartApp();
    });

    await step ('Open the home screen', async () => {
        await $('~house.fill').click();
    });

    await step ('Verify the "For You" tab is displayed', async () => {
        await expect(homeScreen.forYouTab).toBeDisplayed();
    });

    await step ('Open the "For You" tab', async () => {
        await homeScreen.forYouTab.click();
    });

    await step('Verify the For You tab is selected', async () => {
        const isSelected = await homeScreen.forYouTab.getAttribute('selected');
        expect(isSelected).toBe('true');
    });

    await step ('Swipe through the "For You" tab content', async () => {
        await homeScreen.forYouTab.click();
        const isSelected = await homeScreen.forYouTab.getAttribute('selected');
        expect(isSelected).toBe('true');
        await browser.execute('mobile: swipe', { direction: 'left' });
    });
});
});

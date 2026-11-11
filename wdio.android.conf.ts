import { config as baseConfig } from './wdio.conf.js';


export const config: WebdriverIO.Config = {
    ...baseConfig,

    specs: ['./test/specs/android/**/*.spec.ts'],

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Wikipedia_Android',
        'appium:udid': 'emulator-5554',
        'appium:appPackage': 'org.wikipedia.alpha',
        'appium:appActivity': 'org.wikipedia.main.MainActivity',
        'appium:noReset': true,
        'appium:forceAppLaunch': true,
    }],
};
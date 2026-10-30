export const config: WebdriverIO.Config = {
    runner: 'local',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    specs: ['./test/specs/**/*.spec.ts'],
    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 17 Pro',
        'appium:platformVersion': '26.0',
        'appium:udid': '05242C23-A7A3-4938-B1D4-3600840C0FD6',
        'appium:bundleId': 'org.wikimedia.wikipedia',
        'appium:noReset': true,
        'appium:forceAppLaunch': true,
    }],

    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'info',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
};
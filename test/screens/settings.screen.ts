import {$} from '@wdio/globals';

class SettingsScreen {
    get settingsScreen() {
        return $(
            '-ios class chain:**/XCUIElementTypeButton[`name == "Settings"`]'
        );
    }

    get settingsHeader() {
        return $('~Settings Header');
    }

    get searchSettingsButton() {
        return $(
            '-ios class chain:**/XCUIElementTypeButton[`name == "Search"`]'
        );
}
get showLanguageToggle() {
        return $(
            '//XCUIElementTypeStaticText[@name="Show languages on search"]/../XCUIElementTypeSwitch/XCUIElementTypeSwitch'
        );
    }
}
export default new SettingsScreen();
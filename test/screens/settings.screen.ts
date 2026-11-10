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
}
export default new SettingsScreen();
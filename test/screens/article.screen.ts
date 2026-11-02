import { $ } from '@wdio/globals';

class ArticleScreen {
    get heading() {
        return $(
            '//XCUIElementTypeOther[@name="banner"]//XCUIElementTypeStaticText[@name="Appium"]'
        );
    }
}

export default new ArticleScreen();
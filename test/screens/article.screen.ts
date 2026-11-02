import { $ } from '@wdio/globals';
import { get } from 'https';

class ArticleScreen {
    get heading() {
        return $(
            '//XCUIElementTypeOther[@name="banner"]//XCUIElementTypeStaticText[@name="Appium"]'
        );
    }

    get saveArticleButton() {
    return $('~Article Save Button');
}    
    }
export default new ArticleScreen();
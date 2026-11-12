import { $ } from '@wdio/globals';

class SavedScreen {
    get savedTab() {
        return $('~Saved');
    }

    get allArticles() {
        return $('//android.widget.TextView[@text="All articles"]');
    }

    get appiumArticle() {
        return $('//android.widget.TextView[@text="Appium"]');
    }

    get removeFromSaved() {
        return $('id:org.wikipedia.alpha:id/reading_list_item_remove_text');
    }
}

export default new SavedScreen();

import { $ } from '@wdio/globals';

class SearchScreen {
    get searchTab() {
        return $('~Search Tab Button');
    }

    get searchField() {
        return $('~Search Field');
    }

    get searchButton() {
        return $('~Search');
    }

    async searchForArticle(query: string) {
        await this.searchTab.click();
        await this.searchField.setValue(query);
        await this.searchButton.click();
    }
}

export default new SearchScreen();
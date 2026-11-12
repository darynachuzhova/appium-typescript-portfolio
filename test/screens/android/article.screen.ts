import { $ } from '@wdio/globals';

class ArticleScreen {
    get articlePage() {
        return $('id:org.wikipedia.alpha:id/page_fragment');
    }

    get saveButton() {
        return $('id:org.wikipedia.alpha:id/page_save');
    }

    get bottomSheet() {
        return $('id:org.wikipedia.alpha:id/design_bottom_sheet');
    }

    get navigateUp() {
        return $('~Navigate up');
    }
}

export default new ArticleScreen();
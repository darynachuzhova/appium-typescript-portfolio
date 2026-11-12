import { $ } from '@wdio/globals';

class HomeScreen {
    get forYouTab() {
        return $('~For You');
    }
}
export default new HomeScreen();
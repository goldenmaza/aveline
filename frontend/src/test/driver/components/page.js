export default class Page {
    open(path) {
        browser.url(path);
    }

    pause(ms) {
        browser.pause(ms);
    }
}

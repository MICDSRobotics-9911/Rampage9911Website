import { browser, by, element } from 'protractor';

export class Technoramic5190Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BaseScreen {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    startApp (appPackage,appActivity) {
        return browser.startActivity(`${appPackage},${appActivity}`)
    }
}

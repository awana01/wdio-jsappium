

import BaseScreen from './startApp';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleScreen extends BaseScreen {
    /**
     * define selectors using getter methods
     */
    get menuBTN () {
        return $('[resource-id="com.android.chrome:id/menu_button"]');
    }

    get menuSettingsBTN () {
        return $('~Settings');
    }

    /**
     * 
     * @param {*} mobile element 
     */
    checkElementPresence(element){
       if(element.isDisplayed()){
          element.click()
       }
    }
    
    /**
     * 
     * @param {*} element mobile element
     * @param {*} data : to send in editbox
     */
    sendDataToElement(element,data){
        if(checkElementPresence(element)){
            element.sendKeys(data)

        }else{
            console.log(`${element} not found`)
        }
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
     startApp () {
        return super.startApp("com.android.chrome","com.google.android.apps.chrome.Main");
    }
}

export default new GoogleScreen();

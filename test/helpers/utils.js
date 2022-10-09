const SELECTORS = {
    ANDROID: {
        TEXT: '*//android.widget.TextView',
        TEXT_FIELD: '*//android.widget.EditText',
    },
    IOS: {
        GENERIC_TEXT: null,
        XPATH_TEXT: '*//XCUIElementTypeStaticText',
        TEXT_FIELD: '*//XCUIElementTypeTextField',
    },
};

/**
 * Get the text of an element
 *  NOTE:
 *      This method will contain all the text of the component,
 *      including all the child components
 *
 * @param {element} element
 * @param {boolean} isXpath
 *
 * @return {string}
 */
function getTextOfElement (element, isXpath = false) {
    let visualText;
    try {
        if (driver.isAndroid) {
            visualText = element.getText(SELECTORS.ANDROID.TEXT);
        } else {
            visualText = element.getText(isXpath ? SELECTORS.IOS.XPATH_TEXT : SELECTORS.IOS.GENERIC_TEXT);
        }
    } catch (e) {
        visualText = element.getText();
    }

    if (typeof visualText === 'string') {
        return visualText;
    }

    return Array.isArray(visualText) ? visualText.join(' ') : '';
}

/**
 * Get the time difference in seconds
 *
 * @param {number} start    the time in milliseconds
 * @param {number} end      the time in milliseconds
 */
function timeDifference (start, end) {
    const elapsed = (end - start) / 1000;
    console.log('elapsed = ', elapsed, ' seconds');
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();  
    } while (currentDate - date < milliseconds);
  }
/**
 * 
 * @param {*} data: string to sendkeys 
 * @param {*} webEle: text box element
 */
async function sendKeyAsUser(data,webEle){
    let dataX = data.split('')
    for(let s=0;s<dataX.length;s++){
      await webEle.sendKeys(data.charAt(s))
      //await webEle.addValue(data.charAt(s))
      sleep(500)
    }
}

async function hideKeyBoardIfShow(){
    if(await browser.isKeyboardShown()){
        await browser.hideKeyboard()
        sleep(1200)
    }
}


async function loadTestData(fileName=''){
    const fs = require('fs')
    var datafile1 = require.resolve('../data-files/'+fileName)   
    console.log(datafile1)            //'../../data-files/google.json');
    const data = fs.readFileSync(datafile1, "utf8");
    var arr = null
    try {
        arr = JSON.parse(data)
        console.log(arr);
    } catch (err) {
        console.error(err);
    }
    return arr;
}

async function writeJsonFile(jsonData){
    // file system module to perform file operations
    const fs = require('fs');
    const pathx = require('path').resolve('.')
    console.log("path:"+pathx+'/datafiles')
    // json data
    //var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

    // parse json
    var jsonObj = JSON.parse(jsonData);
    console.log(jsonObj);

    // stringify JSON Object
    var jsonContent = JSON.stringify(jsonObj);
    console.log(jsonContent);

    fs.appendFile("output.json", jsonContent, 'utf8', function (err) {
        if (err) {
           console.log("An error occured while writing JSON Object to File.");
           return console.log(err);
        }
       console.log("JSON file has been saved.");
    });
}

/**
 * 
 * @param {*} list or Array 
 * @returns 
 */
function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }

/**
 * 
 * @param {*} jsonData as dictionary 
 * @param {*} jsonFilename json file name
 */
function writeTestDataToJson(jsonData,jsonFilename){
    var fs = require('fs');
    var baseFile = require('path').resolve('.')

    var jsonFile = baseFile+'/test/data-files/'+jsonFilename
    console.log(jsonFile)

    var data = {}
    data.testdata = []
    var obj = jsonData
    data.testdata.push(obj)
    
    fs.writeFile (jsonFile, JSON.stringify(data), function(err) {
          if (err) throw err;
             console.log('complete');
    });
}

  module.exports = {
                getTextOfElement, 
                hideKeyBoardIfShow,
                timeDifference,
                sleep,
                sendKeyAsUser,
                loadTestData,
                writeJsonFile,
                get_random,
                writeTestDataToJson

            };
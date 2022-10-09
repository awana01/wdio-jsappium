import {sleep,sendKeyAsUser,hideKeyBoardIfShow,get_random,writeTestDataToJson,loadTestData} from '../../helpers/utils'
import {faker} from '@faker-js/faker'



describe("Android Mi A2 settings test",()=>{

    before(async()=>{
        console.log("creating test data for test")
        let googleData ={
            name:faker.name.firstName(),
            org:faker.company.name()

        }
        writeTestDataToJson(googleData,'data1.json')
        
        // await $("[resource-id='// 
        
        // await browser.touchAction({
        //         action: 'longPress', x: 30, y:20, selector: '//UIAApplication[1]/UIAElement[2]'
        //     })']")




        // // multi action on an element (drag&drop)
        // await browser.touchAction([
        //                   'press',
        //                   { action: 'moveTo', x: 10, y: 1200 },
        //                   'release'
        //                   ])
    })


    it("test chrome app",async()=>{
        sleep(5000)
        await browser.startActivity("com.android.chrome","com.google.android.apps.chrome.Main")
        sleep(2000);
        
        await (await $('[resource-id="com.android.chrome:id/menu_button"]')).click()
        sleep(2000)
        // let x = "new UiScrollable(new UiSelector().resourceId(\""android:id/list"\")).scrollIntoView(new UiSelector().textContains(\""Settings"\"));"
        // await (`android=${x}')
        const bottomElementSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Settings"))'
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
        sleep(3000)
        console.log("before click settings")
        await $('~Settings').click()
        sleep(3000)
        let partialtext = "data"
        // let history_scroll = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(\""data"\"))`
        // await $(`android=${history_scroll}`)
        const bottomElementSelector1 = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("About Chrome"))'
        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
        sleep(3000)
        //var scrollBackWard = "new UiScrollable(new UiSelector().scrollable(true)).scrollBackward()"
        //var quickSwipe = "new UiScrollable(new UiSelector().scrollable(true)).flingForward()"
        //scroll number={10} times 
        //var nTimeScroll = "new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(10)"

        // scrollToBeginning (moves exactly by one view. 10 scrolls max)
        //var scrollToBegning = "new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(10)"
    
        var text2search = "About Chrome"
        var textSearch1 = "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(\""+text2search+"\"))"
        var textSearch = "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(\""+text2search+"\"))"//About Chrome
        await $(`android=${textSearch}`)
    
    
    
    
    })
    it("add address to google chrome",async()=>{
       
        let data = await loadTestData('data1.json')
       console.log(data['testdata'][0]['name'])

       var countryArray = ['Switzerland','Germany','France','Finland','Norway','Canada','Poland','Australia','India','United States','United Kingdom']
       var countryName =get_random(countryArray)

       console.log("random output: "+countryName)

        var text2search = "Addresses and more"
        var address = "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(\""+text2search+"\"))"//About Chrome
        await $(`android=${address}`)

        console.log("click on address and more")
        await $("[text='Addresses and more']").click()
        sleep(1000)
        await (await $("[text='Add address']")).click()
        sleep(1000)
        
        let countryRegionEle = await $('[resource-id="com.android.chrome:id/spinner_item"]')
        await browser.touchAction({
            action: 'tap',
            element: countryRegionEle
        });
        
        // scrollToBeginning (moves exactly by one view. 10 scrolls max)
        var scrollToBegning = "new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(10)"
        await $(`android=${scrollToBegning}`)
        sleep(3000)
        console.log('scroll to begaining 10 times scroll')
        
        //let countryText = countryArray[rand_num]       //faker.address.country()     //"India"
        console.log(`finding ${countryName} text`)

        var countryScroller = "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(\""+countryName+"\"))"
        await $(`android=${countryScroller}`)
        sleep(1000)
        let counteryName  = await $(`[text=${countryName}]`)
        await hideKeyBoardIfShow()

        let name  = await $("[text='Name']")
        sendDataToElement(name)
        await hideKeyBoardIfShow()


        let organization = await $("[text='Organization']")
        sendDataToElement(organization)
        await hideKeyBoardIfShow()

        let streetAddress = await $("[text='Street address']")
        await hideKeyBoardIfShow()

        let city = await $("[text='City']")
        await hideKeyBoardIfShow()

        let satate = await $("[text='State']")
        await hideKeyBoardIfShow()

        let zipCode = await $("[text='ZIP code']")
        await hideKeyBoardIfShow()

        let phone = await $("[text='Phone']")
        await hideKeyBoardIfShow()

        let email = await $("[text='Email']")
        await hideKeyBoardIfShow()

        let cancelBTN = "Cancel"
        var countryScroller = "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(\""+cancelBTN+"\"))"
        await $(`[text=${cancelBTN}]`).click()
    })
})

/**
     * 
     * @param {*} mobile element 
     */
 function checkElementPresence(element){
    if(element.isDisplayed()){
       element.click()
    }
 }
 
 /**
  * 
  * @param {*} element mobile element
  * @param {*} data : to send in editbox
  */
 function sendDataToElement(element,data=''){
     if(checkElementPresence(element)){
         element.sendKeys(data)

     }else{
         console.log(`${element} not found`)
     }
 }
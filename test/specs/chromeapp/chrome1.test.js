import {sleep,sendKeyAsUser} from '../../helpers/utils'

describe("Android Mi A2 settings test",()=>{
    it("go to settings app",async()=>{
        sleep(5000)
        await browser.startActivity("com.android.chrome","com.google.android.apps.chrome.Main")
        sleep(2000);
        let serachBOX = await $("[resource-id='com.android.chrome:id/search_box_text']")
        await serachBOX.click()
        sleep(400)
        let urlBAR = await $("[resource-id='com.android.chrome:id/url_bar']")
        sleep(1000)
        // await sendKeyAsUser("https://www.bigbaske",urlBAR)
        await urlBAR.addValue("https://www.bigbaske")
        sleep(2000)
        
        if(await browser.isKeyboardShown()){
            await browser.hideKeyboard()
            sleep(1200)
        }
        let searchResult = await $$("//android.widget.TextView[@resource-id='com.android.chrome:id/line_1']")
        let searchResult2 = await $$("//android.widget.TextView[@resource-id='com.android.chrome:id/line_2']")
        for(let x=0;x<searchResult2.length;x++){
            let searchText = await searchResult2[x].getText()
            if(searchText.includes("https://www.bigbasket.com")){
                console.log("element found")
                await searchResult2[x].click()
                // await browser.touchAction({
                //     action: 'tap', x: 30, y:20
                // })
                break;
            }
        }
        sleep(3000)
        await browser.touchAction([ 
            {action: 'longPress', x: 70, y: 1500}, 
            { action: 'moveTo', x: 70, y: 10}, 
            'release' 
           ]);
    })

    it.only("test clear notification",async ()=>{
        sleep(3000)
        await browser.openNotifications()
        sleep(1000)
        
        let notifEle = await (await $("[resource-id='com.android.systemui:id/notification_stack_scroller']")).getSize()
        let x = notifEle.width
        let y =notifEle.height
        console.log(`x:${x} y:${y}`)
        let notifEle2 = await $$("[resource-id='android:id/status_bar_latest_event_content']")
        let notifEle2X = await notifEle2[0].getLocation('x')
        let notifEle2Y = await notifEle2[0].getLocation('y')
        console.log(`total elex: ${notifEle2X} eley: ${notifEle2Y}`)
        
        await notifEle2[0].touchPerform([
                       { action: 'press', options: { x: 10, y: 400 }},
                       { action: 'wait', options: { ms: 1000}},
                       { action: 'moveTo', options: { x: 10, y: 200}},
                       { action: 'release' }
                      ]);


        let scrollVw1 = "new UiScrollable(new UiSelector().scrollable(true).instance(1)).scrollIntoView(new UiSelector().text(\"CLEAR ALL\"))";
        await $(`android=${scrollVw1}`)
        sleep(2000)
        
        let verticalScroll = "new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollIntoView(new UiSelector().text(\"CLEAR ALL\"))";
        await $(`android=${verticalScroll}`)
        sleep(2000)

        //await clearALL.click()
        //await $("[resource-id='com.android.systemui:id/dismiss_text']").scrollIntoView();
        let scrollable = "new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains(\"CLEAR ALL\").instance(0))"
        await $(`android=${scrollable}`)

        //await (await $("[resource-id='com.android.systemui:id/dismiss_text']")).click()
        
        //How do I perform touchAction from element to element rather than passing x and y
        // await browser.touchAction({
        //     action: 'tap', x: 30, y:20, selector: '//UIAApplication[1]/UIAElement[2]'
        // })

        //long press on element
        // webdriver.io example
        //    await browser.touchPerform({
        //               action: 'longPress',
        //               options: {element: element }
        //            });

        //// Javascript
        // webdriver.io example
        // driver.touchScroll({
        //      el: element,
        //      xOffset: 10,
        //      yOffset: 100
        //    });

//         // Javascript
// // webdriver.io example
// driver.touchPerform({
//     action: 'tap',
//     options: {
//       element: element
//     }
//   });



    })
})
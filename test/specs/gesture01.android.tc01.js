import {sleep} from '../helpers/utils'
import Gestures from '../helpers/Gestures'

describe("various gesture test",()=>{
    it("horizointal swipe to right",async ()=>{

        sleep(4000)
        let screenSize = await browser.getWindowSize()
        let screenY = screenSize.height/2
        let screenX=screenSize.width-200
        console.log(`screen height: ${screenSize.height} width:  ${screenSize.width}`)
        
        let homeScreen = await $('[resource-id="com.android.launcher3:id/workspace"]')
        let homeScrollSize = homeScreen.getElementSize()
        // let screenY = homeScrollSize.height/2
        // let screenX=homeScrollSize.width-200
        // console.log(`screen height: ${screenY} width:  ${screenX}`)
        
        //Gestures.swipeRight()
        
        // await homeScreen.touchAction([
        //      {action:'press',options: { x: screenX/2, y: screenY  }},
        //      {action:'moveTo',x:screenX,y:screenY},
        //      'release'
        // ])
        
        

        // await browser.performActions([
        //     {
        //         // a. Create the event
        //         type: 'pointer',
        //         id: 'finger1',
        //         parameters: { pointerType: 'touch' },
        //         actions: [
        //             // b. Move finger into start position
        //             { type: 'pointerMove', duration: 0, x: screenX/2, y: screenY },
        //             // c. Finger comes down into contact with screen
        //             { type: 'pointerDown', button: 0 },
        //             // d. Pause for a little bit
        //             { type: 'pause', duration: 100 },
        //             // e. Finger moves to end position
        //             //    We move our finger from the center of the element to the
        //             //    starting position of the element.
        //             //    Play with the duration to make the swipe go slower / faster
        //             { type: 'pointerMove', duration: 1000, x: screenX, y: screenY },
        //             // f. Finger gets up, off the screen
        //             { type: 'pointerUp', button: 0 },
        //         ],
        //     },
        // ]);
        
        await browser.performActions([
            {
               type: 'pointer',
               id: 'finger1',
               parameters: { pointerType: 'touch' },
               actions: [
                  { type: 'pointerMove', duration: 0, x: screenX-100, y: screenY },
                  { type: 'pointerDown', button: 0 },
                  { type: 'pause', duration: 100 },
                  { type: 'pointerMove', duration: 1000, origin: 'pointer', x: screenX/2, y: screenY },
                  { type: 'pointerUp', button: 0 },
               ],
            }
         ])

        //  // release an action
        //  //await driver.releaseActions();
         let scrollId = "com.android.launcher3:id/workspace"
         let eleText = "Uber"
         //let x = "new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(10)"
        //  let horiScroll = "new UiScrollable(new UiSelector().scrollable(true).resourceId(\""+scrollId+"\")).setAsHorizontalList().setSwipeDeadZonePercentage(0.8).setMaxSearchSwipes(1).scrollIntoView(new UiSelector().textContains(\""+eleText+"\"))";
        //  await $(`android=${horiScroll}`)
         
         console.log("swipe horizointal")
        //  let indefiniteScroll = "new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
        //  await $(`android=${indefiniteScroll}`)
        
        // let maxswipeTwo = "new UiScrollable(new UiSelector().scrollable(true)).scrollForward(2).setAsHorizontalList()" //.setSwipeDeadZonePercentage(0.8).scrollIntoView(new UiSelector().textContains(\""+eleText+"\"))";
        //  await $(`android=${maxswipeTwo}`)
        
         let flingSwipeVerical = "new UiScrollable(new UiSelector().scrollable(true)).flingForward()"
         await $(`android=${flingSwipe}`)

         let xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView"
         console.log(await $$(`${xpath}`).length)
         console.log(await $$("//android.widget.TextView[@package='com.android.launcher3']").length)
         console.log(await $$('[resource-id="com.android.launcher3:id/icon"]').length)
         
         //  console.log('scroll android home screen upward')
        //  await $(`android=${x1}`)
        //  sleep(2000)
        //  await $(`android=${x1}`)

        //  let x2 = "new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().setSwipeDeadZonePercentage(0.9).scrollIntoView(new UiSelector().text(\""+eleText+"\"))"
        // await (await $(`android=${x2}`)).click()




        //  let scrollObject = new Map([
        //     ["direction", "right"]
        //  ])
        //  await browser.execute("mobile: scroll", scrollObject);



    })
})
import {Gestures} from '../../helpers/Gestures'
import * as EC from 'wdio-wait-for'

describe('sample appium test', ()=>{

    before(async()=>{
        await browser.startActivity("com.bigbasket.mobileapp","com.bigbasket.mobileapp.activity.SplashActivity")
    })

    it('A sample menu click',async()=>{
  
       sleep(5000);
       await browser.updateSettings({fixImageTemplateScale: true})
       await browser.updateSettings({getMatchedImageResult: true})
       const store_type = $('//android.widget.LinearLayout[2]/android.widget.RelativeLayout');
       
       //const store_type = await $("E:/Mobile/App-Snapshot/bigbasket/ele1.png")
      //  await (await store_type).saveScreenshot("elem1.png")
       await $('./elem1.png').click()
    //    //.click();
    //    //sleep(5000)
    //    var count=1
    //    let wait_timeout=3000
    //    do{
    //       sleep(wait_timeout)
    //       if(await $$("//*[@resource-id='com.bigbasket.mobileapp:id/homePageSearchBox']").length>0){
    //         console.log(`element found after ${count*3000} secs`)
    //         break;
    //       }
    //       console.log(`element not found after ${count*3000} secs`)
    //       count++
    //    }while(count<10)
    // //    await browser.waitUntil(EC.elementToBeClickable("//*[@resource-id='com.bigbasket.mobileapp:id/homePageSearchBox']"),
    // //       { 
    // //         timeout: 10000, 
    // //         timeoutMsg: 'Failed, after waiting for the 2 elements' 
    // //      })
       
    //    //Gestures.swipeUpward()
  
    });
  
    
  
  
    it('C scroll to elements',()=>{
      //  sleep(6000);
      //  console.log("swiping verticlly upward");
       
  
   });
   
  it("E get the size of screen",async ()=>{
    //   sleep(3000);
    //   const startPercentage = 90
    //   const endPercentage = 10
    //   const anchorPercentage = 50
  
    //    await browser.touchPerform([
    //            { action: 'press', options: { x: 200, y: 700 }},
    //            { action: 'wait', options: { ms: 1000}},
    //            { action: 'moveTo', options: { x: 200, y:  350}},
    //            { action: 'release' }
    //           ]);

    // sleep(2000)
    // var total_eles = await $$('//*[@resource-id="com.bigbasket.mobileapp:id/imgCategory"]')
    // console.log(total_eles.length)
    // //swipeUpwardLocal(60);
    // sleep(5000);
    // await total_eles[4].click()
    // sleep(8000);
    // await browser.takeScreenshot()
  
    //   // driver.touchPerform([
    //   //  {action:'press',options:{x:500,y:800}},
    //   //  {action:'wait',options:{ms:1000}},
    //   //  {action:'moveTo',Options:{x:500,y:300}},
    //   //  {action:'release'}
  
    //   // ]);
  
    //   for(let i=0;i<3;i++){
    //     await browser.touchPerform([
    //         { action: 'press', options: { x: 200, y: 700 }},
    //         { action: 'wait', options: { ms: 1000}},
    //         { action: 'moveTo', options: { x: 200, y:  350}},
    //         { action: 'release' }
    //       ]);
    //   }
    //   sleep(4000)
    //   await browser.takeScreenshot()
    //   var visibleText= ''
    //   //await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains("Buckets and Mugs").instance(0))');
    //   await $("android=new UiScrollable(new UiSelector().resourceIdMatches(\".*daimajia_slider_image.*\").scrollable(true)).scrollIntoView(new UiSelector().text(\"Herbal Packs\"))")
    //   sleep(3000)
    //   // const elem = await $('~Herbal Packs')
    //   // await elem.click()
    //   let text = "We are the so-called \"Vikings\" from the north.";
    //   const elem1 = await $("new UiSelector().description(\"Herbal Packs\")")
    //   //elem1.click()

  });
   
  
  
  
  });
  
  function swipeUpwardLocal(iteration){
  
    for(let i=0;i<iteration;i++){
  
       driver.touchPerform([
           { action: 'press',options:{x:300,y:800} },
           { action:'wait',options:{ms:800 }},
           { action:'moveTo',options:{x:500,y:300}},
           { action:'release' }
       ]);
    }
  }
  
  
  function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();  
      } while (currentDate - date < milliseconds);
    }
  
    /*
    await el.touchAction([
    { action: 'press', x: 540, y: 900 },
    { action: 'wait', ms: 500 },
    { action: 'moveTo', x: 540, y: 480 },
    'release']);
  
    */
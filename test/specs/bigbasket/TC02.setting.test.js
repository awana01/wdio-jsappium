import {sleep} from '../../helpers/utils'

describe("Android Mi A2 settings test",()=>{
    it("go to settings app",async()=>{
        sleep(5000)
        await browser.startActivity("com.android.settings","com.android.settings.Settings")

        sleep(5000);
        const startPercentage = 90
        const endPercentage = 10
        const anchorPercentage = 50

        const {width} = await browser.getWindowSize();
        const {height}=await browser.getWindowSize();
    
        console.log("width: "+width+" height: "+height);

        const density = (await browser.getDisplayDensity()) / 100
        const anchor = (width * anchorPercentage) / 100
        const startPoint = (height * startPercentage) / 100
        const endPoint = (height * endPercentage) / 100
        
        console.log("try to swipe downward")
        await browser.performActions([
                {
                   type: 'pointer',
                   id: 'finger1',
                   parameters: { pointerType: 'touch' },
                   actions: [
                              { type: 'pointerMove', duration: 0, x:300, y:1000 },
                              { type: 'pointerDown', button: 0 },
                              { type: 'pause', duration: 300 },
                              { type: 'pointerMove', duration: 1000, origin: 'pointer', x:300, y:200 },
                              { type: 'pointerUp', button: 0 },
                              { type: 'pause', duration: 300 },
                            ],
                },
        ]);
        sleep(2000)
    
       console.log("working perfect swipe upward")
       await swipeTillElement("Apps & notifications",3)
       sleep(3000)
       await $("//android.widget.Button[@text='SEE ALL 86 APPS']").click()
       sleep(1500)
       await swipeTillElement("bigbasket",3)
       sleep(2000)
       await (await $("//android.widget.TextView[@text='Storage & cache']")).click()

       let cacheHeader = await $("//android.widget.LinearLayout[5]/android.widget.TextView[0]").getText()
       let cacheSize = await $("//android.widget.LinearLayout[5]/android.widget.TextView[1]").getText()
       console.log(`cache data ${cacheHeader} - ${cacheSize}`)
    })

})

async function swipeTillElement(elementText , numberOfSwipes=1){

    for(let x=0;x<numberOfSwipes;x++){
      await browser.touchAction([ 
                         {action: 'longPress', x: 0, y: 1200}, 
                         { action: 'moveTo', x: 0, y: 10}, 
                         'release' 
                        ]);
       var allSettingOptions = await $$("//android.widget.TextView[@resource-id='android:id/title']")                       //$$("//androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout")
       console.log("all settings option displayed: "+allSettingOptions.length)
       for(let i=0;i<allSettingOptions.length;i++){
          let eleText = await allSettingOptions[i].getText()
          console.log("Settings name: "+eleText)
          if(eleText.includes(elementText)){
              console.log("element found")
              await allSettingOptions[i].click()
              break;
          }
       }
       console.log(`element not found in ${x}`)
    }

}
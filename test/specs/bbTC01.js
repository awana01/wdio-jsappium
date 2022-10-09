const { ANDROID_CONFIG } = require("@wdio/cli/build/constants");

describe('sample appium test',()=>{
    it('A sample menu click',async ()=>{
  
       sleep(5000);
       
            
       const store_type = await $('//android.widget.LinearLayout[2]/android.widget.RelativeLayout');
       await store_type.click();
       //sleep(10000);
  
      //  const  menu_button = $('id=com.bigbasket.mobileapp:id/iv_drawer') 
      //  menu_button.click();
      //  sleep(5000);
  
  
      //  driver.back(); //.pressKeyCode(67);
       sleep(5000);

      await driver.touchPerform([
        { action: 'press',options:{x:300,y:800} },
        { action:'wait',options:{ms:700 }},
        { action:'moveTo',options:{x:500,y:300}},
        { action:'release' }
      ]);

     swipeUpward(60);
     sleep(5000);
    });
  
});
  
  function swipeUpward(x){
  
    for(let i=0;i<x;i++){
  
       driver.touchPerform([
           { action: 'press',options:{x:300,y:800} },
           { action:'wait',options:{ms:500 }},
           { action:'moveTo',options:{x:500,y:300}},
           { action:'release' }
       ]);
    }
  }
  
  
  function sleep(x) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();  
      } while (currentDate - date < x);
    }
  
    /*
    await el.touchAction([
    { action: 'press', x: 540, y: 900 },
    { action: 'wait', ms: 500 },
    { action: 'moveTo', x: 540, y: 480 },
    'release']);
  
    */
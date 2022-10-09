describe('sample appium test',()=>{
  it('A sample menu click',()=>{

     sleep(5000);
     
          
     const store_type = $('//android.widget.LinearLayout[2]/android.widget.RelativeLayout');
     store_type.click();
     //sleep(10000);

    //  const  menu_button = $('id=com.bigbasket.mobileapp:id/iv_drawer') 
    //  menu_button.click();
    //  sleep(5000);


    //  driver.back(); //.pressKeyCode(67);
    //  sleep(5000);

  });

  // it('B search grocery data in app',()=>{
  //     var searchBox = $('id=com.bigbasket.mobileapp:id/homePageSearchBox');
  //     //searchBox.click();
  //     //sleep(5000);
  //     searchBox.setValue("vegitable oil");
  //     //searchBox.addValue("oil");
  //     sleep(10000);
      
  //     driver.takeScreenshot();

  //     //com.bigbasket.mobileapp/com.bigbasket.homemodule.views.activity.HomeActivityBB2
  // });


  it('C scroll to elements',()=>{
     sleep(6000);
     console.log("swiping verticlly");
    //  //driver.startActivity('com.bigbasket.mobileapp','com.bigbasket.mobileapp.activity.HomeActivity');
    // //  sleep(10000);
    // // scrollToEnd(numOfTimes,time)                                                       
    //  $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(30,15)');
    //  sleep(10000);
    //  var endText = $("~That's all folks!");
    //  endText.scrollIntoView();
    //  sleep(10000);
    

    //  const bottomElementSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("~all folks!"))';
    //  const bottomEl = $('android=${bottomElementSelector}');
    //  sleep(10000);

 });
 
//  it('D scroll 50 times on screen',()=>{
//   const element1 = 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()';
//   for(let i=0;i<20;i++){
//      $(element1);
//      sleep(2000)
//      console.log("iteration: "+i);
//   }

// });
it("E get the size of screen",()=>{
    sleep(5000);
    const startPercentage = 90
    const endPercentage = 10
    const anchorPercentage = 50

    // const {width} = driver.getWindowSize();
    // const {height}=driver.getWindowSize();
    
    // console.log("width: "+width+" height: "+height);

    // const density = ( driver.getDisplayDensity()) / 100
    //const anchor = (width * anchorPercentage) / 100
    // const startPoint = (height * startPercentage) / 100
    // const endPoint = (height * endPercentage) / 100

    // driver.performActions([
    //     {
    //         type: 'pointer',
    //         id: 'finger1',
    //         parameters: { pointerType: 'touch' },
    //         actions: [
    //                     { type: 'pointerMove', duration: 0, x:300, y:1000 },
    //                     { type: 'pointerDown', button: 0 },
    //                     { type: 'pause', duration: 300 },
    //                     { type: 'pointerMove', duration: 1000, origin: 'pointer', x:300, y:200 },
    //                     { type: 'pointerUp', button: 0 },
    //                     { type: 'pause', duration: 300 },
    //                 ],
    //     },
    // ]);
    
    driver.touchPerform([
        { action: 'press',options:{x:400,y:800} },
        { action:'wait',options:{ms:700 }},
        { action:'moveTo',options:{x:400,y:300}},
        { action:'release' }
  ]);

  swipeUpward(60);




    sleep(5000);


    // driver.touchPerform([
    //  {action:'press',options:{x:500,y:800}},
    //  {action:'wait',options:{ms:1000}},
    //  {action:'moveTo',Options:{x:500,y:300}},
    //  {action:'release'}

    // ]);



});
 



});

function swipeUpward(iteration){

  for(let i=0;i<iteration;i++){

     driver.touchPerform([
         { action: 'press',options:{x:300,y:800} },
         { action:'wait',options:{ms:500 }},
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
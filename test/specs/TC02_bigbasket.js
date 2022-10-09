import * as shell from "shelljs";

describe('execute command programmitacly',()=>{

    before(function () {
        console.log("In Test before");
    });
    
    after(function () {
        console.log("In Test after");
    });
    
    beforeEach(function () {
        console.log("In Test before each test");
    });
    
    afterEach(function () {
        console.log("In Test after each test");
    });





  it("A get the node version",()=>{
     
    const version = shell.exec("node --version", {async: false}).stdout;
    console.log("nodejs version", version);
 
  });

  it('get the busy port of the system',()=>{
    const port = shell.exec('netstat -ano|findstr "PID :4723"',{async:false}).stdout;
    console.log("cmd output:", port.toString());
    console.log(port.toString().toLowerCase());
    
    var cmdArray = port.split(' ');
    for(let i=0;i<cmdArray.length;i++){
        console.log("i:"+i+" e:"+cmdArray[i]);
    }

    console.log('array:')
    Array.from(cmdArray).forEach(function (element){
        console.log(element)
    });



  })


});


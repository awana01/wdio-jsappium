// import * as filePath from 'path'      
//'../data-files/'

const filePath = require('path').resolve('.')
const utils = require('../helpers/utils')


describe("sample json code tests",()=>{
    
    it("google add json data to table array",()=>{

            var fs = require('fs');
            var fileName = filePath+'/test/data-files/data1.json'
            console.log(fileName)

            var data = {}
            data.testdata = []
            for (i=2; i <7 ; i++){
               var obj = {
                           id: i,
                           square: i * i
                         }
               data.testdata.push(obj)
               //data.push(obj)
            }
            fs.writeFile (fileName, JSON.stringify(data), function(err) {
               if (err) throw err;
                   console.log('complete');
            });
    })

    it.skip("write data to json file",()=>{
        
        // var data = {}
        // data.testdata = []
        let obj ={
            id:"test1",
            pass:"password"
        }
        // data.testdata.push(obj)
        utils.writeTestDataToJson(obj,'data1.json')
    })

    it("reading json dict array data",async ()=>{
        let dat = await utils.loadTestData('data1.json')
        console.log("name: "+await dat)
        console.log(await dat['testdata'][0]['id'])
    })
    
})
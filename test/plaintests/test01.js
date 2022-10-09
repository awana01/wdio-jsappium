// import{exec } from 'child_process';
// import {sleep,sendKeyAsUser,hideKeyBoardIfShow,get_random} from '../helpers/utils.js'

var x = require('../helpers/utils')

// var getRandom = require('../helpers/utils').get_random

describe('sample plain tests',()=>{
    it("test1",()=>{
        console.log("sample plain tests")
    })

    it("sample cmd command test",()=>{
        const execSync = require('child_process').execSync;
        // import { execSync } from 'child_process';  // replace ^ if using ES modules

        const output = execSync('dir', { encoding: 'utf-8' });  // the default is 'buffer'
        console.log('Output was:\n', output);
    })
    it("sample cmd command test2",async ()=>{
        //const execSync = require('child_process').execSync;
        // import { execSync } from 'child_process';  // replace ^ if using ES modules

        // const output = execSync('appium -a 127.0.0.1 -p 4723', { encoding: 'utf-8' });  // the default is 'buffer'
        // console.log('Output was:\n', output);

        // let { stdout } = await sh('appium -a 127.0.0.1 -p 4723');
        // for (let line of stdout.split('\n')) {
        //         console.log(`ls: ${line}`);
        // }
    })

    it("sample test3",async()=>{
        console.log('preparing appium run afterSession')
        
        var process = require('child_process');
        //var batFile1 = require.resolve('./allure_bat.bat');
        //console.log("abs Path: "+batFile1)
        process.exec('appium -a 127.0.0.1 -p 4723',async function (err,stdout,stderr) {
            if (err) {
              console.log("\n"+stderr);
            } else {
              sleep(10000)
              console.log(stdout);
            }
        });
    })
    it.only("test3",()=>{
        var countryArray = ['Switzerland','Germany','France','Finland','Norway','Canada','Poland','Australia','India','United States','United Kingdom']
        console.log(x.get_random(countryArray))
    })
})



// /**
//  * Execute simple shell command (async wrapper).
//  * @param {String} cmd
//  * @return {Object} { stdout: String, stderr: String }
//  */
// async function sh(cmd) {
//   return new Promise(function (resolve, reject) {
//     exec(cmd, (err, stdout, stderr) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve({ stdout, stderr });
//       }
//     });
//   });
// }
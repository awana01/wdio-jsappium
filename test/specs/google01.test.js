import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const result = dotenv.config()
const { sleep } = require("../helpers/utils")

describe('simple google tests for git',()=>{
    before(async ()=>{
        await browser.url("https://www.google.com")
        sleep(5000)
        await browser.takeScreenshot()
    })
    after(async()=>{
        console.log("ending google test")
    })

    it("search test1",async ()=>{
        await (await $('[name="q"]')).setValue("github actions\n")
        sleep(3000)
        await browser.takeScreenshot()
        console.log("print the console var:"+process.env.user)
        console.log(result.parsed.S3)
    })
})
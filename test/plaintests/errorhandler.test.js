
// import {should,expect} from 'chai'

var expect = require('chai').expect

describe('suite', function() {

    after(function(done) {
      // do something
      done();
    });
  
    it('test', function(done) {
       let a =1
       let b=2
       expect(a).to.be.equal(b);
      done();
    })

    it('test2',function(done){
        let a =1
        let b=2
        try {
            // test assertion
            expect(a).to.be.equal(b);
            console.log("step 2")

        } catch(e) {
            // catch the error and return it
            console.log(e)
            return done(e)
        }
        
        // just return normally
        return done()
    })
  
  });


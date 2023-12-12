const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/Notes';
let Notes = {paht:'',title:''}


describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(a,b,c){
            let responseObj = JSON.parse(c);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST api', function(){
    it('post Notes to DB', function(done){
        request.post({url:url,form:Notes}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});

describe('test DELETE api', function(){
    it('delete a Note', function(done){
        request.delete({url:url,form:Note}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});
const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');
const { default: mongoose } = require('mongoose');

// Mo ta qua trinh kiem tra
describe('Tim kiem ban ghi (records)', function(){

    //Saving record
    var character;
    beforeEach(function(done){
        character = new PersonChar({
            name:'Linh',
        });

        character.save().then(function(){
            done();
        })
    })
    //Find one
    it('Tim mot ban ghi tu co so du lieu', function(done){
        PersonChar.findOne({name:'Linh'}).then(function(result){
            assert(result.name === 'Linh');
            done();
        })
    });

    //Find one by Id
    it('Tim mot ban ghi tu co so du lieu', function(done){
        PersonChar.findOne({_id: character.id}).then(function(dataresult){
            assert(dataresult._id.toString() === character._id.toString());
            //_id ở dạng JSON nên phải ép kiểu sang string
            done();
        })
    });
})
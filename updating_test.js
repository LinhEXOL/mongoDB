const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');
const { default: mongoose } = require('mongoose');

// Mo ta qua trinh kiem tra
describe('Cap nhat ban ghi (records)', function(){

    //Saving record
    var character;
    beforeEach(function(done){
        character = new PersonChar({
            name:'Linh',
            height: 156,
        });

        character.save().then(function(){
            done();
        })
    })
    
    it('Cap nhat 1 ban ghi tu csdl', function(done){
        PersonChar.findOneAndUpdate({name:'Linh'}, {name: 'EXOL'}).then(function(){
            PersonChar.findOne({_id: character._id}).then(function(result){
                assert(result.name === 'EXOL');
                done();
            })
        })
    })

    it('Tang chieu cao len 2', function(done){
        PersonChar.updateOne({}, {$inc: {height: 2} }).then(function(){
            PersonChar.findOne({name: 'Linh'}).then(function(record){
                assert(record.height === 158);
                done();
            })
        })
    })

})
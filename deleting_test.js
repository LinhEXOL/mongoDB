const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');
const { default: mongoose } = require('mongoose');

// Mo ta qua trinh kiem tra
describe('Xoa ban ghi (records)', function(){

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
    
    it('Xoa 1 ban ghi tu csdl', function(done){
        PersonChar.findOneAndRemove({name:'Linh'}).then(function(){
            PersonChar.findOne({name: 'Linh'}).then(function(result){
                assert(result === null); // hai cái name ở trên giống nhau mới bằng null được
                done();
            })
        })
    })

})
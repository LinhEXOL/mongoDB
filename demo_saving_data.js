const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');
const { default: mongoose } = require('mongoose');


// Mo ta qua trinh kiem tra
describe('Mieu ta them du lieu', function(){
    
        it('Them mot ban ghi vao co so du lieu', function(done){
        //it: đặt tên cho function
            var character = new PersonChar({
                name: 'Faker',
            });

            //lưu bản ghi sau đó kiểm tra bản ghi
            character.save().then(function(){
                assert(character.isNew === false);
                done();
            })
        })
})
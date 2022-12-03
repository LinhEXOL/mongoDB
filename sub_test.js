const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Tim hieu ve record sub', function(){

    //Drop

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        })
    })

    //Tao qua trinh kiem tra
    it('Them 1 quyen sach', function(done){

        var tacgia = new Author({
            name: 'Faker',
            books: [{title: 'Cach choi game gioi', numberOfPages: 20}],
        })

        tacgia.save().then(function(){

            Author.findOne({name: 'Faker'}).then(function(record){
                //thêm 1 quyển sách vào mảng
                record.books.push({title: 'Cach vo dich the gioi', numberOfPages: 50});
                record.save().then(function(){
                    Author.findOne({name: 'Faker'}).then(function(result){
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })
})
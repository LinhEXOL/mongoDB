const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//connect to mongodb

before(function(done){
    mongoose.connect('mongodb://127.0.0.1/testdb');

    mongoose.connection.once('open', function(){
        console.log("Ket noi da duoc thuc hien!");
        done();
    }).on('error', function(error){
        console.log('Ket noi bi loi, ', error);
    })
})

//Drop các personcharacter collection trước khi kiểm tra và thêm

beforeEach(function(done){
    //Drop collection
    mongoose.connection.collections.personchars.drop(function(){
        done();
    })
})
//beforeEach là trước cả before ở trên nên thứ tự thực hiện: xóa tất cả bản ghi sau đó thêm bản ghi mới
//lưu ý: collections (collection thêm s): để xóa tất cả bản ghi, còn xóa 1 thì collection thui-->xóa personchars thì cx fai số nhiều

//SQL DB: table, row, column, joins, primary key
//MongoDB: collection, document, field, embeded documents/ linking, primary key
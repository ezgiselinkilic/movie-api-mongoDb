const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://ezgi:C12VAOp85jTy@cluster0.atvs8.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true});
  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
    mongoose.connection.on('error', () => {
        console.log('MongoDB: Error');
    });

    mongoose. Promise = global.Promise;
};
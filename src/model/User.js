const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

(async () =>  await mongoose.connect('mongodb://newbie:123321@188.68.209.63/readusers'))();

module.exports = mongoose.model('User', new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: Number,
    required: true
  }
}));

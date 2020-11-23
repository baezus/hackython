const mongoose = require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: String,
}, {timestamps: true})

userSchema.method("toJSON", function() {
  const {__v, _id, ...object } = this.toObject();
  object.id=_id;
  return object;
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
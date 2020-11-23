const mongoose = require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema ({
  name: String,
  participants: Array,
  host: String,
}, {timestamps: true})

roomSchema.method("toJSON", function() {
  const {__v, _id, ...object } = this.toObject();
  object.id=_id;
  return object;
});

roomSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Room', roomSchema);
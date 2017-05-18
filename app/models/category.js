const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = Schema({
  name : {type:String, required:true}

});

// Virtual for bookinstance's URL
CategorySchema
.virtual('url')
.get(function () {
  return `/catalog/category/${this._id}`;
});

//Export model
module.exports =  mongoose.model('Category', CategorySchema);

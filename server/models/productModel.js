const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CatagorySchema = new Schema({
  name: { type: String, required: true }
});

const ProductSchema = new Schema({
    name: { type: String, required: true },
    adjective: { type: String, required: true },
    catagory: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
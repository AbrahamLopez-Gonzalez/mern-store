import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // description: { type: String, required: true },
}, {
  timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);
// Product on the left side is the name of the model
// mongoose.model is a function that defines a model
// first argument = name asign to the model, passed to MongoDB pluralized
// Second argument = the schema to be utilised
export default Product;
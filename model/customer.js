import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Customer = new Schema({
  no: {
    type: Number,
    required: true,
  },
  namaCustomer: {
    type: String,
    required: true,
  },
  noTelp: {
    type: String,
    required: true,
    unique: true,
  },
  alamat: {
    type: String,
  },
});

Customer.methods.noUrut = function (data) {
  this.no = data;
  return this.save();
};

export default mongoose.model("Customers", Customer);

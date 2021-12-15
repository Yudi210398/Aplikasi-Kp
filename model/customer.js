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

  ukuran: {
    baju: [
      { panjangBadan: String },
      { panjangLenganPanjang: String },
      { panjangLenganPendek: String },
      { pundak: String },
      { lingkarKetiak: String },
      { lingkarUjungTangan: String },
      { lingkarAtas: String },
      { dada: [{ depan: String }, { belakang: String }] },
      { atas: [{ depan: String }, { belakang: String }] },
      { perut: [{ depan: String }, { belakang: String }] },
      { pinggul: [{ depan: String }, { belakang: String }] },
      { lingkarDada: String },
      { lingkarPerut: String },
      { lingkarPinggul: String },
    ],
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

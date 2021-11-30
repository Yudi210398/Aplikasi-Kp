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
  },
  alamat: {
    type: String,
    default: `Masih tinggal diBumi`,
  },
});

export default mongoose.model("Customers", Customer);

import mongoose from "mongoose";
const Schema = mongoose.Schema;
// this.ukuran.baju[0]?.dada.push({
//   dadaDepan: data.dadaDepan,
//   dadaBelakang: data.dadaBelakang,
// });

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
      {
        panjangBadans: String,
        lenganPanjang: String,
        lenganPendek: String,
        pundak: String,
        lingkarKetiak: String,
        lingkarUjungTangan: String,
        lenganAtas: String,
        lenganTengah: String,
        lenganTengah: String,
        marset: String,
        leher: String,
        dada: [{ dadaDepan: String, dadaBelakang: String }],
        atas: [{ atasDepan: String, atasBelakang: String }],
        perut: [{ perutDepan: String, perutBelakang: String }],
        pinggul: [{ pinggulDepan: String, pinggulBelakang: String }],
        lingkarDada: String,
        lingkarPerut: String,
        lingkarPinggul: String,
      },
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

Customer.methods.tambahUkurans = function (data) {
  if (this.ukuran.baju.length > 0) this.ukuran.baju.shift();

  this.ukuran.baju.push({
    panjangBadans: data.panjangBadans.trim(),
    lenganPanjang: data.lenganPanjang,
    lenganPendek: data.lenganPendek,
    pundak: data.pundak,
    lingkarKetiak: data.lingkarKetiak,
    lingkarUjungTangan: data.lingkarUjungTangan,
    lenganAtas: data.lenganAtas,
    lenganTengah: data.lenganTengah,
    marset: data.marset,
    leher: data.leher,
    lingkarDada: data.lingkarDada,
    lingkarPerut: data.lingkarPerut,
    lingkarPinggul: data.lingkarPinggul,
  });

  this.ukuran.baju[0]?.dada.push({
    dadaDepan: data.dadaDepan,
    dadaBelakang: data.dadaBelakang,
  });

  this.ukuran.baju[0]?.atas.push({
    atasDepan: data.atasDepan,
    atasBelakang: data.atasBelakang,
  });

  this.ukuran.baju[0]?.perut.push({
    perutDepan: data.perutDepan,
    perutBelakang: data.perutBelakang,
  });

  this.ukuran.baju[0]?.pinggul.push({
    pinggulDepan: data.pinggulDepan,
    pinggulBelakang: data.pinggulBelakang,
  });

  const datas = {
    baju: this.ukuran.baju,
  };
  this.ukuran = datas;

  return this.save();

  // const datas = {
  //   baju: hasil,
  // };
  // this.ukuran = datas;
  // return this.save();
};

export default mongoose.model("Customers", Customer);

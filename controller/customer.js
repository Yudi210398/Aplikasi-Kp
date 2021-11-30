import Customer from "../model/customer.js";
export const dataPelanggan = async (req, res, next) => {
  try {
    let produk = await Customer.find();
    res.render("customer/pelanggan", {
      docTitle: "Data Pelanggan",
      produk,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const tambahData = (req, res, next) => {
  res.render("customer/tambahData", {
    docTitle: "Tambah Data",
  });
};

export const postTambahData = async (req, res, next) => {
  try {
    let produkss = await Customer.find();
    const no = produkss.length + 1;
    const namaCustomer = req.body.namaCustomer;
    const noTelp = req.body.noHP.trim();
    let alamat = req.body.alamatCustomer.trim();
    alamat === "" ? (alamat = "Masih tinggal di bumi") : alamat;
    let hasil = await new Customer({
      no,
      namaCustomer,
      noTelp,
      alamat,
    }).save();
    console.log(hasil);
    setTimeout(() => res.redirect("/customer/pelanggan"), 100);
  } catch (err) {
    req.session.pesan = true;
    console.log(err, `no telp sudah terdaftar`);
    res.redirect("/customer/tambah-data");
  }
};

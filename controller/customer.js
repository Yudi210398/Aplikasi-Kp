import Customer from "../model/customer.js";
export const dataPelanggan = async (req, res, next) => {
  try {
    let produk = await Customer.find();
    res.render("customer/pelanggan", {
      docTitle: "Data Pelanggan",
      produk,
      hapus: false,
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
    await new Customer({
      no,
      namaCustomer,
      noTelp,
      alamat,
    }).save();

    setTimeout(() => res.redirect("/customer/data-pelanggan"), 100);
  } catch (err) {
    req.session.pesan = true;
    console.log(err, `no telp sudah terdaftar`);
    res.redirect("/customer/tambah-data");
  }
};

export const hapusData = async (req, res, next) => {
  try {
    const dataDelete = req.query.delete;
    if (!dataDelete) return res.redirect("/customer/data-pelanggan");
    let idPelanggan = req.params.id;
    let produk = await Customer.findById(idPelanggan);
    produk = [produk];
    if (!produk) res.redirect("/customer/data-pelanggan");
    else
      res.render("customer/pelanggan", {
        docTitle: "Hapus Data",
        produk,
        hapus: true,
      });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const postHapusData = async (req, res, next) => {
  try {
    let id = req.body.id.trim();
    await Customer.findByIdAndRemove(id);
    let data = await Customer.find();

    for (let i = 0; i < data.length; i++) data[i].noUrut(i + 1);

    res.redirect("/customer/data-pelanggan");
  } catch (err) {
    console.log(`error`, err);
  }
};

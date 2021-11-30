import Customer from "../model/customer.js";
export const dataPelanggan = (req, res, next) => {
  Customer.find().then((produk) => {
    res.render("customer/pelanggan", {
      docTitle: "Data Pelanggan",
      produk,
    });
  });
};

export const tambahData = (req, res, next) => {
  res.render("customer/tambahData", {
    docTitle: "Tambah Data",
  });
};

export const postTambahData = async (req, res, next) => {
  Customer.find().then((produkss) => {
    const no = produkss.length + 1;
    const namaCustomer = req.body.namaCustomer;
    const noTelp = req.body.noHP;
    const alamat = req.body.alamatCustomer;
    new Customer({ no, namaCustomer, noTelp, alamat })
      .save()
      .then((result) => {
        req.barang = result;
        setTimeout(() => res.redirect("/customer/pelanggan"), 100);
      })
      .catch((err) => console.log(err));
  });
};

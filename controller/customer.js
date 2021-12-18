import Customer from "../model/customer.js";

export const tambahdatas = async function (awaits, resq, jabat) {
  let data = await awaits.find();
  const no = data.length + 1;
  const namaCustomer = resq.namaCustomer;
  const noTelp = resq.noHP.trim();
  let jabatan;

  if (jabat === true) jabatan = resq.jabatan.trim();

  let alamat = resq.alamatCustomer.trim();
  alamat === "" ? (alamat = "Masih tinggal di bumi") : alamat;
  return {
    no,
    namaCustomer,
    noTelp,
    alamat,
    jabatan,
  };
};

export const dataPelanggan = async (req, res, next) => {
  try {
    let produk = await Customer.find();

    res.render("customer/pelanggan", {
      docTitle: "Data Pelanggan",
      path: `/pelanggan`,
      produk,
      hapus: false,
      ukuran: false,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const tambahData = (req, res, next) => {
  res.render("customer/tambahData", {
    docTitle: "Tambah Data",
    editing: false,
    staff: false,
    path: `null`,
  });
};

export const postTambahData = async (req, res, next) => {
  try {
    await new Customer(await tambahdatas(Customer, req.body, false)).save();
    setTimeout(() => res.redirect("/customer/data-pelanggan"), 100);
  } catch (err) {
    req.session.pesan = true;
    res.redirect("/customer/tambah-data");
  }
};

export const ukuranData = async (req, res, next) => {
  try {
    const dataUkuran = req.params.id;
    let produk = await Customer.findById(dataUkuran);
    let option = req.body.hasil;
    if (!produk) res.redirect("/customer/data-pelanggan");
    else {
      res.render("customer/templateUkuran", {
        docTitle: `Ukuran Data`,
        path: null,
        produk,
        ukuran: true,
        option,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const ukuranAll = async (req, res, next) => {
  const query = req.query.hasil;
  let data = req.params.id;
  let produk = await Customer.findById(data);
  if (query === "celana")
    res.render("customer/ukuranCelana", {
      docTitle: `Edit Ukuran Celana`,
      produk,
      path: `Celana`,
    });
  else if (query === "baju") {
    return res.render("customer/ukuranBaju", {
      docTitle: `Edit Ukuran Baju`,
      produk,
      path: `Baju`,
    });
  } else if (query === "jas") {
    res.render("customer/ukuranJas", {
      docTitle: `Edit Ukuran Jas`,
      produk,
      path: `null`,
    });
  }
};

export const postUkuranBaju = async (req, res, next) => {
  try {
    let dataId = req.body.idBp.trim();
    let panjangBadan = req.body;
    const dataCustomer = await Customer.findById(dataId);
    await dataCustomer.tambahUkurans(panjangBadan);
    res.redirect(`/customer/ukuran/${dataId}/edit?hasil=baju`);
  } catch (err) {
    console.log(err);
  }
};

export const postHapusData = async (req, res, next) => {
  try {
    let id = req.body.id.trim();
    await Customer.findByIdAndRemove(id);
    let data = await Customer.find();

    for (let i = 0; i < data.length; i++) await data[i].noUrut(i + 1);

    res.redirect("/customer/data-pelanggan");
  } catch (err) {
    console.log(`error`, err);
  }
};

export const postEditData = async (req, res, next) => {
  try {
    let id = req.body.idP.trim();
    let nama = req.body.namaCustomer;
    let noTelp = req.body.noHP.trim();
    let alamatCustomer = req.body.alamatCustomer;
    alamatCustomer === ""
      ? (alamatCustomer = "Masih tinggal di bumi")
      : alamatCustomer;
    let dataP = await Customer.findById(id);
    let dataAll = await Customer.find();
    dataP.namaCustomer = nama;
    dataP.noTelp = noTelp;
    dataP.alamat = alamatCustomer;
    let hasil = dataAll.filter(
      (d) =>
        d._id.toString() !== dataP._id.toString() && d.noTelp === dataP.noTelp
    );
    if (hasil.length > 0) {
      req.session.pesan = true;
      res.redirect(`/customer/edit-data/${id}?edit=edit-data`);
    } else {
      await dataP.save();
      res.redirect(`data-pelanggan`);
    }
  } catch (err) {
    console.log(err, `error`);
  }
};

export const editData = async (req, res, next) => {
  try {
    const editData = req.query.edit;
    if (!editData) return res.redirect("/customer/data-pelanggan");
    let dataEdit = req.params.id;

    let dataP = await Customer.findById(dataEdit);
    if (!dataP) res.redirect("/customer/data-pelanggan");
    else {
      res.render("customer/tambahData", {
        docTitle: `Edit Data`,
        editing: true,
        staff: false,
        dataP,
        path: `null`,
      });
    }
  } catch (err) {
    console.log(err);
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
        staff: false,
        ukuran: false,
        path: null,
      });
  } catch (err) {
    console.log(`error`, err);
  }
};

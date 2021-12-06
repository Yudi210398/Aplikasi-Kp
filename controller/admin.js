import Customer from "../model/customer.js";
export const mainData = async (req, res, next) => {
  try {
    let data = await Customer.find();
    res.render("admin/dasboard", {
      docTitle: `Home Page`,
      data,
      path: `/dashbord`,
    });
  } catch (err) {
    console.log(err, `Error`);
  }
};

export const dataKaryawan = (req, res, next) => {
  res.render("admin/karyawan", {
    docTitle: "Data Karyawan",
    path: `/karyawan`,
  });
};

export const tambahDataKaryawan = (req, res, next) => {
  res.render("customer/tambahData", {
    docTitle: "Tambah Data Karyawan",
    path: `null`,
    editing: false,
    staff: true,
  });
};

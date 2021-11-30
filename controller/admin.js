export const mainData = (req, res, next) => {
  res.render("admin/dasboard", {
    docTitle: `Home Page`,
  });
};

export const dataKaryawan = (req, res, next) => {
  res.render("admin/karyawan", {
    docTitle: "Data Karyawan",
  });
};

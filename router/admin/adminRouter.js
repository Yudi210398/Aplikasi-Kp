import express from "express";
import * as controller from "../../controller/admin.js";

const routerAdmin = express.Router();

routerAdmin.get("/", controller.mainData);
routerAdmin.get("/karyawan", controller.dataKaryawan);
routerAdmin.get("/tambah-data-karyawan", controller.tambahDataKaryawan);
routerAdmin.get("/hapus-karyawan/:id", controller.hapusDataKaryawan);
routerAdmin.post("/data-tambah-karyawan", controller.postTambahKaryawan);

routerAdmin.post("/hapus-data-karyawan", controller.postHapusKaryawan);

export default routerAdmin;

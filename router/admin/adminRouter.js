import express from "express";
import * as controller from "../../controller/admin.js";

const routerAdmin = express.Router();

routerAdmin.get("/", controller.mainData);
routerAdmin.get("/karyawan", controller.dataKaryawan);
routerAdmin.get("/tambah-data-karyawan", controller.tambahDataKaryawan);

export default routerAdmin;

import express from "express";
import * as controller from "../../controller/admin.js";

const routerAdmin = express.Router();

routerAdmin.get("/", controller.mainData);
routerAdmin.get("/karyawan", controller.dataKaryawan);

export default routerAdmin;

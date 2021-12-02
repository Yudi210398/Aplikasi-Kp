import express from "express";
import * as controller from "../../controller/customer.js";

const routerCustomer = express.Router();

routerCustomer.get("/data-pelanggan", controller.dataPelanggan);
routerCustomer.get("/tambah-data", controller.tambahData);
routerCustomer.get("/hapus-data/:id", controller.hapusData);
routerCustomer.post("/tambahdata", controller.postTambahData);
routerCustomer.post("/hapus-data-fix", controller.postHapusData);

export default routerCustomer;

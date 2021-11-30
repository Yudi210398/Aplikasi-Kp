import express from "express";
import * as controller from "../../controller/customer.js";

const routerCustomer = express.Router();

routerCustomer.get("/pelanggan", controller.dataPelanggan);
routerCustomer.get("/tambah-data", controller.tambahData);
routerCustomer.post("/tambahdata", controller.postTambahData);

export default routerCustomer;

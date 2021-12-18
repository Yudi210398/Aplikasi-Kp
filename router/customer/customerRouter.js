import express from "express";
import * as controller from "../../controller/customer.js";

const routerCustomer = express.Router();

routerCustomer.get("/data-pelanggan", controller.dataPelanggan);
routerCustomer.get("/tambah-data", controller.tambahData);
routerCustomer.get("/hapus-data/:id", controller.hapusData);
routerCustomer.get("/edit-data/:id", controller.editData);
routerCustomer.get("/ukuran/:id", controller.ukuranData);
routerCustomer.get("/ukuran/:id/edit", controller.ukuranAll);

routerCustomer.post("/ukuranBaju", controller.postUkuranBaju);
routerCustomer.post("/tambahdata", controller.postTambahData);
routerCustomer.post("/hapus-data-fix", controller.postHapusData);
routerCustomer.post("/edit-data", controller.postEditData);

export default routerCustomer;

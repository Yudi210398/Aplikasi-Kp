import express from "express";
import routerAdmin from "./router/admin/adminRouter.js";
import routerCustomer from "./router/customer/customerRouter.js";

import path from "path";
import User from "./model/user.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const port = 8000;
const __dirname = path.resolve();
const urlDatabase = `mongodb+srv://runatyudi:kawasanrokok1998@cluster0.oaqmd.mongodb.net/appKP?retryWrites=true&w=majority`;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
app.use(routerAdmin);
app.use("/customer", routerCustomer);

mongoose.connect(urlDatabase).then((result) => {
  app.listen(port);
  User.findOne().then((data) => {
    if (!data) {
      const user = new User({
        nama: `Yudi Runat Masneno`,
        email: `yudi.berland@gmail.com`,
      });
      user.save();
    }
  });
});

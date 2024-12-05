import express from "express";                         //model->conrtoller->routes->index.js
import {createUser,getAll,getOne,update,deleteUser} from "../controllers/userController.js";


const route=express.Router();

route.post("/create",createUser);
route.get("/getAll",getAll);
route.get("/getone/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);

export default route;
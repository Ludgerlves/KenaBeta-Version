import { Router } from "express";
import { UserController } from "../Controller/UserController";
import { UserService } from "../Service/User.service";
import { MongoRepository } from "../models/DataBase/MongoRepository";

const router = Router();
const repository=new MongoRepository;
const service = new UserService(repository);
const controller=  new UserController(service);
router.post("/api/cadastrar", (req, res)=> controller.Cadastrar(req, res));

export default router
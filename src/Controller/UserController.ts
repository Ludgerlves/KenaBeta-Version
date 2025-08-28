import { Request, Response } from "express";
import { CadastroUsuarioService } from "../Service/User.service";
import { Mentor, Investidor, Empreendedor } from "../models/entities/User";
import { UserTipos } from "../models/enum/UserEnum";
import { error } from "console";

export class UserController{
    constructor(private CadastroService: CadastroUsuarioService){}
    async Cadastrar(req: Request, res: Response){
        try {
            let user;
            switch (req.body.tipo) {
                case UserTipos.MENTOR:
                    user=new Mentor(req.body);
                    break;
                    case UserTipos.INVESTIDOR:
                        user = new Investidor(req.body);
                        break;
                        case UserTipos.EMPREENDEDOR:
                            user= new Empreendedor(req.body);
                            break
            
                default:
                    throw new Error('Tipo de usuario nao existente')
            }
            const salvo = await  this.CadastroService.Cadastrar(user);
            res.status(201).json(salvo);
        } catch (error: any) {
            res.status(400).json({error: error.message});
            
        }
    }    

}
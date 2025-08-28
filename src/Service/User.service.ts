
import { UserBase } from "../models/entities/User";
import { UserRepository } from "../repository/UserRepository";
 
export class CadastroUsuarioService {
    constructor(private userRepo: UserRepository){}
    async Cadastrar(user: UserBase){
        const existente = await this.userRepo.findByEmail(user.email);
        if(existente) throw new Error('Usuario existente')
            const salvo =await this.userRepo.create(user)
            return salvo;
    }
}
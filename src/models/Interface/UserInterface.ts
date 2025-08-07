import { UserTipos } from "../enum/UserEnum";
export interface UserBaseInterface{
     nome: string,
     email: string,
    senha: string,
    telefone: string,
     provincia: string,
     biografia: string,
     tipo: UserTipos
}

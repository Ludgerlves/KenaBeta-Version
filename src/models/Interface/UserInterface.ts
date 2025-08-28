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
export interface InvestidorInterface extends UserBaseInterface{
    areasInteresse: string[];
  tipoProjecto: string[];
  oportunidades: string[];

}
export interface MentorInterface extends UserBaseInterface{
    experiencia: string;
    areaMentoria: string[];
}
export interface EmpreendedorInterface extends UserBaseInterface{
    nomeProjecto: string;
    maturidade: string[];
    setorAtuacao: string[];
    pitch: string;
}
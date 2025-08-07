import { UserBaseInterface } from "./UserInterface";

export interface InvestidorInterface extends UserBaseInterface{
    areasInteresse: string[];
  tipoProjecto: string[];
  oportunidades: string[];

}
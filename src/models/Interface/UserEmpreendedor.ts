import { UserBaseInterface } from "./UserInterface";

export interface EmpreendedorInterface extends UserBaseInterface{
    nomeProjecto: string;
    maturidade: string[];
    setorAtuacao: string[];
    pitch: string;
}
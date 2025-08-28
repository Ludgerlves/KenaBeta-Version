import {Schema, model, Document} from "mongoose";
import { EmpreendedorInterface, InvestidorInterface, MentorInterface, UserBaseInterface } from "../Interface/UserInterface";
import { UserTipos } from "../enum/UserEnum";
export interface IUserBaseDocument extends UserBaseInterface, Document{}
export interface InvestidorIntDocument extends InvestidorInterface, Document{}
export interface MentorIntDocument extends MentorInterface, Document{}
export interface EmpreendedorIntDocument extends EmpreendedorInterface, Document{}
const UsuarioSchema = new Schema<IUserBaseDocument>({
    nome:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    telefone:{type: String, required: true, unique: true},
    senha:{type: String, required: true},
    provincia:{type: String, required: true},
    biografia:{type: String, required: true},
    tipo:{type: String, required: true, enum:Object.values(UserTipos)},
},
{discriminatorKey: "tipo", collection: "Usuario"}
);
export const UserModel = model<IUserBaseDocument>("Usuario", UsuarioSchema);

//Investidor Schema 

const InvestidorSchema= new Schema<InvestidorIntDocument>({
    areasInteresse:{type: [String], required: true},
    tipoProjecto:{type: [String], required: true},
    oportunidades:{type:[String], required: true}
})
export const InvestidorModel = UserModel.discriminator<InvestidorIntDocument>(UserTipos.INVESTIDOR, InvestidorSchema);

//Mentor Schema

const MentorSchema= new Schema<MentorIntDocument>({
    experiencia: {type: String, required: true},
    areaMentoria:{type: [String], required: true},
})
export const MentorModel= UserModel.discriminator<MentorIntDocument>(UserTipos.MENTOR, MentorSchema)

//Empreendedor Schema
const EmpreendedorSchema= new Schema<EmpreendedorIntDocument>({
    nomeProjecto:{type: String, required: true},
    maturidade: {type: [String], required: true},
    setorAtuacao: {type: [String], required: true},
    pitch:{type: String, required: true}
});
export const EmpreendedorModel = UserModel.discriminator<EmpreendedorIntDocument>(UserTipos.EMPREENDEDOR, EmpreendedorSchema);
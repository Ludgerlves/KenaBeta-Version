import { UserTipos } from "../enum/UserEnum";
import {
  UserBaseInterface,
  MentorInterface,
  InvestidorInterface,
  EmpreendedorInterface,
} from "../Interface/UserInterface";

export abstract class UserBase {
  public nome: string;
  public email: string;
  public senha: string;
  public telefone: string;
  public provincia: string;
  public biografia: string;
  public readonly tipo: UserTipos;

  constructor(props: UserBaseInterface) {
    this.nome = props.nome;
    this.email = props.email;
    this.senha = props.senha;
    this.telefone = props.telefone;
    this.provincia = props.provincia;
    this.biografia = props.biografia ?? "";
    this.tipo = props.tipo;
  }
}

export class Mentor extends UserBase {
  public experiencia: string;
  public areaMentoria: string[];
  constructor(props: MentorInterface) {
    super({ ...props, tipo: UserTipos.MENTOR });
    this.experiencia = props.experiencia;
    this.areaMentoria = props.areaMentoria;
  }
}

export class Investidor extends UserBase {
  public areasInteresse: string[];
  public tipoProjecto: string[];
  public oportunidades: string[];
  constructor(props: InvestidorInterface) {
    super({ ...props, tipo: UserTipos.INVESTIDOR });
    this.areasInteresse = props.areasInteresse;
    this.tipoProjecto = props.tipoProjecto;
    this.oportunidades = props.oportunidades;
  }
}
export class Empreendedor extends UserBase {
  public nomeProjecto: string;
  public maturidade: string[];
  public setorAtuacao: string[];
  public pitch: string;
  constructor(props: EmpreendedorInterface) {
    super({ ...props, tipo: UserTipos.EMPREENDEDOR });
    this.nomeProjecto = props.nomeProjecto;
    this.maturidade = props.maturidade;
    this.setorAtuacao = props.setorAtuacao;
    this.pitch = props.pitch;
  }
}
import { UserBaseInterface } from "../Interface/UserInterface";
import { UserModel,MentorModel, 
  InvestidorModel, 
  EmpreendedorModel } from "./Schema";
import { UserRepository } from "../../repository/UserRepository";
import { UserTipos } from "../enum/UserEnum";

export class MongoRepository implements UserRepository{
    async create(user: UserBaseInterface): Promise<UserBaseInterface> {
        let newUser;

    switch (user.tipo) {
      case UserTipos.MENTOR:
        newUser = new MentorModel(user);
        break;
      case UserTipos.INVESTIDOR:
        newUser = new InvestidorModel(user);
        break;
      case UserTipos.EMPREENDEDOR:
        newUser = new EmpreendedorModel(user);
        break;
      default:
        throw new Error("Tipo de usuário inválido");
    }

        newUser= new UserModel(user);
        await newUser.save();
        return newUser.toObject();
    }
    async findAll(): Promise<UserBaseInterface[]> {
        return UserModel.find().lean();
    }

    async findByEmail(email: string): Promise<UserBaseInterface | null> {
        return UserModel.findOne({email}).lean();
    }

  async findByFilters(filtro: { areasInteresse?: string[] | null; tipoProjecto?: string[] | null; maturidade?: string[] | null; experiencia?: string | null; setorAtuacao?: string[] | null; }): Promise<UserBaseInterface[]> {
      return UserModel.find(filtro).lean();
  }

    async findByname(name: String): Promise<UserBaseInterface | null> {
        return UserModel.findOne({nome: name}).lean();
    }
}
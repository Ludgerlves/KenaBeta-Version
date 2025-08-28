import { UserBaseInterface } from "../models/Interface/UserInterface";

export interface UserRepository{
    create(user:UserBaseInterface):Promise<UserBaseInterface>;
    findAll(): Promise<UserBaseInterface[]>;
    findByEmail(email: string): Promise <UserBaseInterface | null >
    findByname(name: string): Promise<UserBaseInterface | null>;
    findByFilters(filtro: {
        areasInteresse?: string[] | null;
        tipoProjecto?:string[] | null;
        maturidade?: string[] | null;
        experiencia?: string | null;
        setorAtuacao?: string[] | null;
    }): Promise<UserBaseInterface[]>
}
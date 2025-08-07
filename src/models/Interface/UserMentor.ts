import { UserBaseInterface } from "./UserInterface";

export interface MentorInterface extends UserBaseInterface{
    experiencia: string[];
    areaMentoria: string[];
}
import { UserModel } from "../classes/User.Model";

export interface LoginResponse {
    data : UserModel;
    message : string;
    token : string;
}
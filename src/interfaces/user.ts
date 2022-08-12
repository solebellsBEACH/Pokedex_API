export interface IUser{
    name: string;
    email: string;
    password: string;
}
export interface IAuthenticateUser{
    email: string;
    password: string;
}

export interface IGetUser{
    _id: string;
    name: string;
    email: string;
}
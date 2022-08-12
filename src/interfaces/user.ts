export interface IUser {
    name: string;
    email: string;
    password: string;
    // favorites: IFavoriteUser[];
    // productCart: IProductCartUser[];
}
export interface IAuthenticateUser {
    email: string;
    password: string;
}

export interface IGetUser {
    _id: string;
    name: string;
    email: string;
}

export interface IProductCartUser {
    _id: string;
    name: string;
    idProduct: string;
    url: string;
    image: string;
}

export interface IFavoriteUser {
    _id: string;
    name: string;
    idProduct: string;
    url: string;
    image: string;
}
import { IAuthenticateUser, IUser } from "../interfaces/user"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { Response } from "express";
const User = require('../models/User')

module.exports = {
    async create(data: IUser) {
        if (await User.findOne({ email: data.email })) {
            return { success: false, message: 'Usuário existente', status: 400 }
        }
        const userInstance = new User(data)
        const response = await userInstance.save();
        response.password = undefined
        return { data: response, success: true, message: 'Usuário criado com sucesso', status: 202 }
    },
    async authenticate(data: IAuthenticateUser) {
        const { email, password } = data;

        const { SECRET_KEY } = process.env

        if (SECRET_KEY === undefined) {
            return
        }

        const user = await User.findOne({ email }).select('+password')

        if (!user) return { success: false, message: 'Usuário não encontrado', status: 400 };
        if (!await bcrypt.compare(password, user.password)) return { success: false, message: 'Senha incorreta', status: 400 };
        user.password = undefined
        const token = jwt.sign({ id: user.id }, SECRET_KEY, {
            expiresIn: 8640000
        });

        return { success: true, message: '', status: 200, data: user, token };
    },
    async getUser(userId: number) {
        const user = undefined;
        try {
            const user = await User.findOne({ _id: userId })
            user.password = undefined
            return { success: true, message: 'Usuário encontrado com sucesso', status: 200, data: user }
        } catch (error) {
            return { success: false, message: 'Usuário não encontrada', status: 400, data: user }
        }
    },
    async addProduct(userId: string, pokemonBody: { name: string, front_default: string, _id: string }, res: Response) {

        try {
            const user = await User.findOne({ _id: userId })

            user.cart.map((item: { name: string }) => {
                if (item.name === pokemonBody.name) {
                    res.status(402).send({ success: false, message: 'Esse pokemon já está em seu carrinho', status: 402, data: null })
                }
            })

            let cartArray = user.cart
            cartArray.push(pokemonBody)

            user.cart = cartArray

            user.save()

            return { success: true, message: 'Pokemon adicionado com sucesso', status: 200, data: user }
        } catch (error) {
            console.log(error)
            return { success: false, message: 'Erro ao adicionar Pokemon no carrinho', status: 400, data: error }
        }


    },
    async deleteProduct(id: string, userId: string, res: Response) {
        try {
            const user = await User.findOne({ _id: userId })
            let indexOf: any | number = null
            user.cart.map((e: { _id: string }, index: number) => {
                if (e._id == id && indexOf == null) {
                    indexOf = index
                }
            })
            if (indexOf == null) {
                return { success: false, message: 'Pokemon não encontrado nos registros do usuário', status: 400, data: null }
            }

            const arrayProducts = user.cart
            arrayProducts.splice(indexOf, 1)


            return { success: true, message: 'Pokemon deletado com sucesso', status: 200, data: arrayProducts }
        } catch (error) {
            return { success: false, message: 'Erro ao adicionar Pokemon no carrinho', status: 400, data: error }
        }
    }
}

import { IAuthenticateUser, IUser } from "../interfaces/user"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

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
            expiresIn: 86400
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
    }
}
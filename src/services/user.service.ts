import { IAuthenticateUser, IUser } from "../interfaces/user"
import bcrypt from 'bcrypt';
const authConfig =  require('../config/auth')
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
        const user = await User.findOne({ email }).select('+password')

        if (!user) return { success: false, message: 'Usuário não encontrado', status: 400 };
        if (!await bcrypt.compare(password, user.password)) return { success: false, message: 'Senha incorreta', status: 400 };
        user.password = undefined
        const token = jwt.sign({id: user.id}, authConfig.secret,{
            expiresIn:86400
        });

        return { success: true, message: '', status: 200, data:user, token};
    }
}

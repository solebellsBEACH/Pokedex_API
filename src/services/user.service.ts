import { IUser } from "../interfaces/user"

const UserModel = require('../models/User')

module.exports = {
    async create(user: IUser) {
        if (await UserModel.findOne({ email: user.email })) {
            return { success: false, message: 'Usuário existente', status: 400 }
        }
        const userInstance = new UserModel(user)
        const response = await userInstance.save();
        return { data: response, success: true, message: 'Usuário criado com sucesso', status: 202 }
    }
}

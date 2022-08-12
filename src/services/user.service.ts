import { IUser } from "../interfaces/user"

const UserModel = require('../models/User')

module.exports = {
    async create(user: IUser) {
        const userInstance = new UserModel(user)
        const response = await userInstance.save()
        return { response }
    }
}

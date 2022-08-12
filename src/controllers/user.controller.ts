import { IUser } from "../interfaces/user";
import { Request, Response } from 'express';
const UserServices = require('../services/user.service')

module.exports = {

    async create(req: Request, res: Response) {
        try {
            const { body } = req;
            body as IUser
            const response = await UserServices.create(body)
            res.status(response.status).send(response);
        } catch (error: any) {
            console.log(error);
            res.status(500).send({ message: error });
        }
    }

}
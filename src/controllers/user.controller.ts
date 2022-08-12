import { IAuthenticateUser, IUser } from "../interfaces/user";
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
    },
    async authenticate(req: Request, res: Response) {
        try {
            const { body } = req;
            body as IAuthenticateUser
            const response = await UserServices.authenticate(body)
            res.status(response.status).send(response);
        } catch (error: any) {
            console.log(error);
            res.status(500).send({ message: error });
        }
    },
    async getUser(req: Request & { userId: string }, res: Response, auth: any) {
        console.log(req.userId)
        try {
            res.send()
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: error });
        }

    }


}
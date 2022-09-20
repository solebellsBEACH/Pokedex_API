import { IAuthenticateUser, IUser } from "../interfaces/user";
import { Request, Response } from 'express';
import { validationResult } from "express-validator";
import { UserServices } from "../services/user.service";

export const UserControllers= {

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
        try {
            const { userId } = req;
            const response = await UserServices.getUser(userId)
            res.status(response.status).send(response);
        } catch (error) {
            res.status(500).send({ message: error });
        }
    },
    async addProduct(req: Request & { userId: string }, res: Response) {

        const validationError = validationResult(req)
        if (validationError.array().length > 0) {
            res.status(502).send({ message: `Campo ${validationError.array()[0].param} é inválido` });
        }

        try {
            const { userId } = req;
            const response = await UserServices.addProduct(userId, req.body, res)
            res.status(response.status).send(response);
        } catch (error) {
            res.status(500).send({ message: error });
        }
    },
    async deleteProduct(req: Request & { userId: string }, res: Response) {
        try {
            const { userId } = req;
            const { id } = req.params
            const response = await UserServices.deleteProduct(id, userId, res)
            res.status(response.status).send(response);
        } catch (error) {
            res.status(500).send({ message: error });
        }
    }
    ,
    async getProducts(req: Request & { userId: string }, res: Response) {
        try {
            const { userId } = req
            const response = await UserServices.getProducts(userId)
            res.status(response.status).send(response);
        } catch (error) {
            res.status(500).send({ message: error });
        }
    }



}
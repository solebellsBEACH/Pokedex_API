const jwt = require('jsonwebtoken');
import { Request, Response, } from 'express';

module.exports = (req: Request & { userId: number | string }, res: Response, next: any) => {

    const authHeader = req.headers.authorization;

    const { SECRET_KEY } = process.env;
    if (SECRET_KEY === undefined || SECRET_KEY === null) {
        return res.status(500).send({ error: 'Not ENV variables' })
    }

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' })
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).send({ error: 'Invalid token' })
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token malfatted' })
    }

    jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
        if (err) return res.status(401).send({ error: err })
        req.userId = decoded.id
    })

    return next()
}

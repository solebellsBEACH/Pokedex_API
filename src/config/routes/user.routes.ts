const express = require('express');
const router = express.Router();
import { Request, Response } from 'express';


router.post('/create', (req: Request, res: Response) => {
    res.send({ message: 'TESTE DAS ROTAS DE LOGIN' })
})

module.exports = router;
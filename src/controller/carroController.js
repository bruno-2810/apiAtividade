import * as db from '../repository/carroRepository.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/carro', async (req, resp) => {
    try {
        let registros = db.consultarCarro();
        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/carro', async (req, resp) => {
    try {
        let carro = req.body
        let id = await db.inserirCarro(carro);
        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
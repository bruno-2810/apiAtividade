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

endpoints.put('/carro/:id' , async (req,resp) =>{
    try {
        let id = req.params.id;
        let carro = req.body;

        let linhasAfetadas = await db.alterarCarro(id , carro)

        if(linhasAfetadas >=1 ){
            resp.send()
        } 
        else {
            resp.status(404).send({
                erro: 'nenhum registro encontrado!'
            })
        }
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.massage
        })
    }
})


endpoints.delete('/carro/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let linhasAfetadas = await db.removerCarro(id);

        if(linhasAfetadas >= 1 ){
            resp.send()
        } 
        else {
            resp.status(404).send({
                erro: 'nenhum registro encontrado'
            })
        }

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.massage
        })        
    }
})



export default endpoints;
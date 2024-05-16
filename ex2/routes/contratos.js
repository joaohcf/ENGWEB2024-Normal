import axios from "axios";
import express from "express";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const contratos = await axios('http://localhost:16000/contratos');

        if (contratos.status === 404) return res.status(404).end();

        res.render('contratos.pug', {
            contratos: contratos.data,
        });
    } catch (e) {
        res.status(500).end();
    }
});

router.get('/:id', async (req, res) => {
    try {
        const contrato = await axios('http://localhost:16000/contratos/' + req.params.id);

        if (contrato.status === 404) return res.status(404).end();

        res.render('contrato.pug', {
            contrato: contrato.data,
        });
    } catch (e) {
        res.status(500).end();
    }
});

router.get('/entidades/:id', async (req, res) => {
    try {
        const contrato = await axios('http://localhost:16000/entidades/' + req.params.id);

        if (contrato.status === 404) return res.status(404).end();

        res.render('contrato.pug', {
            contrato: contrato.data,
        });
    } catch (e) {
        res.status(500).end();
    }
});


export default router;
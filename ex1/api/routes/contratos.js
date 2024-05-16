import express from 'express'
import contratos from '../controllers/contratos.js'

const router = express.Router();

router.get('/', (req, res) => {
    contratos.read_all(req.query)
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp(error));
})

router.get('/:id', (req, res) => {
    contratos.read(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp(error));
})

router.get('/entidades', (req, res) => {
    contratos.read_all_entidades()
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp(error));
})

router.get('/tipos', (req, res) => {
    contratos.read_all_tipos()
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp(error));
})

router.post('/', (req, res) => {
    contratos.read_all()
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp(error));
})

router.delete('/', (req, res) => {
    contratos.read_all()
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp(error));
})

router.put('/', (req, res) => {
    contratos.read_all()
    .then(data => res.jsonp(data))
    .catch(error => res.jsonp(error));
})

export default router;
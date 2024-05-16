import express from 'express';
import mongoose from 'mongoose';

import contratosRouter from './routes/contratos.js';

const mongodb_connection = 'mongodb://127.0.0.1/contratos';
mongoose.connect(mongodb_connection);

const database = mongoose.connection;
database.on("error", console.error.bind(console, "Erro de conexão ao MongoDB"));
database.once("open", () => {
    console.log("Conexão ao MongoDB realizada com sucesso");
});
const app = express();
const port = 16000;

app.use(express.json());

app.use('/contratos', contratosRouter);

app.listen(port, () => {
    console.log('Backend API Server listening port ' + port);
})
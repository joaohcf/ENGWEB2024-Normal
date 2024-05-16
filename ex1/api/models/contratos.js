import mongoose from "mongoose";

const contratoSchema = new mongoose.Schema({
    idcontrato: {type: String, required: true},
    tipoprocedimento: {type: String, required: true},
    objectoContrato: {type: String, required: true},
    dataPublicacao: {type: String, required: true},
    dataCelebracaoContrato: {type: String, required: true},
    precoContratual: {type: String, required: true},
    prazoExecucao: {type: String, required: true},
    NIPC_entidade_comunicante: {type: String, required: true},
    entidade_comunicante: {type: String, required: true},
    fundamentacao: {type: String, required: true},
}, {versionKey: false})

export default mongoose.model('contratos', contratoSchema)
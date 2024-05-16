import contratos from '../models/contratos.js'

function read_all(query){
    return contratos.find(query).exec();
}

function read_all_entidades(){
    return contratos.distinct("entidade_comunicante").sort().exec();
}

function read_all_tipos(){
    return contratos.distinct("tipoprocedimento").sort().exec();
}

function read(id){
    return contratos.findOne({idcontrato: id}).exec();
}

function create(data){
    return contratos.insertMany([data]).exec();
}

function update(id, data){
    return contratos.findOneAndUpdate({idcontrato: id}, data).exec();
}

function remove(){
    return contratos.findOneAndDelete({idcontrato: id}).exec();
}

export default {read_all, read_all_entidades, read_all_tipos, read, create, update, remove}
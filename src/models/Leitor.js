// the model allows us to map the tables from the db.
const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

// this model maps the responsaveis table into leitores
const Leitor = connection.define('leitores', {
    nome: {
        allowNull: false,
        type: DataTypes.STRING(150)
    },
    cpf: {
        allowNull: false,
        type: DataTypes.STRING(14)
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    paranoid: true //  Habilita soft delete
});

module.exports = Leitor;
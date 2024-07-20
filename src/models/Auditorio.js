// the model allows us to map the tables from the db.
const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

// this model maps the responsaveis table into Instrumento
const Instrumento = connection.define('auditorios', {
    nome: {
        allowNull: false,
        type: DataTypes.STRING(150)
    },
    descricao: {
        allowNull: true,
        type: DataTypes.TEXT
    },
    qtd_max: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    paranoid: true //  Habilita soft delete
});

module.exports = Instrumento;
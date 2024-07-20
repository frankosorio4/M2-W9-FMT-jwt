// the model allows us to map the tables from the db.
const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

// this model maps the responsaveis table into Instrumento
const Instrumento = connection.define('instrumentos', {
    nome: {
        allowNull: false,
        type: DataTypes.STRING(150)
    },
    tipo_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    situacao: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    paranoid: true //  Habilita soft delete
});

module.exports = Instrumento;
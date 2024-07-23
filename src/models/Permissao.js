// the model allows us to map the tables from the db.
const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

// this model maps the responsaveis table into Permicao
const Permicao = connection.define('permissoes', {
    descricao: {
        allowNull: false,
        type: DataTypes.STRING(150)
    }
}, {
    paranoid: true //  Habilita soft delete
});

module.exports = Permicao;
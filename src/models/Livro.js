// the model allows us to map the tables from the db.
const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

// this model maps the responsaveis table into Livros
const Livros = connection.define('livros', {
    nome: {
        allowNull: false,
        type: DataTypes.STRING(150)
    },
    qtd_paginas: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    autor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    paranoid: true //  Habilita soft delete
});

module.exports = Livros;
const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const {hashSync} = require('bcryptjs');
const UsuarioPermissao = require("./UsuarioPermissao");
const Permissao = require('./Permissao')

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    password_hash: {
        type: DataTypes.STRING
    }
})

// hooks
//PARA EL RELACIONAMIENTO PERTENECE A MUCHOS SE COLOCA EN UNO DE LOS 3 MODELOS(usuarios, permissoes, UsuariosPermissoes), EN ESTE CASO AQUI 
Usuario.belongsToMany(Permissao, { 
    through: UsuarioPermissao,//model
    foreignKey: 'usuarioId',
    otherKey: 'permissaoId'
});

// Permissao.belongsToMany(Usuario, { 
//     through: UsuarioPermissoes,
//     foreignKey: 'permissaoId',
//     otherKey: 'usuarioId'
// });

// UsuarioPermissoes.hasMany(Usuario, {foreignKey: 'id'})

//para hash la contrasena, esta hash sinc es sincrona
Usuario.beforeSave((usuario) =>{
    usuario.password_hash = hashSync(usuario.password_hash, 10)
    return usuario
})

module.exports = Usuario
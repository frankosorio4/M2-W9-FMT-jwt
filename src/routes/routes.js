const { Router } = require('express')

const LivrosController = require('../controllers/LivrosController')
const LeitoresController = require('../controllers/LeitoresController')
const InstrumentosController = require('../controllers/InstrumentosController')
const AuditoriosController = require('../controllers/AuditoriosController')
const UsuariosController = require('../controllers/UsuariosController')
const LoginController = require('../controllers/LoginController')
const validaToken = require('../middleware/validaToken')
const PermissoesController = require('../controllers/PermissoesController')
const verificarPermissao = require('../middleware/verificaPermissao')

const routes = new Router()

/* coloque  suas rotas aqui */

routes.post('/usuarios', UsuariosController.criarConta)
routes.post('/login', LoginController.login)

//another form to use validaToken
//routes.use(validaToken)

routes.post('/livros', validaToken, verificarPermissao(['criar']), LivrosController.criar);
routes.get('/livros', validaToken, verificarPermissao(['listar']), LivrosController.listaTodos);
routes.get('/livros/:id', validaToken, verificarPermissao(['listar']), LivrosController.listarUm);
routes.put('/livros/:id', validaToken, verificarPermissao(['atualizar']),LivrosController.atualizar);
routes.delete('/livros/:id', validaToken, verificarPermissao(['deletar']), LivrosController.deletar);

routes.post('/leitores', validaToken, verificarPermissao(['criar']), LeitoresController.criar);
routes.get('/leitores', validaToken, verificarPermissao(['listar']), LeitoresController.listaTodos);
routes.get('/leitores/:id', validaToken, verificarPermissao(['listar']), LeitoresController.listarUm);
routes.put('/leitores/:id', validaToken, verificarPermissao(['atualizar']), LeitoresController.atualizar);
routes.delete('/leitores/:id', validaToken, verificarPermissao(['deletar']), LeitoresController.deletar);

routes.post('/instrumentos', validaToken,verificarPermissao(['criar']),  InstrumentosController.criar);
routes.get('/instrumentos', validaToken, verificarPermissao(['listar']), InstrumentosController.listaTodos);
routes.get('/instrumentos/:id', validaToken, verificarPermissao(['listar']), InstrumentosController.listarUm);
routes.put('/instrumentos/:id', validaToken, verificarPermissao(['atualizar']), InstrumentosController.atualizar);
routes.delete('/instrumentos/:id', validaToken, InstrumentosController.deletar);

routes.post('/auditorios', validaToken,verificarPermissao(['criar']), AuditoriosController.criar);
routes.get('/auditorios', validaToken, verificarPermissao(['listar']), AuditoriosController.listaTodos);
routes.get('/auditorios/:id', validaToken, verificarPermissao(['listar']), AuditoriosController.listarUm);
routes.put('/auditorios/:id', validaToken, verificarPermissao(['atualizar']), AuditoriosController.atualizar);
routes.delete('/auditorios/:id', validaToken, verificarPermissao(['deletar']), AuditoriosController.deletar);

routes.post('/permissoes', validaToken, verificarPermissao(['criar']), PermissoesController.criar);
routes.get('/permissoes', validaToken, verificarPermissao(['listar']), PermissoesController.listarTodos);
routes.delete('/permissoes', validaToken, verificarPermissao(['deletar']), PermissoesController.deletar);
routes.post('/permissoes/atribuir', validaToken, verificarPermissao(['admin']), PermissoesController.atribuirPermissao);

module.exports = routes
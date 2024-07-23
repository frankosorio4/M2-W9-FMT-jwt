const { Router } = require('express')

const LivrosController = require('../controllers/LivrosController')
const LeitoresController = require('../controllers/LeitoresController')
const InstrumentosController = require('../controllers/InstrumentosController')
const AuditoriosController = require('../controllers/AuditoriosController')
const UsuariosController = require('../controllers/UsuariosController')
const LoginController = require('../controllers/LoginController')
const validaToken = require('../middleware/validaToken')
const PermissoesController = require('../controllers/PermissoesController')

const routes = new Router()

/* coloque  suas rotas aqui */

routes.post('/usuarios', UsuariosController.criarConta)
routes.post('/login', LoginController.login)

//another form to use validaToken
//routes.use(validaToken)

routes.post('/livros',validaToken, LivrosController.criar);
routes.get('/livros',validaToken, LivrosController.listaTodos);
routes.get('/livros/:id',validaToken, LivrosController.listarUm);
routes.put('/livros/:id',validaToken, LivrosController.atualizar);
routes.delete('/livros/:id',validaToken, LivrosController.deletar);

routes.post('/leitores',validaToken, LeitoresController.criar);
routes.get('/leitores',validaToken, LeitoresController.listaTodos);
routes.get('/leitores/:id',validaToken, LeitoresController.listarUm);
routes.put('/leitores/:id',validaToken, LeitoresController.atualizar);
routes.delete('/leitores/:id',validaToken, LeitoresController.deletar);

routes.post('/instrumentos',validaToken, InstrumentosController.criar);
routes.get('/instrumentos',validaToken, InstrumentosController.listaTodos);
routes.get('/instrumentos/:id',validaToken, InstrumentosController.listarUm);
routes.put('/instrumentos/:id',validaToken, InstrumentosController.atualizar);
routes.delete('/instrumentos/:id',validaToken, InstrumentosController.deletar);

routes.post('/auditorios',validaToken, AuditoriosController.criar);
routes.get('/auditorios',validaToken, AuditoriosController.listaTodos);
routes.get('/auditorios/:id',validaToken, AuditoriosController.listarUm);
routes.put('/auditorios/:id',validaToken, AuditoriosController.atualizar);
routes.delete('/auditorios/:id',validaToken, AuditoriosController.deletar);

routes.post('/permissoes',validaToken ,PermissoesController.criar)
routes.get('/permissoes',validaToken ,PermissoesController.listarTodos)
routes.delete('/permissoes',validaToken ,PermissoesController.deletar)
routes.post('/permissoes',validaToken ,PermissoesController.atribuirPermissao)

module.exports = routes
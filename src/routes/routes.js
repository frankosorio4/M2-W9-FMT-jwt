const { Router } = require('express')

const LivrosController = require('../controllers/LivrosController')
const LeitoresController = require('../controllers/LeitoresController')
const InstrumentosController = require('../controllers/InstrumentosController')
const AuditoriosController = require('../controllers/AuditoriosController')
const UsuariosController = require('../controllers/UsuariosController')

const routes = new Router()

/* coloque  suas rotas aqui */

routes.post('/usuarios', UsuariosController.criarConta)

routes.post('/livros',LivrosController.criar);
routes.get('/livros',LivrosController.listaTodos);
routes.get('/livros/:id',LivrosController.listarUm);
routes.put('/livros/:id',LivrosController.atualizar);
routes.delete('/livros/:id',LivrosController.deletar);

routes.post('/leitores',LeitoresController.criar);
routes.get('/leitores',LeitoresController.listaTodos);
routes.get('/leitores/:id',LeitoresController.listarUm);
routes.put('/leitores/:id',LeitoresController.atualizar);
routes.delete('/leitores/:id',LeitoresController.deletar);

routes.post('/instrumentos',InstrumentosController.criar);
routes.get('/instrumentos',InstrumentosController.listaTodos);
routes.get('/instrumentos/:id',InstrumentosController.listarUm);
routes.put('/instrumentos/:id',InstrumentosController.atualizar);
routes.delete('/instrumentos/:id',InstrumentosController.deletar);

routes.post('/auditorios',AuditoriosController.criar);
routes.get('/auditorios',AuditoriosController.listaTodos);
routes.get('/auditorios/:id',AuditoriosController.listarUm);
routes.put('/auditorios/:id',AuditoriosController.atualizar);
routes.delete('/auditorios/:id',AuditoriosController.deletar);

module.exports = routes
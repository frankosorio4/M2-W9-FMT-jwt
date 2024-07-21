-- Convite: https://classroom.github.com/a/lKlVql3R

-- Aceite o convite e clone o repositório.

-- Estruture o projeto inicial, faça o commit das alterações e depois faça um push para a branch main.

-- Crie uma branch chamada develop a partir da main, que já contém o código inicial do seu projeto, e faça um push da branch develop.Esse exercício utiliza a estrutura de branchs do gitflow.


-- ex2---------------------------------------

-- Crie um banco de dados chamado livraria_sequelize.
-- Crie uma tabela chamada livros com os seguintes campos (use migrations):
-- id serial auto incremento;
-- nome varchar(150) not null unique;
-- qtd_paginas int not null;
-- categoria_id FK (crie uma tabela de categorias e cadastre 5 categorias manualmente);
-- autor_id FK (crie uma tabela de autores e cadastre 5 autores manualmente).

-- No arquivo livros.routes.js, implemente rotas para:
-- Cadastrar um livro;
-- Listar todos os livros;
-- Deletar um livro;
-- Listar apenas um livro;
-- Atualizar um livro.
-- Implemente os métodos de cada rota no arquivo LivroController.js utilizando a biblioteca Sequelize.

create table autores(
	id serial primary key,
	autor varchar(100) not null
)
insert into autores(autor)
	values('frank')
insert into autores(autor)
	values('andrea')
insert into autores(autor)
	values('kaori')
insert into autores(autor)
	values('carlos')
insert into autores(autor)
	values('karina')

create table categorias(
	id serial primary key,
	categoria varchar(100) not null
)
insert into categorias(categoria)
	values('historia')
insert into categorias(categoria)
	values('arte')
insert into categorias(categoria)
	values('matematica')
insert into categorias(categoria)
	values('fisica')
insert into categorias(categoria)
	values('informatica')

-- http://localhost:3000/livros/
-- {
--     "nome": "mate ",
--     "qtd_paginas": 150,
--     "categoria_id": 2,
--     "autor_id": 2
-- }


-- ex3--------------------------------------

-- Crie uma tabela chamada leitores com os seguintes campos (use migrations):

-- id serial auto incremento;
-- nome varchar(150) not null;
-- cpf varchar(14) not null unique;
-- data_nascimento date.
-- No arquivo leitores.routes.js, implemente rotas para:
-- Cadastrar um leitor;
-- Listar todos os leitores;
-- Deletar um leitor;
-- Listar apenas um leitor;
-- Atualizar um leitor.

-- Implemente os métodos de cada rota no arquivo LeitorController.js utilizando a biblioteca Sequelize.

-- ex4--------------------------------------
-- Crie uma tabela chamada instrumentos com os seguintes campos (use migrations):
-- id serial auto incremento;
-- nome varchar(150) not null;
-- tipo_id (crie uma tabela de tipos e cadastre os tipos manualmente);
-- situacao varchar(50).

-- No arquivo instrumentos.routes.js, implemente rotas para:
-- Cadastrar um instrumento;
-- Listar todos os instrumentos;
-- Deletar um instrumento;
-- Listar apenas um instrumento;
-- Atualizar um instrumento.

-- Implemente os métodos de cada rota no arquivo InstrumentoController.js utilizando a biblioteca Sequelize.

create table tipo_instrumento(
	id serial primary key,
	tipo varchar(100) not null
)

insert into tipo_instrumento(tipo)
	values('Violão')
insert into tipo_instrumento(tipo)
	values('Piano')
insert into tipo_instrumento(tipo)
	values('Flauta')
insert into tipo_instrumento(tipo)
	values('Bateria')
insert into tipo_instrumento(tipo)
	values('Violino')

-- http://localhost:3000/instrumentos/
-- {
--     "nome": "mate ",
--     "tipo_id": 1,
--     "situacao": "novo"
-- }



-- ex5
-- Crie uma tabela chamada auditórios com os seguintes campos (use migrations):
-- id serial auto incremento;
-- nome varchar(150) not null;
-- descricao text;
-- qtd_max int not null.

-- No arquivo auditorios.routes.js, implemente rotas para:
-- Cadastrar um auditório;
-- Listar todos os auditórios;
-- Deletar um auditório;
-- Listar apenas um auditório;
-- Atualizar um auditório.

-- Implemente os métodos de cada rota no arquivo AuditorioController.js utilizando a biblioteca Sequelize.

-- http://localhost:3000/auditorios

-- {
--     "nome": "auditorio 1",
--     "descricao": "festas",
--     "qtd_max": 150
-- }
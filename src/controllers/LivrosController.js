const Livro = require("../models/Livro")

class LivroController {

    async criar(request, response) {
        try {
            const dados = request.body
            /* validacao */
            if (!dados.nome || !dados.qtd_paginas || !dados.categoria_id || !dados.autor_id) {
                return response.status(400).json({ mensagen: 'Os campos nome, qtd_paginas, categoria_id, e autor_id são obrigatorios' })
            }

            //validating qtd_paginas
            if (typeof dados.qtd_paginas != 'number' || dados.qtd_paginas < 0) {
                return response.status(400).json({ mensagen: 'A qtd_paginas tem que ser um numero inteiro positivo' })
            }

            //validating categoria_id
            if (typeof dados.categoria_id != 'number' || dados.categoria_id < 0) {
                return response.status(400).json({ mensagen: 'A categoria_id tem que ser um numero inteiro positivo' })
            }

            //validating autor_id
            if (typeof dados.autor_id != 'number' || dados.autor_id < 0) {
                return response.status(400).json({ mensagen: 'A autor_id tem que ser um numero inteiro positivo' })
            }

            //TO DO VALIDATIONS
            const livro = await Livro.create(dados);
            // response.status(201).json(livro);
            response.status(201).json({
                id: livro.id,
                nome: livro.nome,
                qtd_paginas: livro.qtd_paginas,
                categoria_id: livro.categoria_id,
                autor_id: livro.autor_id
            });
        } catch (error) {
            //console.log(error);
            response.status(500).json({
                mensagem: 'Houve um erro ao cadastrar o livro'
            })
        }
    }

    async listaTodos(request, response) {
        try {
            const livros = await Livro.findAll({
                attributes: [
                    ['id', 'identificador'],
                    'nome',
                    'qtd_paginas',
                    'categoria_id',
                    'autor_id'
                ],
                // order: [['duracao', 'DESC']]
            })
            //console.log(livros)
            response.status(200).json(livros)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao listar os livros'
            })
        }
    }

    async listarUm(request, response) {
        try {
            const id = request.params.id
            const livro = await Livro.findByPk(id)
            if (!livro) {
                response
                    .status(404)
                    .json({ mensagem: 'Livro não encontrado' })
            }
            //return response.json(livro)//all the fields
            return response.status(201).json({
                id: livro.id,
                nome: livro.nome,
                qtd_paginas: livro.qtd_paginas,
                categoria_id: livro.categoria_id,
                autor_id: livro.autor_id
            });
        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao listar o livro'
            })
        }
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            // Validate data (example validation, should be adapted to your needs)
            if (!dados.nome && !dados.qtd_pages && !dados.categoria_id && !dados.autor_id) {
                return response.status(400).json({ mensagem: 'Dados insuficientes para atualizar o livro' });
            }

            //validating qtd_paginas
            if (typeof dados.qtd_paginas != 'number' || dados.qtd_paginas < 0) {
                return response.status(400).json({ mensagen: 'A qtd_paginas tem que ser um numero inteiro positivo' })
            }

            //validating categoria_id
            if (typeof dados.categoria_id != 'number' || dados.categoria_id < 0) {
                return response.status(400).json({ mensagen: 'A categoria_id tem que ser um numero inteiro positivo' })
            }

            //validating autor_id
            if (typeof dados.autor_id != 'number' || dados.autor_id < 0) {
                return response.status(400).json({ mensagen: 'A autor_id tem que ser um numero inteiro positivo' })
            }

            const livro = await Livro.findByPk(id)
            if (!livro) {
                return response
                    .status(404)
                    .json({ mensagem: 'Livro não encontrado' })
            }

            livro.nome = dados.nome ?? livro.nome
            livro.qtd_pages = dados.qtd_pages ?? livro.qtd_pages
            livro.categoria_id = dados.categoria_id ?? livro.categoria_id
            livro.autor_id = dados.autor_id ?? livro.autor_id

            await livro.save()

            return response.status(200).json(livro)
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                mensagem: 'Houve um erro ao atualiza o livro'
            })
        }
    }
    
    async deletar(request, response) {
        try {
            const id = request.params.id
            const livro = await Livro.findByPk(id)

            if (!livro) {
                return response
                    .status(404)
                    .json({ mensagem: 'Livro não encontrado' })
            }

            await livro.destroy()

            return response.status(200).json({ mensagem: 'Livro excluído com sucesso' });
            //return response.status(204).json()

        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao deletar o livros'
            })
        }
    }
}

module.exports = new LivroController();
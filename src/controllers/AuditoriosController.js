const Auditorio = require("../models/Auditorio")

class AuditoriosController {

    async criar(request, response) {
        try {
            const dados = request.body
            /* validacao */
            if (!dados.nome || !dados.qtd_max) {
                return response.status(400).json({ mensagen: 'Os campos nome, qtd_max são obrigatorios' })
            }

            //validating qtd_paginas
            if (typeof dados.qtd_max != 'number' || dados.qtd_max < 0) {
                return response.status(400).json({ mensagen: 'O qtd_max tem que ser um numero inteiro positivo' })
            }

            //TO DO VALIDATIONS
            const auditorio = await Auditorio.create(dados);
            // response.status(201).json auditorio);
            response.status(201).json({
                id: auditorio.id,
                nome: auditorio.nome,
                descricao: auditorio.descricao,
                qtd_max: auditorio.qtd_max
            });
        } catch (error) {
            console.log(error);
            response.status(500).json({
                mensagem: 'Houve um erro ao cadastrar o auditorio'
            })
        }
    }

    async listaTodos(request, response) {
        try {
            const auditorios = await Auditorio.findAll({
                attributes: [
                    ['id', 'identificador'],
                    'nome',
                    'descricao',
                    'qtd_max'
                ],
                // order: [['duracao', 'DESC']]
            })
            //console.log(auditorios)
            response.status(200).json(auditorios)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao listar os auditorios'
            })
        }
    }

    async listarUm(request, response) {
        try {
            const id = request.params.id
            const auditorio = await Auditorio.findByPk(id)
            if (!auditorio) {
                response
                    .status(404)
                    .json({ mensagem: 'auditorio não encontrado' })
            }
            //return response.json(auditorio)//all the fields
            return response.status(201).json({
                id: auditorio.id,
                nome: auditorio.nome,
                descricao: auditorio.descricao,
                qtd_max: auditorio.qtd_max
            });
        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao listar o auditorio'
            })
        }
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            /* validacao */
            if (!dados.nome || !dados.qtd_max) {
                return response.status(400).json({ mensagen: 'Os campos nome, qtd_max são obrigatorios' })
            }

            //validating qtd_paginas
            if (typeof dados.qtd_max != 'number' || dados.qtd_max < 0) {
                return response.status(400).json({ mensagen: 'O qtd_max tem que ser um numero inteiro positivo' })
            }

            const auditorio = await Auditorio.findByPk(id)
            if (!auditorio) {
                return response
                    .status(404)
                    .json({ mensagem: 'Auditorio não encontrado.' })
            }

            auditorio.nome = dados.nome ?? auditorio.nome
            auditorio.descricao = dados.descricao ?? auditorio.descricao
            auditorio.qtd_max = dados.qtd_max ?? auditorio.qtd_max

            await auditorio.save()

            // response.json({ mensagem: 'auditorio atualizado com sucesso' });
            return response.status(200).json(auditorio)
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                mensagem: 'Houve um erro ao atualiza o auditorio'
            })
        }
    }

    async deletar(request, response) {
        try {
            const id = request.params.id
            const auditorio = await Auditorio.findByPk(id)

            if (!auditorio) {
                return response
                    .status(404)
                    .json({ mensagem: 'Auditorio não encontrado' })
            }

            await auditorio.destroy()

            return response.status(200).json({ mensagem: 'Auditorio excluído com sucesso' });
            //return response.status(204).json()

        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao deletar o auditorio'
            })
        }
    }
    
}
module.exports = new AuditoriosController();
const Instrumento = require("../models/Instrumento")

class InstrumentosController {

    async criar(request, response) {
        try {
            const dados = request.body
            /* validacao */
            if (!dados.nome || !dados.tipo_id || !dados.situacao) {
                return response.status(400).json({ mensagen: 'Os campos nome, tipo_id, e situacao são obrigatorios' })
            }

            //validating qtd_paginas
            if (typeof dados.tipo_id != 'number' || dados.tipo_id < 0) {
                return response.status(400).json({ mensagen: 'O tipo_id tem que ser um numero inteiro positivo' })
            }

            //TO DO VALIDATIONS
            const instrumento = await Instrumento.create(dados);
            // response.status(201).json instrumento);
            response.status(201).json({
                id: instrumento.id,
                nome: instrumento.nome,
                tipo_id: instrumento.tipo_id,
                situacao: instrumento.situacao
            });
        } catch (error) {
            console.log(error);
            response.status(500).json({
                mensagem: 'Houve um erro ao cadastrar o instrumento'
            })
        }
    }

    async listaTodos(request, response) {
        try {
            const instrumentos = await Instrumento.findAll({
                attributes: [
                    ['id', 'identificador'],
                    'nome',
                    'tipo_id',
                    'situacao'
                ],
                // order: [['duracao', 'DESC']]
            })
            //console.log(instrumentos)
            response.status(200).json(instrumentos)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao listar os instrumentos'
            })
        }
    }

    async listarUm(request, response) {
        try {
            const id = request.params.id
            const instrumento = await Instrumento.findByPk(id)
            if (!instrumento) {
                response
                    .status(404)
                    .json({ mensagem: 'Instrumento não encontrado' })
            }
            //return response.json(instrumento)//all the fields
            return response.status(201).json({
                id: instrumento.id,
                nome: instrumento.nome,
                tipo_id: instrumento.tipo_id,
                situacao: instrumento.situacao
            });
        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao listar o instrumento'
            })
        }
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            /* validacao */
            if (!dados.nome || !dados.tipo_id || !dados.situacao) {
                return response.status(400).json({ mensagen: 'Os campos nome, tipo_id, e situacao são obrigatorios' })
            }

            //validating qtd_paginas
            if (typeof dados.tipo_id != 'number' || dados.tipo_id < 0) {
                return response.status(400).json({ mensagen: 'O tipo_id tem que ser um numero inteiro positivo' })
            }

            const instrumento = await Instrumento.findByPk(id)
            if (!instrumento) {
                return response
                    .status(404)
                    .json({ mensagem: 'Instrumento não encontrado.' })
            }

            instrumento.nome = dados.nome ?? instrumento.nome
            instrumento.tipo_id = dados.tipo_id ?? instrumento.tipo_id
            instrumento.situacao = dados.situacao ?? instrumento.situacao

            await instrumento.save()

            // response.json({ mensagem: 'instrumento atualizado com sucesso' });
            return response.status(200).json(instrumento)
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                mensagem: 'Houve um erro ao atualiza o instrumento'
            })
        }
    }

    async deletar(request, response) {
        try {
            const id = request.params.id
            const instrumento = await Instrumento.findByPk(id)

            if (!instrumento) {
                return response
                    .status(404)
                    .json({ mensagem: 'Instrumento não encontrado' })
            }

            await instrumento.destroy()

            return response.status(200).json({ mensagem: 'Instrumento excluído com sucesso' });
            //return response.status(204).json()

        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao deletar o instrumentos'
            })
        }
    }

}

module.exports = new InstrumentosController();
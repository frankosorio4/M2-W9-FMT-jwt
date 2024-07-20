const Leitor = require("../models/Leitor")

class LeitoresController {

    async criar(request, response) {
        try {
            const dados = request.body
            /* validacao */
            if (!dados.nome || !dados.cpf) {
                return response.status(400).json({ mensagen: 'Os campos nome e cpf são obrigatorios' })
            }
            //TO DO VALIDATIONS
            const leitor = await Leitor.create(dados);
            // response.status(201).json(leitor);
            response.status(201).json({
                id: leitor.id,
                nome: leitor.nome,
                cpf: leitor.cpf,
                data_nascimento: leitor.data_nascimento
            });
        } catch (error) {
            console.log(error);
            response.status(500).json({
                mensagem: 'Houve um erro ao cadastrar o leitor'
            })
        }
    }

    async listaTodos(request, response) {
        try {
            const leitores = await Leitor.findAll({
                attributes: [
                    ['id', 'identificador'],
                    'nome',
                    'cpf',
                    'data_nascimento'
                ],
                // order: [['duracao', 'DESC']]
            })
            //console.log(leitores)
            response.status(200).json(leitores)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao listar os leitores'
            })
        }
    }

    async listarUm(request, response) {
        try {
            const id = request.params.id
            const leitor = await Leitor.findByPk(id)
            if (!leitor) {
                response
                    .status(404)
                    .json({ mensagem: 'Leitor não encontrado' })
            }
            //return response.json(leitor)//all the fields
            return response.status(201).json({
                id: leitor.id,
                nome: leitor.nome,
                cpf: leitor.cpf,
                data_nascimento: leitor.data_nascimento
            });
        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao listar o leitor'
            })
        }
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            // Validate data (example validation, should be adapted to your needs)
            if (!dados.nome && !dados.cpf && !dados.data_nascimento) {
                return response.status(400).json({ mensagem: 'Dados insuficientes para atualizar o leitor' });
            }

            const leitor = await Leitor.findByPk(id)
            if (!leitor) {
                return response
                    .status(404)
                    .json({ mensagem: 'Leitor não encontrado' })
            }

            leitor.nome = dados.nome ?? leitor.nome
            leitor.cpf = dados.cpf ?? leitor.cpf
            leitor.data_nascimento = dados.data_nascimento ?? leitor.data_nascimento

            await leitor.save()

            // response.json({ mensagem: 'Leitor atualizado com sucesso' });
            return response.status(200).json(leitor)
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                mensagem: 'Houve um erro ao atualiza o leitor'
            })
        }
    }

    async deletar(request, response) {
        try {
            const id = request.params.id
            const leitor = await Leitor.findByPk(id)

            if (!leitor) {
                return response
                    .status(404)
                    .json({ mensagem: 'Leitor não encontrado' })
            }

            await leitor.destroy()

            return response.status(200).json({ mensagem: 'Leitor excluído com sucesso' });
            //return response.status(204).json()

        } catch (error) {
            return response.status(500).json({
                mensagem: 'Houve um erro ao deletar o leitors'
            })
        }
    }

}

module.exports = new LeitoresController()
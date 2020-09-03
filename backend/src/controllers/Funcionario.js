const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const funcionarios = await connection('funcionarios').select('*');
        return response.json(funcionarios);
    },

    async create(request, response) {
        const { nome, sobrenome, data_nascimento, salario_atual } = request.body;
        const discriminator = crypto.randomBytes(3).toString('HEX');
        await connection('funcionarios').insert({
            discriminator,
            nome,
            sobrenome,
            data_nascimento,
            salario_atual,
        })

        return response.json({ discriminator });
    }
};
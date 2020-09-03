const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { discriminator } = request.body;
        const funcionario = await connection('funcionarios')
        .where('discriminator', discriminator)
        .select('nome')
        .first();

        if (!funcionario) {
            return response.status(400).json({ error: 'Funcionario não corresponde ao discriminator.'})
        }

        return response.json(funcionario);
    }
}
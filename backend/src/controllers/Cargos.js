const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const { page = 1 } = request.query;
        const [counter] = await connection('cargos').count();

        const cargos = await connection('cargos')
            .join('funcionarios', 'funcionarios.discriminator', '=', 'cargos.discriminator_cargo')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'cargos.*',
                'funcionarios.nome',
                'funcionarios.sobrenome',
                'funcionarios.salario_atual'
            ]);
        response.header('X-Total-Cont', counter['count(*)']);
        return response.json(cargos);
    },

    async create(request, response) {
        const { title, description, salario_cargo } = request.body;
        const discriminator_cargo = request.headers.authorization;

        const [id] = await connection('cargos').insert({
            title,
            description,
            discriminator_cargo,
            salario_cargo,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const discriminator_cargo = request.headers.authorization;

        const cargos = await connection('cargos')
        .where('id', id)
        .select('discriminator_cargo')
        .first();

        if (cargos.discriminator_cargo !== discriminator_cargo) {
            return response.status(401).json({ error: 'operation not permitted.'});
        }

        await connection('cargos').where('id', id).delete();
        return response.status(204).send();
    }
};
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const discriminator_cargo = request.headers.authorization;
        const cargos = await connection('cargos')
        .where('discriminator_cargo', discriminator_cargo)
        .select('*');

        return response.json(cargos);
    }
}
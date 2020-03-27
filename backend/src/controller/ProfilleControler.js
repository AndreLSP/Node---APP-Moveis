const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const ongs_id = request.headers.authorization

        const incident = await connection('incident').where('ongs_id', ongs_id).select('*');
        return response.json(incident);
    }
}
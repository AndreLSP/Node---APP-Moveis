const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('incident').count();
        console.log(count);

        const incident = await connection('incident')
        .join('ongs', 'ongs.id', '=', 'incident.ongs_id')
        .limit(5)
        .offset((page - 1)*5)
        .select(['incident.*',
        'ongs.name',
        'ongs.email',
        'ongs.wathsapp',
        'ongs.city',
        'ongs.uf'
        ]);

        response.header('X-Count-Total', count['count(*)']);

        return response.json(incident);

    },

    async create(request, response){
    
    const{title, description, value} = request.body;
    const ongs_id = request.headers.authorization;

    const [id] = await connection('incident').insert({
     title,
     description,
     value,
     ongs_id,
    })

    return response.json({ id });

    },

    async delete(request, response){
        const{id} = request.params;
        const ongs_id = request.headers.authorization;

        const incident = await connection('incident')
        .where('id', id).select('ongs_id').first();

        if(incident.ongs_id != ongs_id){
            return response.status(401).json({ error: 'Opeartion not permited'});
        }

        await connection('incident').where('id', id).delete();
        return response.status('204').send();
    }
};
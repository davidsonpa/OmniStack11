const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1} = request.query;

        const [count] = await connection('incidents')
            .count();
        
        console.log(count);

        const incidents  = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id')
            .limit(5)
            .offset((page-1)*5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count',count['count(*)']);
            
        return response.json({incidents});

    },
    async create(request, response){
        const {title, description, value}  = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
                title,
                description,
                value,
                ong_id
        });
        return response.json({ id });
    },
    async update(request, response){
        const {id, title, description, value, ong_id}  = request.body;
        if(id==null){
            return response.send("id não informado")
        }else{
            await connection('incidents')
                  .update({title})
                  .update({description})
                  .update({value})
                  .update({ong_id})
                  .where({id})
                  .then(u => response.status(!!u?200:404).json({success:!!u}))
                  .catch(e => response.status(500).json(e));
        }
    },
    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
           .where('id',id)
           .select('ong_id')
           .first();

        if (incidents.ong_id != ong_id){
            console.log(ong_id);          
            return response.status(401).json({error : "Operation not permited."});
        };   
        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
    }
}      



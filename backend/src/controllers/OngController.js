const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const ongs  = await connection('ongs').select('*');
        return response.json({ongs})
    },
    async create(request, response){
        const {name, email, whatsapp, city, uf}  = request.body;
        const id =crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
        })
        return response.json({id});
    },
    async update(request, response){
        const {id, name, email, whatsapp, city, uf}  = request.body;
        if(id==null){
            return response.send("id não informado")
        }else{
            await connection('ongs')
                  .update({name})
                  .update({email})
                  .update({whatsapp})
                  .update({city})
                  .update({uf})
                  .where({id})
                  .then(u => response.status(!!u?200:404).json({success:!!u}))
                  .catch(e => response.status(500).json(e));
        }
    },
    async delete(request, response){
        const {id} = request.params;
        await connection('ongs').where('id',id).delete();
        return response.status(204).send();
    }

}
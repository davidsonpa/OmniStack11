/**
 * Rota / Recursos
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar informação do back-end
  * POST: criar uma informação no back-end
  * PUT: alterar uma informação no back-end
  * DELETE: apagar uma informação no back-end
  */

  /**
    * Tipos de parâmetros:
   * 
   * Query Params:Parâmetros nomeados enviados na rota após a interrogação "?" ( filtros, paginação)
   * Route Params:Parâmetros utilizados para identificar recursos
   * Request Body: corpo da requisição , utilizado para criar ou alterar recursos
   */

    /**
    * Bancos de Dados
    * SQL: MySQL, SQLite, PostGreSQL, Oracle, Microsoft SQL Server
    * 
    * Driver: Select * FROM users
    * Query Builder: table('users').field()
    */

/*
//Query Params
routes.get('/users', (request, response) => {
    const querys  = request.query;
    console.log(querys);

    return response.json({
        aula: 'Semana OmniStack 11',
        evento : "Query Params"
    })
});

//Route Params
routes.get('/users/:id', (request, response) => {
const params  = request.params;
console.log(params);

return response.json({
    aula: 'Semana OmniStack 11',
    evento : "Route Params"
});
});
*/
const connection = require("../database/conection");
const crypto = require("crypto");
module.exports = {
  async index (resquest, response){
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },

  async create(request, response) {
    // return response.send('Hello World, how you doing?');
    const { name, email, whatsapp, city, uf } = request.body;

    // Gerar ID randômicos com base no crypto
    const id = crypto.randomBytes(4).toString("HEX");

    // Inserindo ong
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    // O código só da o response após finalização do await
    return response.json({ id });
  }
};

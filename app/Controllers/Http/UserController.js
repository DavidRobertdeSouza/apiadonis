'use strict'
const User = use('App/Models/User')

class UserController {
  async index({response}) {
    try {
      const users = await User.all();

      return users;

    } catch (error) {
      console.log(error);
      return response.status(500).json({error: 'erro ao buscar usuarios'});
    }
  }

  async store({request, response}) {
    try {
      const data = request.only([
        'name',
        'telefone',
        'email',
        'password',
      ]);

      const user = await User.create(data);

      return user;

    } catch (error) {
      console.log(error);
      return response.status(500).json({error: 'erro ao gravar usuarios'});
    }
  }
}

module.exports = UserController

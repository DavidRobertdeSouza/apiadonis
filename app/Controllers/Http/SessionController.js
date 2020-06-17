'use strict'

const User = use('App/Models/User');

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User.findByOrFail('email', email)

    return { token, user }
  }
}

module.exports = SessionController

'use strict'

const User = use('../../Models/User')


class UserController {
 async store({request}){
    const { email, password} = request.all();
    
    const user = await User.create({
      email,
      password,
      username:email
    })
    return user;
  }
}

module.exports = UserController

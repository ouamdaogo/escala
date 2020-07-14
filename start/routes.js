'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'BONJOUR IBRAHIM OUAMDAOGO' }
})

Route.post('user', 'UserController.store')
Route.get('user', 'UserController.store')

Route.group(() => {
  
Route.post('user/register', () => {
  return {
    message:"El usuario ha sido creado"
  }
})
Route.get('user/register', () => {
  return {
    message:"Lista de todo los usuarios"
  }
})
}).prefix("api/v1")




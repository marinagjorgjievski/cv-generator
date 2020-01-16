'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.resource('views', 'GeneratorController')


Route.get('/sign-in', 'AuthController.signIn').as('auth.sign-in');
Route.get('/register', 'AuthController.showRegister').as('auth.showRegister');
Route.post('/register', 'AuthController.register').as('auth.register');
Route.post('/logout', 'AuthController.logout').as('auth.logout');

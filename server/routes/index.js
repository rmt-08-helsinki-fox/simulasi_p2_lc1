const routes = require('express').Router()
const UserController = require('../controller/UserController')
const PhotoController = require('../controller/PhotoController')

routes.post('/users/register',UserController.register)
routes.post('/users/login',UserController.login)
routes.get('/photos',PhotoController.getPhoto)

module.exports = routes
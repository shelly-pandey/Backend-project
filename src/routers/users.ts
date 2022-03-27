import express from 'express'
import passport from 'passport'

import {
  createUser,
  deleteUser,
  findAllUsers,
  loginUser,
  updateUser,
  findUserById,
  addProductsToUser,
} from '../controllers/user'

const usersRouter = express.Router()

//usersRouter.get('/',passport.authenticate('jwt', {session:false}), findAllUsers)
usersRouter.get('/', findAllUsers)
usersRouter.post('/login', loginUser)

usersRouter.get('/:id', findUserById)
usersRouter.post('/user', createUser)
usersRouter.put('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.patch('/:userId/product/:productId', addProductsToUser)

export default usersRouter

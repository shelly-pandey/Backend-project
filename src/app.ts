import express from 'express'
import dotenv from 'dotenv'

import productsRouter from './routers/products'
import usersRouter from './routers/users'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import passport from 'passport'
import { jwtStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(express.json())

app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(express.json())

//app.use(cors())

passport.use(jwtStrategy)

// Use products router
app.use('/api/v1/products', productsRouter)

// Use users router
app.use('/api/v1/users', usersRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app

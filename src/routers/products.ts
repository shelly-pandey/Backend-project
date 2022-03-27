import express from 'express'

import {
  createProduct,
  deleteProduct,
  findAllProducts,
  updateProduct,
  findProductById,
} from '../controllers/product'

const productsRouter = express.Router()

productsRouter.get('/', findAllProducts)
productsRouter.get('/:id', findProductById)
productsRouter.post('/product', createProduct)
productsRouter.put('/:id', updateProduct)
productsRouter.delete('/:id', deleteProduct)

export default productsRouter

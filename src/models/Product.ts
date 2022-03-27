/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  id: { type: number; unique: true }
  title: string
  category: string
  description: string
  price: number
  image: string
  rating: { rate: number; count: number }
}

const productSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  category: String,
  description: String,
  price: Number,
  image: String,
  rating: { rate: Number, count: Number },
})

export default mongoose.model<ProductDocument>('Product', productSchema)

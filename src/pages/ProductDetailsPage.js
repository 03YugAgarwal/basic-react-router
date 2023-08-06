import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {

    const {productId:id} = useParams()

  return (
    <div>ProductDetailsPage {id}</div>
  )
}

export default ProductDetailsPage
import React from 'react'

export default async function page({params}) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await response.json();
  return (
    <div>
        <h1>Product id:{params.id}</h1>
        <h2>{product && product.title}</h2>
    </div>
  )
}

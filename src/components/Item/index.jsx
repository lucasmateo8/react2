import React from 'react'
import './styles.css';

//Card
const Item = ({product}) => {
  return (
    <div className='item'>
      <img src={product.image} alt=""/>
      <p key={product.id}>{product.name} stock: {10}</p>
      <p>{product.name}</p>
    </div>
  )
}

export default Item
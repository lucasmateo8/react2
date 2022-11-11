import React from 'react';
import ItemCount from '../ItemCount';
import './styles.css';



const ItemDetail = ({item}) => {
    
  return (
    <div className='item-detail'>
      <img src={item.image} alt=""/>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <ItemCount stock={item.stock} />
    </div>
  )
}

export default ItemDetail
import React from 'react';
import './styles.css';


const ItemDetail = ({item}) => {
    const cargarImagen = require.context("../../data/images", true);
  return (
    <div className='item-detail'>
      <img src={cargarImagen(`./${item.image}`)} alt=""/>
      <p>{item.title}</p>
      <p>${item.price}</p>
    </div>
  )
}

export default ItemDetail
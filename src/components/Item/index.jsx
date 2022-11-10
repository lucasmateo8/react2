import React from 'react'
import './styles.css';

//Card
const Item = ({item}) => {
  const cargarImagen = require.context("../../data/images", true);
  return (
    <div className='item'>
      <img src={cargarImagen(`./${item.image}`)} alt=""/>
      <p>{item.title}</p>
      <p>${item.price}</p>
    </div>
  )
}

export default Item
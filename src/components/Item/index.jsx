import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

//Card
const Item = ({item}) => {
  
  return (<Link to={`/detail/${item.id}`}>
    <div className='item'>
      <img src={item.image} alt=""/>
      <p>{item.title}</p>
      <p>${item.price}</p>
    </div> </Link>
  )
}

export default Item
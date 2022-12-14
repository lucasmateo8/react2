import React, { useContext } from "react";
import { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import "./styles.css";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const { addProduct } = useContext(Shop);

  const onAdd = (quantity) => {
    addProduct({ ...item, quantity });
    setQuantityItemDetail(quantity);
    setGoToCart(true);
  };
  return (
    <div className="item-detail">
      <img src={item.image} alt="" />
      <p className="ptitle">{item.title}</p>
      <p className="pprice">${item.price}</p>
      {goToCart ? (
        <Link to={"/cart"}>
          <button type="button" className="btn btn-primary btn-lg icart">
            Ir al Carrito
          </button>
        </Link>
      ) : item.stock == 0 ? (
        <h5 className="p">Sin stock de momento</h5>
      ) : (
        <ItemCount stock={item.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;

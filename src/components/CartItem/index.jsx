import { React, useContext } from "react";
import { Shop } from "../../contexts/Shop";
import "./styles.css";

const CartItem = ({ item }) => {
  const { removeProduct } = useContext(Shop);

  const handleRemove = () => {
    removeProduct(item.id);
  };

  return (
    <div className="brief">
      <img src={item.image} width={150} alt="cart-item" />
      <h2 className="ptitle">{item.title}</h2>
      <p className="pprice"> cantidad: {item.quantity}</p>
      <div className="basura" onClick={handleRemove}>
        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
      </div>
    </div>
  );
};

export default CartItem;

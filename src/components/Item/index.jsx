import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Item = ({ item }) => {
  return (
    <Link to={`/detail/${item.id}`}>
      <div className="item">
        <img src={item.image} alt="" />
        <p className="p">{item.title}</p>
        <p className="pp">${item.price}</p>
      </div>{" "}
    </Link>
  );
};

export default Item;

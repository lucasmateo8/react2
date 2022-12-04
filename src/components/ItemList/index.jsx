import React from "react";
import Item from "../Item";
import "./style.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((item) => {
        return (
          <div key={item.id}>
            <Item item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

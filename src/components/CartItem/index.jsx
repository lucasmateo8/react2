import { React, useContext } from "react";
import { Shop } from "../../contexts/Shop";
import './styles.css';



const CartItem = ({item}) => {

    const {removeProduct} = useContext(Shop);
  
    const handleRemove = () => {
      removeProduct(item.id)
    }

    
  
    return <div className="brief">
        <img src={item.image} width={150} alt='cart-item'/>
        <h1>{item.name}</h1>
        <p> cantidad: {item.quantity}</p>
        <div className="basura" onClick={handleRemove}>
            <img src="https://clipground.com/images/trash-bag-png-6.jpg"alt={`Bote de basura para eliminar ${item.name}`} />
        </div>
    </div>
}

export default CartItem;
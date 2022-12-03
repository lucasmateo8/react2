import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import { Form } from "../../contexts/Form";
import CartItem from "../../components/CartItem";
import { saveOrder } from "../../services/saveOrder";
import CartForm from "../../components/CartForm";

const CartContainer = () => {
    const { products, calculateTotal, emptyCart } = useContext(Shop);
    const { nombre, apellido, telefono, mail, mail2, emptyForm } = useContext(Form);
    const confirmPurchase = async () => {
        if (mail != mail2 || mail == '' || nombre == ""){
            alert('Error en los campos de texto, los email no coinciden o no hay campos ingresados')
        } else {
            await saveOrder(
                `${nombre} ${apellido}`,
                telefono,
                mail,
                products,
                calculateTotal()
               )
                emptyCart();
                emptyForm();
        }
    };
    return <>
        {products.length > 0 ? <div>
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />;
            })}
            <p className="total-cart">Total: {`${calculateTotal()}`}$</p>
            <CartForm />
            <button className="btn btn-success p-3" onClick={confirmPurchase}>
                Confirmar compra
            </button>
            </div>
            :
            <div className="no-hay-productos">
                <h2>No hay productos en tu carrito</h2>
                <Link to={'/category/all'}>
                    <button className="btn btn-success p-3">
                        Comprar Productos
                    </button>
                </Link>
            </div>
         }
    </>
}

export default CartContainer;
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import { Form } from "../../contexts/Form";
import CartItem from "../../components/CartItem";
import { saveOrder } from "../../services/saveOrder";
import CartForm from "../../components/CartForm";
import "./styles.css";

const CartContainer = () => {
  const { products, calculateTotal, emptyCart } = useContext(Shop);
  const { nombre, apellido, telefono, mail, mail2, emptyForm } =
    useContext(Form);
  const confirmPurchase = async () => {
    if (mail != mail2 || mail == "" || nombre == "") {
      alert(
        "Los email no coinciden o no hay campos ingresados"
      );
    } else {
      await saveOrder(
        `${nombre} ${apellido}`,
        telefono,
        mail,
        products,
        calculateTotal()
      );
      emptyCart();
      emptyForm();
    }
  };
  return (
    <>
      {products.length > 0 ? (
        <div className="cart">
          {products.map((product) => {
            return <CartItem key={product.id} item={product} />;
          })}
          <p className="pp">Total: {`${calculateTotal()}`}$</p>
          <CartForm />
          <div className="confirmarcompra">
            <button
              className="btn btn-success p-3 btnn"
              onClick={confirmPurchase}
            >
              Confirmar compra
            </button>
          </div>
        </div>
      ) : (
        <div className="nopurch">
          <h2 className="p">El carrito esta vacío</h2>
          <Link to={"/category/all"}>
            <button className="btn btn-success p-3">Comprar Productos</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;

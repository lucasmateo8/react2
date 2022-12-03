import React, { useContext } from "react";
import { Form } from "../../contexts/Form";
import './styles.css';

const CartForm = () => {
    const { setNombre, setApellido, setTelefono, setMail, setMail2 } = useContext(Form);
    return <form className="form">
        <input type="text" placeholder="nombre" id="nombre" onChange={e => setNombre(e.target.value)} />
        <br />
        <input type="text" placeholder="apellido" id="apellido" onChange={e => setApellido(e.target.value)} />
        <br />
        <input type="text" placeholder="telefono" id="telefono" onChange={e => setTelefono(e.target.value)} />
        <br />
        <input type="email" placeholder="mail" id="mail" onChange={e => setMail(e.target.value)} />
        <br />
        <input type="email" placeholder="repite tu mail" id="mail2" onChange={e => setMail2(e.target.value)} />
    </form>
}

export default CartForm;
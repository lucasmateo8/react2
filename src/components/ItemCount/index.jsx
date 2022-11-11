import React from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
    const [itemStock, setItemStock] = useState(stock);
    const [cantidad, setCantidad] = useState(1);
    const [itemAdd, setItemAdd] = useState(0);

    const CambiarCantidad = (valor) => {
        if (valor > 0 && valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const AgregarProductos = () => {
        if(cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            console.log(cantidad);
            setItemAdd(itemAdd + cantidad);
        }
        if (itemStock < 1) {
            setCantidad(0);
        }else {
            setCantidad(1);
        }
    }

    return <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8 center">
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => 
                        {CambiarCantidad(cantidad - 1)}} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => 
                        {CambiarCantidad(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-2">
                        <button className="btn btn-secondary" type="button" onClick={() =>
                        {AgregarProductos()}}>Agregar</button>
                    </div>
                    <p>Cantidad de productos agregados: {itemAdd}</p>
                </div>
            </div>
        </div>
    </>
}

export default ItemCount;

/* import React, { useEffect, usestate,  } from 'react';

export const Itemcount = ({ initial, stock, onAdd }) => {
     const [count, setCount] = usestate(parseInt(initial));
    const decrease = () => {
        setCount(count - 1);
}
     const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
    setCount (parseInt(initial));
 }, [initial])

    return (
         <div className='counter'>
             <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
             <button disabled = {count >= stock } onClick={increase}>+</button>
             <div>
                 <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
             </div>
         </div>
             );
            }
export default Itemcount; */


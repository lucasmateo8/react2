import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);

    const CambiarCantidad = (valor) => {
        if (valor > 0 && valor <= stock) {
            setCantidad(valor);
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
                        {onAdd(cantidad)}}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ItemCount;


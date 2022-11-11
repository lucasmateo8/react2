import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import products from "../../data/products";

const ItemDetailContainer = () => {

    const {id} = useParams()
     const [item, setItem] = useState([]);

    useEffect(()=> {
        ( async ()=> {
            try {
                const promesa = new Promise ((accept,reject) => {
                    setTimeout (()=>{
                        accept (products)
                    }, 2000)
                })
                
                promesa.then(resp => {
                    setItem(resp.items.find(item => item.id === parseInt(id)))})
            } catch (error) {             
            }
        })()
    }, [id])

    return ( <ItemDetail item={item}/> )
};

export default ItemDetailContainer;
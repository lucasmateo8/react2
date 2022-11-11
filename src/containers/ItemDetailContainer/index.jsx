import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { Loader } from "../../components/Loader";
import products from "../../data/products";

const ItemDetailContainer = () => {

    const {id} = useParams()
     const [item, setItem] = useState([]);
     const [loading, setLoading] = useState(true);


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
                    promesa.finally(()=>{setLoading(false)})
            } catch (error) {             
            }
        })()
    }, [id])

    return ( <div>{loading ? <Loader/> : <ItemDetail item={item}/> }</div> )
};

export default ItemDetailContainer;
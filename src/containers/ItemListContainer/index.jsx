/* import React from 'react';
import './styles.css';

export default function ItemListContainer ({greeting}) {
return(
    <div className="ilc">
    <h1>{greeting}</h1>
    </div>
)
} */
import React, {useEffect, useState} from 'react';
import './styles.css';
import products from '../../data/products';
import ItemList from '../../components/ItemList';


export default function ItemListContainer ({greeting}) {

    const [productos, setProducts] = useState([])

    useEffect(()=> {
        ( async ()=> {
            try {
                const promesa = new Promise ((accept,reject) => {
                    setTimeout (()=>{
                        accept (products)
                    }, 2000)
                }

                )
                promesa.then ((result)=>setProducts(result.items))
            } catch (error) {             
            }
        })()
    }, [])
    return (
        <>
            {}
            <ItemList key={products}products={productos}/>
            
        </>
    )
    
    
}
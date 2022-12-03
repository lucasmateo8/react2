import React, {useEffect, useState} from 'react';
import './styles.css';
import products from '../../data/products';
import ItemList from '../../components/ItemList';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link, useParams } from 'react-router-dom';


export default function ItemListContainer ({greeting}) {

    const [productos, setProducts] = useState([])
    const {categoryId} = useParams();
    useEffect(() => {
        (async () => {
            try {
                let q = categoryId === 'all' ? query(collection(db, "products"))
                : query(collection(db, "products"), where("category", "==", categoryId));

                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                    productosFirebase.push({...doc.data(), id: doc.id})
                });
                setProducts(productosFirebase);
                
            } catch (error) {
            }
        })();
    }, [categoryId]);

    return (
        <>
        <div className='logos'>
          
        <Link to={"/category/nike"} > <img className='nike' src="https://brandeame.es/wp-content/uploads/2017/05/Nike-Logo-PNG-Pic.png" alt="" /></Link>
            
           
            <Link to={"/category/adidas"}><img className='adidas'  src="https://pngimg.com/uploads/adidas/adidas_PNG23.png" alt="" /></Link>
            
        </div>
            <ItemList key={products}products={productos}/>
            
        </>
    )
    
    
}
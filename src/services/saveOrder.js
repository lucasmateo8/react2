import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import generateOrderObjet from "./generateOrderObjet";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const saveOrder = async (nombreComprador, telefono, email, products, total) => {
    try {
        const generatedOrder = generateOrderObjet(
            nombreComprador,
            email,
            telefono,
            products,
            total
        );
    
        const productOutOfStock = [];
        const productsInFirebase = [];
        for (const productInCart of products) {
            const docRef = doc(db, "products", productInCart.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: docSnap.id };
            productsInFirebase.push(productInFirebase);
            if (productInCart.quantity > productInFirebase.stock)
                productOutOfStock.push(productInCart);
        }
    
        if (productOutOfStock.length === 0) {    
            for (const productInCart of products) {
                const productRef = doc(
                    db,
                    "products",
                    productInCart.id
                );
                const docSnap = await getDoc(productRef);
                const productInFirebase = { ...docSnap.data(), id: docSnap.id };
                await updateDoc(productRef, {
                    stock:
                    productInFirebase.stock -
                    productInCart.quantity
                });
            }
            const docRef = await addDoc(
                collection(db, "orders"),
                generatedOrder
            );
            MySwal.fire({
                title: `Se generó la orden correctamente con ID: ${docRef.id}`,
                icon: 'success'
            })
        } else {
            let mensaje = "";
            for (const product of productOutOfStock) {
                const productInFirebase = productsInFirebase.find(
                    (productFirebase) => productFirebase.id === product.id
                );
                mensaje += `${product.name}, stock disponible: ${productInFirebase.stock}, cantidad pedida: ${product.quantity}\n`;
            }
            alert(`Hay productos fuera de stock: \n${mensaje}`);
        }
    } catch (error) {
        console.log(error);
    }
}
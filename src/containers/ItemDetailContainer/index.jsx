import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "../../components/Loader";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetail = async () => {
      const docRef = doc(db, "products", id);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ ...docSnap.data(), id: docSnap.id });
        setLoading(false);
      } else {
      }
    };

    getProductDetail();
  }, [id]);
  return <div>{loading ? <Loader /> : <ItemDetail item={item} />}</div>;
};
export default ItemDetailContainer;

import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../../assets/images/loading.svg";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = memo(({ nameCategory, greetings }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProducts = idCategory ?
    query(collection(db, "productos"),where("category", "==", idCategory))
    :
    query(collection(db, "productos"));
      getDocs(queryProducts).then((resp) => {
        setProducts(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        );
        setCategories(
          resp.docs
            .map((item) => item.data().category)
            .reduce(
              (acc, item) => (acc.includes(item) ? acc : [...acc, item]),
              []
            )
        );
        setLoading(false);
      });
  }, [idCategory]);

  const category = categories.filter((category) => category === idCategory);

  return (
    <main>
      <h2>{greetings || category}</h2>
      {loading ? (
        <img src={Loading} alt="Cargando" className="loading" />
      ) : (
        <ItemList products={products} />
      )}
    </main>
  );
});

export default ItemListContainer;

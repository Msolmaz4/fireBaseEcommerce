import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { STORE_PRODUCTS } from "../redux/slice/productSlice";

const useFetchCollection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getCollection = async () => {
    const veri = await axios.get("https://dummyjson.com/products");
    const products = veri.data?.products;

    console.log(products);
    setIsLoading(true);
    try {
      //burda datalari toplu olarak sirasiyla yuldim
      //    for (const product of products) {
      //     // Her ürünü ayrı bir belge olarak ekleyin
      //      await addDoc(collection(db, "products"), product);
      //  console.log("first")
      //     }
      //burda dikkat et bir kere yukleyince kapat yoksa surekli yukler ve bu hataya sebep olabilir
      const querySnapshot = await getDocs(collection(db, "products"));
      const fetchedData = await querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(fetchedData);//! setter asenkron yapıdadır hemen çalışmaz
      await dispatch(
        STORE_PRODUCTS({
          products: fetchedData,//! değişkeni aktardık
        })
      );
      console.log(fetchedData, "data");//! setter henüz güncelleme yapmadığı için konsolda datayı göremeyiz. o nedenle değişkeni yazdırdık
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, [dispatch]);

  return { data, isLoading };
};

export default useFetchCollection;

import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";
import axios from "axios"


const useFetchCollection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection =async () => {
    const veri = await axios.get("https://dummyjson.com/products");
    const products = veri.data?.products;
   
console.log(products)
    setIsLoading(true);
    try {
      //burda datalari toplu olarak sirasiyla yuldim
      for (const product of products) {
        // Her ürünü ayrı bir belge olarak ekleyin
       await addDoc(collection(db, "products"), product);
   
      }
     //burda datayi  
      const querySnapshot = await getDocs(collection(db, "products"));
      //doc alinana 
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
          const allData=  querySnapshot.forEach((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setData(allData)
      console.log(data,"data geldimi ")


    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return { data, isLoading };
};

export default useFetchCollection;

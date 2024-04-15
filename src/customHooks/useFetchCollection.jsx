import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useDispatch } from "react-redux";
import { STORE_PRODUCTS } from "../redux/slice/productSlice";
import { FILTER_BY_CATEGORY } from "../redux/slice/filterSlice";
import axios from "axios";
const initialCategories = [
  { name: "All", isActive: true },
  { name: "Laptops", isActive: false },
  { name: "Skincare", isActive: false },
  { name: "Fragrances", isActive: false },
  { name: "Smartphones", isActive: false },
];
const useFetchCollection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [categor, setCategor] = useState(initialCategories);
  const [dert,setDert] = useState([])


  
  const getCollection = async () => {

    // const veri = await axios.get("https://dummyjson.com/products");
    // const products = veri.data?.products;
    // console.log(products,"prodddd")
    // {
    //   products?.map(async (item) => {
    //     return await addDoc(collection(db, "products"), item);
    //   });
      
    // }
    
   // toast.success("Products fetched successfully");
    

  
 
    try {
      //burda datalari toplu olarak sirasiyla yuldim
        //  for (const product of products) {
        //   // Her ürünü ayrı bir belge olarak ekleyin
        //    await addDoc(collection(db, "products"), product);
       //console.log("first")
        //  }
       
      //burda dikkat et bir kere yukleyince kapat yoksa surekli yukler ve bu hataya sebep olabilir
     //! setter asenkron yapıdadır hemen çalışmaz

     const querySnapshot = await getDocs(collection(db, "products"));
     const fetchedDat = await querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
     console.log(fetchedDat)

     const newDert = fetchedDat?.filter((item, index, self) =>
     index === self.findIndex((t) => (
       t.title === item.title
     ))
   )
   setDert(newDert);
     
//console.log(dert.length,"fffffff")


     setData(dert);
     setIsLoading(false);

      dispatch(
        STORE_PRODUCTS({
          products: dert,//! değişkeni aktardık
        })
        ,
        dispatch(
          FILTER_BY_CATEGORY({
          //  products: fetchedDat,
            category:categor
          })
        )
      );
   
     // console.log(fetchedData, "data");//! setter henüz güncelleme yapmadığı için konsolda datayı göremeyiz. o nedenle değişkeni yazdırdık
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

useEffect(()=>{getCollection()},[dert])
  return { data, isLoading, categor,setCategor};
};

export default useFetchCollection;

import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchDocument = () => {
  const [veri, setVeri] = useState([]);
  const { userID } = useSelector((state) => state.auth);
  console.log(userID,"get kontrolda")

  const getStart = async ({ email,data }) => {
    console.log(email,data ,"getStart")
    if (email) {

        console.log("geldik ulannnnnnnnnnnnn")

        

        // const userCollectionRef = collection(db, `${email}`,"eleme");
        // const querySnapshot = await getDocs(userCollectionRef);
        // const fetchedData = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        // setVeri(fetchedData);
    
        
      }else{
        console.error("Error fetching user data from Firestore:");
      }
    
  };

  const getAdd = async ({ id, email, data }) => {
    console.log(data, "getADD");
    console.log(userID, "getADD");
    console.log(email, "getemail");
  
    try {
      const querySnapshot = await getDocs(collection(db, `${email}`));
      const fetchedData = await querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVeri(fetchedData);
      console.log(fetchedData, "fetccccccccccccc");
  
      fetchedData?.map(async (ert) => {
        if (ert.id !== id) {
          const donud = await setDoc(doc(db, `${email}`, `${id}`), { ...data, quantity: 1 });
          return donud;
        } else {
          console.log("object");
        }
      });
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };
  
    

  const getMinus = () => {};

  const getSummer = () => {};

 

  return { getStart, getMinus, getSummer, veri, setVeri, getAdd };
};

export default useFetchDocument;



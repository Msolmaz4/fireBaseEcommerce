import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchDocument = () => {
  const [veri, setVeri] = useState([]);
  const { userID,email } = useSelector((state) => state.auth);
  console.log(userID,"get kontrolda")

  const getStart = async ({ email }) => {
    console.log(email ,"getStart")
    if (email) {
       console.log("geldik ulannnnnnnnnnnnn")
       try {
        await setDoc(doc(db, `${email}`, "dA"), {
          name: "Los Angeles",
          state: "CA",
          country: "USA"
        });
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error writing document: ", error);
      }
      
       

        

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
  
       for (let ert of fetchedData) {
            if (ert.id != id) {
              await setDoc(doc(db, `${email}`, `${id}`), { ...data, quantity: 1 });
            } else {
              await setDoc(doc(db, `${email}`, `${id}`), { ...ert, quantity: ert.quantity + 1 });
              console.log("icerdevar ");
              break;  // id eşleştiğinde döngüyü sonlandırır
            }
          }
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };
  
  // const getAdd = async ({ id, email, data }) => {
  //   // ...veri?.map içindeki async fonksiyonların sonuçlarını beklemek için bir Promise.all kullanabilirsiniz. Böylece tüm işlemler tamamlandığında devam edebilirsiniz:
  //   try {
  //     await Promise.all(veri?.map(async (ert) => {
  //       if (ert.id !== id) {
  //         const donud = await setDoc(doc(db, `${email}`, `${id}`), { ...data, quantity: 1 });
  //         return donud;
  //       } else {
  //         console.log("object");
  //       }
  //     }));
  //   } catch (error) {
  //     console.error("Hata oluştu:", error);
  //   }
  // };

  const getMinus = () => {};

  const getSummer = () => {};
useEffect(()=>{
  getStart({email})
},[userID,email])
 

  return { getStart, getMinus, getSummer, veri, setVeri, getAdd };
};

export default useFetchDocument;



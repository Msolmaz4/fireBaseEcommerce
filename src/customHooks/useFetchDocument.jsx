import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchDocument = () => {
  const [dert, setVeri] = useState();
  const { userID,email } = useSelector((state) => state.auth);
  const { BASKET_ADD,baskets} = useSelector(state=>state.basket)
 
  const dispatch = useDispatch()

  const getStart = async ({ email }) => {
    console.log(email ,"getStart")
    if (email) {
       console.log("geldik ulannnnnnnnnnnnn")
       try {
        await setDoc(doc(db, `${email}` , "dA"), {});
        const querySnapshot = await getDocs(collection(db, `${email}`));
        const fetchedData = await querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(BASKET_ADD({ payload: fetchedData }))

     
    
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
 
   console.log(baskets,"basketsssssssssssssssss")
    try {
      const querySnapshot = await getDocs(collection(db, `${email}`));
      const fetchedData = await querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
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
        
          const collectionRef = collection(db, `${email}`);

          getDocs(collectionRef).then((querySnapshot) => {
            const documentCount = querySnapshot.size;
           setVeri(documentCount)
            console.log("Belge Sayısı:", documentCount);
          }).catch((error) => {
            console.error("Hata oluştu:", error);
          });
          location.reload();
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
  if(email|| userID){
    const collectionRef = collection(db, `${email}`);

  getDocs(collectionRef).then((querySnapshot) => {
    const documentCount = querySnapshot.size;
     console.log("Belge Sayısı:", documentCount);
   setVeri(documentCount)

   
  }).catch((error) => {
    console.error("Hata oluştu:", error);
  });
  }
  
 },[email,userID,dert])
console.log(dert,"return omces'")
  return { getStart, getMinus, getSummer, dert, setVeri, getAdd };
};

export default useFetchDocument;



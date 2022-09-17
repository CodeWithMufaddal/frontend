import react, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";


const DataContext = createContext();

const DataContextProvider = ({ children }) => {


   // const createInward = async (data) => {

   //    // const db = getFirestore(app);

   //    const dbRef = collection(db, "Inward Challan ", 1000);

   //    addDoc(dbRef, data).then(docRef => {
   //       console.log("Document has been added successfully");
   //    })
   //       .catch(error => {
   //          console.log(error);
   //       })
   // }

   

   return (
      <DataContext.Provider value={{}}>
         {children}
      </DataContext.Provider>
   );
}

const useData = () => {
   return useContext(DataContext);
}

export { useData, DataContextProvider }
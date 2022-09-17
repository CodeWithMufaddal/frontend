import react, { createContext, useContext, useState, useEffect } from 'react';

const userAuthContext = createContext();

const UserContextProvider = ({ children }) => {

   const [user, setUser] = useState({
      name: 'user',
   });
   let date = new Date()
   let seconds = date.getSeconds()
   const [data, setData] = useState({
      InwardNo: 1000 ,
      name: '',
      mobileNumber: '',
      email: '',
      machineType: '',
      brand: '',
      modelNo: '',
      serialNo: '',
      ram: '',
      hdd: '',
      ssd: '',
      battery: 'YES',
      adapter: 'YES',
      fan: 'YES',
      cpu: '',
      other: [],
      problem: '',
      discription: '',
      date: `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()} - ${date.toLocaleTimeString()}  `
   })




   const login = () => {
      console.log('login');
   }

   const logout = () => {
      console.log('logout');
   }

   const GoogleLogin = () => {
      console.log('GoogleLogin');
   }


   return (
      <userAuthContext.Provider value={{ GoogleLogin, data, setData, user, setUser }}>
         {children}
      </userAuthContext.Provider>
   );

}


const useUserAuth = () => {
   return useContext(userAuthContext);
}

export { useUserAuth, UserContextProvider }
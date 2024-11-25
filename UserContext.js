import React, {useState, createContext} from "react";

export const UserContext = createContext();

export const  UserProvider = ({ children }) => {
 
    const [userData, setUserData] = useState({});

    const updateUserData = (key, value) => {
        setUserData((prev) => {
          const updatedData = { ...prev, [key]: value };
          console.log('Updated User Data:', updatedData);
          return updatedData;
        });
      };

    return (
        <UserContext.Provider value = {{ userData, updateUserData}}>
            {children}
        </UserContext.Provider>
    )
}
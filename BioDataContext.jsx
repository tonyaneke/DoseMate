import { createContext, useContext, useState } from "react";

const SharedStateContext = createContext();

export const BioDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  return (
    <SharedStateContext.Provider value={{ userData, setUserData }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  return useContext(SharedStateContext);
};

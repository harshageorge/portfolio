import { createContext, useState } from "react";


export const NavContext = createContext(null);


export const NavContextProvider = (props) => {
    const [nav, setNav] = useState(false);

  const contextValue = {
    nav, setNav
  };

  return (
    <NavContext.Provider value={contextValue}>
      {props.children}
    </NavContext.Provider>
  );
};

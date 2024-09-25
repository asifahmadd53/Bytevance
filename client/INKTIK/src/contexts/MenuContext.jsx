import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ( {children} ) => {
    const [menu, setMenu] = useState(false);
    const clickOnMenu = ()=>{
        setMenu(!menu)
    }
    
    return (
        <MenuContext.Provider value={{clickOnMenu, menu}}>
            {children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuProvider };

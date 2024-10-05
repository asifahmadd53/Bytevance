import { createContext, useState } from "react";

export const AdminSideMenuContext = createContext()


export const AdminSideMenuProvider = ({children})=>{
    const [open, setOpen] = useState(false)
    return(
        <AdminSideMenuContext.Provider value={{open, setOpen}}>
            {children}
        </AdminSideMenuContext.Provider>
    )
}
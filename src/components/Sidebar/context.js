import React, { createContext, useState } from 'react'

export const SidebarContext = createContext({})

export const SidebarProvider = (props) => {
    const [isOpened, setIsOpened] = useState(true)


    return (
        <SidebarContext.Provider value={{
            isOpened,
            setIsOpened
        }}>
            {props.children}
        </SidebarContext.Provider>
    )
}
import React, { createContext, useContext, useRef } from 'react'
import { Animated } from 'react-native'
import { SidebarContext, SidebarProvider } from '../Sidebar/context'

export const ContainerContext = createContext({})

export const ContainerProvider = (props) => {
    const { isOpened } = useContext(SidebarContext)

    const containerScale = useRef(new Animated.Value(1)).current
    const containerOffset = useRef(new Animated.Value(0)).current

    const toggleContainer = (isOpened) => {
        Animated
            .timing(containerScale, {
                toValue: isOpened ? 1 : .95,
                duration: 300,
                useNativeDriver: true
            })
            .start()
        Animated
            .timing(containerOffset, {
                toValue: isOpened ? 0 : 310,
                duration: 300,
                useNativeDriver: true
            })
            .start()
    }


    return (
        <ContainerContext.Provider value={{
            containerScale,
            containerOffset,
            toggleContainer
        }}>
            {props.children}
        </ContainerContext.Provider>
    )
}
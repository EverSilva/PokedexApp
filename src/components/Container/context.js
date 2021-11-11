import React, { createContext, useRef } from 'react'
import { Animated } from 'react-native'

export const ContainerContext = createContext({})

export const ContainerProvider = (props) => {

    const containerScale = useRef(new Animated.Value(1)).current
    const containerOffset = useRef(new Animated.Value(0)).current


    return (
        <ContainerContext.Provider value={{
            containerScale,
            containerOffset
        }}>
            {props.children}
        </ContainerContext.Provider>
    )
}
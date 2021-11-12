import React, { useContext, useRef, useState } from 'react'
import { View, Text, Animated, Pressable, StyleSheet } from 'react-native'
import { SidebarContext } from '../Sidebar/context'
import { ContainerContext } from './context'
import { ToggleButton } from './ToggleButton'

export const Container = ({children, controls}) => {
    const { isOpened, setIsOpened } = useContext(SidebarContext)
    const { containerScale, containerOffset } = useContext(ContainerContext)
    

    // const containerScale = useRef(new Animated.Value(1)).current
    //const containerOffset = useRef(new Animated.Value(0)).current

    return (
        <Animated.View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#ffffff',
            borderRadius: isOpened ? 20 : 0,
            transform: [
                { scale: containerScale },
                { translateX: containerOffset }
            ]
            }}>

            {
                controls.toggleable ?
                <ToggleButton/> :
                <></>
            }
            {children}
        </Animated.View>
    )
}


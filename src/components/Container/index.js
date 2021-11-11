import React, { useContext, useRef, useState } from 'react'
import { View, Text, Animated, Pressable, StyleSheet } from 'react-native'
import { SidebarContext } from '../Sidebar/context'
import { ToggleButton } from './ToggleButton'

export const Container = ({children}) => {
    const { isOpened, setIsOpened } = useContext(SidebarContext)

    const containerScale = useRef(new Animated.Value(1)).current
    const containerOffset = useRef(new Animated.Value(0)).current

    const toggleSidebar = () => {
        Animated
            .timing(containerScale, {
                toValue: isOpened ? 1 : .95,
                duration: 300,
                useNativeDriver: true
            })
            .start()
        Animated
            .timing(containerOffset, {
                toValue: isOpened ? 0 : 250,
                duration: 300,
                useNativeDriver: true
            })
            .start()
    }

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

            <Pressable 
                style={{backgroundColor: 'red'}} 
                onPress={() => toggleSidebar()}>
                <Text>Toggle</Text>
            </Pressable>
            <ToggleButton/>
            {children}
        </Animated.View>
    )
}


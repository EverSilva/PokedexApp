import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SidebarContext } from '../Sidebar/context'

export const ToggleButton = (props) => {
    const { isOpened, setIsOpened } = useContext(SidebarContext)
    return (
        <Pressable onPress={() => setIsOpened(!isOpened)}>
                {  
                    isOpened ? 
                    <Icon name="close" size={50}/> : 
                    <Icon name="menu" size={50}/>
                }
        </Pressable>
    )
}
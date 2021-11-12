import React, { useContext } from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SidebarContext } from '../Sidebar/context'
import { ContainerContext } from './context'

export const ToggleButton = (props) => {
    const { toggleContainer } = useContext(ContainerContext)
    const { isOpened, setIsOpened } = useContext(SidebarContext)

    const toggleAnimation = () => {
        setIsOpened(!isOpened) 
        toggleContainer(isOpened)
    }

    return (
        <Pressable onPress={() => toggleAnimation()}>
                {  
                    isOpened ? 
                    <Icon name="close" size={50}/> : 
                    <Icon name="menu" size={50}/>
                }
        </Pressable>
    )
}
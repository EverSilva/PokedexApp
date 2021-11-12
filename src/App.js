import React from 'react'
import { View, Text } from 'react-native'

import { Sidebar } from './components/Sidebar'
import { Container } from './components/Container'

import { SidebarProvider } from './components/Sidebar/context'
import { ContainerProvider } from './components/Container/context'

const App = () => {

  return (
    <ContainerProvider>
    <SidebarProvider>
      <View style={{flexGrow: 1}}>
        <Sidebar/>
        <Container controls={{
          toggleable: true
        }}>
          
        </Container>
      </View>
    </SidebarProvider>
    </ContainerProvider>
  )
}

export default App
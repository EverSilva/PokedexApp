import React from 'react'
import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet 
} from 'react-native'

const Logo = () => 
    <Text style={styles.Logo}>Pokepédia</Text>

const Group = ({name, children}) => 
    <View style={styles.Group}>
        <Text style={styles.Group.Title}>{name}</Text>
        <View>
            {children}
        </View>
    </View>

export const Sidebar = () => {
  return (
    <SafeAreaView style={styles.Sidebar}>
      <View style={styles.Header}>
          <Logo/>
      </View>
      <View>
        <Group name="Wiki">
            <Text>Ronaldo</Text>
        </Group>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Sidebar: {
        backgroundColor: 'coral',
        flexGrow: 1
    },
    Header: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    Logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'coral'
    },
    Group: {
        padding: 10,
        borderBottomColor: 'rgba(0,0,0,.2)',
        borderBottomWidth: 1,
        Title: {
            fontWeight: 'bold',
            fontSize: 20
        }
    }
})
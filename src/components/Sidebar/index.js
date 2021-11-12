import React from 'react'
import { 
    SafeAreaView, 
    View, 
    Text, 
    Pressable,
    StyleSheet,
    SectionList
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const IconSize = 40

const sections = [
    { title: 'Wiki', data: [
        { name: 'Pokedex', goTo: 'Pokedex', icon: 'pokeball' },
        { name: 'Técnicas', goTo: 'Moves', icon: 'sword' },
        { name: 'Habilidades', goTo: 'Abilities', icon: 'star-four-points-outline' },
        { name: 'Itens', goTo: 'Items', icon: 'flask' },
        { name: 'Localizações', goTo: 'Locations', icon: 'pokemon-go' },
        { name: 'Tipos', goTo: 'Types', icon: 'label-outline' },
        { name: 'Naturezas', goTo: 'Natures', icon: 'sticker-emoji' },  
    ]},
    { title: 'Tools', data: [
        { name: 'Calculadora de status', goTo: 'StatsCalculator', icon: 'calculator-variant' },
        { name: 'Construtor de time', goTo: 'TeamBuilder', icon: 'account-group-outline' },
    ] }
]

const Logo = () => 
    <Text style={styles.Logo}>Pokepédia</Text>

const Item = ({name, icon}) =>
    <Pressable style={styles.Section.Item}>
        <Icon name={icon} size={IconSize}/>
        <Text style={styles.Section.Item.Name}>
            {name}
        </Text>
    </Pressable>


const Sections = () =>
    <SectionList
        sections={sections}    
        renderItem={({item}) => 
            <Item 
                name={item.name}
                icon={item.icon}
            />
        }
        renderSectionHeader={({section}) =>
            <Text style={styles.Section.Title}>
                {section.title}
            </Text>
        }
        keyExtractor={(item, index) => index}
    />


export const Sidebar = () => {
  return (
    <SafeAreaView style={styles.Sidebar}>
      <View style={styles.Header}>
          <Logo/>
      </View>
      <View>
        <Sections/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Sidebar: {
        backgroundColor: '#f3f3f3',
        flexGrow: 1
    },
    Header: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    Logo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    Section: {
        padding: 10,
        borderBottomColor: 'rgba(0,0,0,.2)',
        borderBottomWidth: 1,
        Title: {
            fontWeight: 'bold',
            fontSize: 26
        },
        Item: {
            flexDirection: 'row',
            alignItems: 'center',
            Name: {
                fontSize: 20
            },
            Icon: {
                
            }
        }
    }
})
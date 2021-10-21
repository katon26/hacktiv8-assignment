import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Button } from 'react-native';

const themes = {
  light: {
    foreground: '#000000',
    background: '#ffffff'
  },
  dark: {
    foreground: '#ffffff',
    background: '#000000'
  }
}

const ThemeContext = createContext()
const ListContext = createContext()

function UserList() {
  const theme = useContext(ThemeContext)
  const users = useContext(ListContext)

  return (
    <ScrollView style={[ styles.scroll, { backgroundColor: theme.background } ]}>
      {
        users.map((user, idx) => (
          <TouchableOpacity>
            <View style={styles.box} key={idx}>
              <Image
                style={styles.img}
                source={{ uri: `${user.picture.thumbnail}` }}
              />
              <View style={styles.desc}>
                <Text style={styles.title}>{`${user.name.first} ${user.name.last}`}</Text>
                <Text style={styles.text}>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}`}</Text>
                <Text style={[styles.email, styles.text]}>{user.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}

export default function App() {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState([])
  const [theme, setTheme] = useState(themes.light)

  const [isEnabled, setEnabled] = useState(false)
  const ThemeSwitcher = () => {
    setEnabled(previousState => !previousState)
    setTheme(theme === themes.light 
              ? themes.dark 
              : themes.light
            )
  };

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=8')
      .then((response) => response.json())
      .then((data) =>
      {
        setUsers(data.results)
        setFilter(data.results)
      })
  },
  [])

  const setFilters = (gender) => {
    let filter = []
    if (gender === "male") {
      users.map(user => {
        if (user.gender === gender) {
          filter.push(user)
        }
      }) 
    } else if (gender === "female") {
        users.map(user => {
          if (user.gender === gender) {
            filter.push(user)
          }
        })
    } else {
        users.map(user => {
          filter.push(user)
        })
      }
    setFilter(filter)
  }

  return (
    <ListContext.Provider value={filter}>
    <ThemeContext.Provider value={theme}>
      <View style={[styles.container, { backgroundColor: theme.background } ]}>
        
        <View style={{ color: theme.foreground, flexDirection: 'row', justifyContent: 'flex-end'}}> 
          <Button title="Dark" color="black" onPress={() => setTheme(themes.dark)} />
          <Button title="Light" color="green" onPress={() => setTheme(themes.light)} />
        </View>

        <Text style={[styles.title, { color: theme.foreground } ]} >
          Users
        </Text>
        
        <View style={[styles.buttonlist, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.foreground } ]} >
          Filter by
        </Text>

        <Button
          onPress={() => setFilters("male")}
          title="male"
          
        />
        <Button
          onPress={() => setFilters("female")}
          title="female"
        />
        
        <Button
          onPress={() => setFilters('all')}
          title="Show All User"
        />
        </View>


        <UserList />

        <StatusBar style="auto" />
      </View>
    </ThemeContext.Provider>
    </ListContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
    marginTop: 25
  },
  scroll: {
    backgroundColor: '#C2B8A3',
    padding: 10
  },
  box: {
    backgroundColor: '#FEF7DC',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    marginBottom: 12,
    padding: 10
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 5
  },
  desc: {
    justifyContent: 'space-between',
    marginStart: 10,
    height: 90
  },
  title: {
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15,
    padding: 15, 
    fontWeight: 'bold'
  },
  email: {
    color: 'brown'
  },
  buttonlist: {
    flexDirection: 'row', 
    // padding: 15,
    justifyContent: 'center'
  }
});

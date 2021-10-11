import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [users, setCustomer] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setCustomer(data.results))
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {
          users.map((user, idx) => (
            <TouchableOpacity>
              <View style={styles.box} key={idx}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${user.picture.thumbnail}`
                  }} />
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C68B59',
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
    marginStart: 10,
    height: 90,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15
  },
  email: {
    color: 'brown'
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, DrawerLayoutAndroid, Button, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';

export default function App() {
  
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
      <Text>Mari kita belajar React Native</Text>
      <Text style={styles.paragraph}>
          Drawer on the {drawerPosition}!
      </Text>
      <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
      />
      <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
      </Text>
      <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
      />
      <Image
        style={styles.img}
        source={{
          uri: 'https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png' 
        }} 
      />
      <StatusBar style="auto" />
      <Text>Count: {count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
    </DrawerLayoutAndroid>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30
  },
  img: {
    height: 100,
    width: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

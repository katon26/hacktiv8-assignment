import React from 'react';
import { View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import Header from './components/Header';
import Posts from './components/Posts';

export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <Header />
        <Posts />
      </View>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 25,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

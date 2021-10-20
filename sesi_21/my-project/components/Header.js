import React from "react";
import { Text, View } from 'react-native';
// import { Header } from "react-native/Libraries/NewAppScreen";

export default function Header() {
    return (
        <View style={{ backgroundColor: '#7C9473', padding: 10}}>
            <Text fontFamily="Arial" style={{ fontWeight: 'bold' , fontSize: 'large'}}>
                Posts
            </Text>
        </View>
    )
}
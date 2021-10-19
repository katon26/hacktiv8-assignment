import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
} from 'react-native';

export default function App() {
  const [name, setname] = useState('');
  return (
    <View style={styles.container}>
      <Text>Absen Nama :</Text>
      <TextInput
        testID="input-name"
        onChangeText={name => setname(name)}
        style={styles.input}
        placeholder={'Name'}
        value={name}
      />
      <TouchableOpacity
        testID={'button-absen'}
        onPress={() => Alert.alert('nama', name)}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Absen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginTop: 10,
  },

  button: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#1B1B32',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    color: '#FFF',
  },
});

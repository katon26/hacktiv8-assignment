import React, { useState } from 'react';
import { ScrollView, Flex, VStack, Heading, Input, Text, Checkbox, Icon, Box, NativeBaseProvider } from "native-base"
import { FontAwesome } from "@expo/vector-icons"

function App() {
  const [item, setItem] = useState([])
  const [tempItem, setTempItem] = useState('')

  const addItem = () => {
    if (tempItem == null || tempItem.trim() === '') {
      alert('Name can not be blank')
    } else {
      setItem([...item, tempItem])
    }
    setTempItem('')
  }

  const deleteItem = (idx) => {
    let data = [...item]
    data.splice(idx, 1)
    setItem(data)
  }

  return (
    <ScrollView>
      <Flex align="center">
        <VStack space={4} w="100%">
          <Heading size="lg" color="royalblue">Wishlist</Heading>
          <Input
            bordercolor
            InputRightElement={
              <Icon
                as={<FontAwesome name="plus" onPress={() => addItem()} />}
                color="#000"
                size={4}
                marginRight={4}
              />
            }
            
            placeholder="Item baru"
            value={tempItem}
            onChangeText={text => setTempItem(text)}
          />
          {item.map((items, idx) => (
            <Flex
              direction="row"
              justify="space-between"
              _text={{
                color: "black",
              }}
              >
              <Checkbox colorScheme="blue">
                <Text mx={2}>
                  {items}
                </Text>
              </Checkbox>
              <FontAwesome name="trash" size={24} color="red" onPress={() => deleteItem(idx)} 
                style={{
                  marginRight: 18
                }}/>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </ScrollView >
  )
}

export default function () {
  return (
    <NativeBaseProvider>
      <Box h="100%" p={7}>
        <App />
      </Box>
    </NativeBaseProvider >
  )
}
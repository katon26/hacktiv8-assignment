import React from "react"
import { Icon, Text, Flex } from "native-base"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Post({ post, idx, deleteFromState, updateDataModal }) {

    const deletePost = () => {
        fetch(`http://192.168.1.11:3000/posts/${post.id}`, {
            method: 'DELETE'
        })
            .then(() => deleteFromState(idx))
            .catch(err => console.log(err))
    }

    const updatePost = () => {
        updateDataModal(post.id, idx)
    }

    return (
        <Flex
            bg="white"
            align="center"
            direction="row"
            justify="space-between"
            rounded="lg"
            m={3}
            p={4}
        >
            <Flex>
                <Text fontSize="lg" fontFamily="Arial" bold>{post.title}</Text>
                <Text fontSize="sm">{post.desc}</Text>
            </Flex>
            <Flex direction="row">
                <Icon
                    as={<MaterialCommunityIcons name="update" />}
                    size={7}
                    color="warning.400"
                    onPress={() => updatePost()}
                />
                <Icon
                    as={<MaterialCommunityIcons name="delete" />}
                    size={7}
                    ml="3"
                    color="red.400"
                    onPress ={deletePost}
                />
            </Flex>
        </Flex>
    )
}
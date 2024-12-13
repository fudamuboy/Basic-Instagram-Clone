import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';


export default function Story() {
    const [isliked, setIsliked] = useState(false);
    const msg = [
        { id: 1, name: 'Add Story', Image: (require('../assets/S.png')) },
        { id: 2, name: 'Ali', Image: (require('../assets/B.jpg')) },
        { id: 3, name: 'Dry', Image: (require('../assets/C.jpg')) },
        { id: 4, name: 'Gouro', Image: (require('../assets/D.jpg')) },
        { id: 5, name: 'Dem', Image: (require('../assets/E.jpg')) },
        { id: 6, name: 'Baba', Image: (require('../assets/F.jpg')) },
        { id: 7, name: 'Dollar', Image: (require('../assets/G.jpg')) },
        { id: 8, name: 'Mouss', Image: (require('../assets/A.jpg')) },

    ];

    const posts = [
        { id: 1, name: 'Time-Square', Image: (require('../assets/time.jpg')) },
        { id: 2, name: 'London', Image: (require('../assets/london.jpg')) },
        { id: 3, name: 'Malaisie', Image: (require('../assets/malaisie.webp')) },
        { id: 4, name: 'Brezil', Image: (require('../assets/bresil.jpg')) },
        { id: 4, name: 'NYC', Image: (require('../assets/nyc.jpeg')) },

    ];
    return (
        <View style={styles.bigvue}>

            <View style={styles.stories}>
                <FlatList
                    data={msg}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (

                        <View style={styles.flat}>

                            <Image source={item.Image} style={styles.img} />
                            <Text style={styles.title}>{item.name} </Text>
                        </View>

                    )} />
            </View>
            {/* // FlatList pour les posts  */}

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <View style={styles.posts}>
                        <Text style={styles.titre}>{item.name} </Text>
                        <Image source={item.Image} style={styles.images} />

                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => setIsliked(!isliked)}>
                                <AntDesign name="heart" size={24}
                                    color={isliked ? "red" : "black"}
                                    style={{ marginHorizontal: 5 }} />
                            </TouchableOpacity>

                            <FontAwesome5 name="comment" size={24} color="black" style={{ marginHorizontal: 5 }} />
                            <Feather name="send" size={24} color="black" style={{ marginHorizontal: 5 }} />

                        </View>
                    </View>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 45,
        borderColor: 'red',
        borderWidth: 2,
    },
    flat: {
        marginTop: 40,
        padding: 6,
        marginRight: 3,
        margin: 2,

    },
    title: {
        textAlign: 'center'
    },

    // CSS des posts
    images: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
        marginVertical: 15,
    },
    posts: {
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignContent: 'center',
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 5,
    },
    titre: {
        fontSize: 18,
        fontWeight: 'bold',



    },
    bigvue: {
        backgroundColor: 'lightgray',

    },

});
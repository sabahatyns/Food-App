import React from 'react';
import {
    SafeAreaView, View, Image, FlatList, StyleSheet, Text, StatusBar, Button
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Promotions = (props) => {
    const navigation = useNavigation();

    const users = [
        {
            id: 1,
            title: 'Today’s Offer 50% OFF on all orders',
            image: '../assets/burger.png'
        },
    ]
    return (
        <View >
            <SafeAreaView />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}

                data={users}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Image style={styles.promo}
                            source={{ uri: item.image }}
                        />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>

                )}
                keyExtractor={item => item.title}
            />

            {/* <View> 
            <Text style={styles.text}> Today’s offer 50% OFF on all orders </Text>
           
                     </View> */}


            <Text style={styles.popular}>
                Popular
            </Text>

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#DEBBBB',
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 20,
        //alignItems:'center',
        paddingLeft: 140,
        //justifyContent:'center',
        marginHorizontal: 20,
        width: 350,
        height: 180,


    },
    text: {
        // marginTop:20,
        //alignItems:'center',
        color: 'black',
        marginRight: 220,
        marginLeft: -130,
        marginTop: -100,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',


    },

    promo: {

        resizeMode: 'contain',
        height: 150,
        width: 200,
        //marginLeft: 5,
        marginTop: 10,
        borderRadius: 15,


    },
    popular: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 2,
        marginLeft: 20,

    },

    img: {
        alignSelf: 'center',
        height: 90,
        width: 90,
        marginRight: 35,
        marginTop: 10,
    },

}
)
export default Promotions;
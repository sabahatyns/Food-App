import React from 'react';
import {
    SafeAreaView, View,Image, FlatList, StyleSheet, Text, StatusBar, Button
} from 'react-native';
const FlatList1 = (props) => {

    const users = [
        {
            id: 1,
            title: 'All',
           
            image:  require( '../assets/Group 3.png')
        },
        {
            id: 2,
            title: 'Burger',
            image: require('../assets/burger.png')
        },
        {
            id: 3,
            title: 'Pizza',
            image: require('../assets/pizza.png')
        },
        {
            id: 4,
            title: 'Desert',
            image: require('../assets/dessert.png')
        },

    ]
    return (
        <View  >
            <SafeAreaView  />
            <FlatList
                 horizontal     
                showsHorizontalScrollIndicator= {false}  

                data={users}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                       
                        <Image 
                       source= {{uri:item.image}} 
                        style={{height:60, width:70, resizeMode:"cover" }}
                        />
                        
                <Text style={styles.text}>{item.title}</Text>
                </View>
                )}
                keyExtractor={item => item.title}
            />
           
           

        </View>
    );

}

const styles = StyleSheet.create({
    item: {
        fontSize: 40,
        padding: 10,
        color: "black",
        backgroundColor: "silver",
        margin: 10,

    },
    container:{
        backgroundColor:'#D4BBE0',
        borderRadius:10,
        marginTop:30,
        marginLeft:20,
        //alignItems:'center',
        //justifyContent:'center',
        marginHorizontal:5,


    },
    text:{
        //marginTop:20,
        alignSelf:'center',

    },
}
)
export default FlatList1;


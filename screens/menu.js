import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet, Image, Text, } from "react-native";
import  SearchBar from "../components/Searchbar";
import  FlatList1 from "../components/FlatList";
import Promotions from "../components/Promo";


export function Main() {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{flexDirection: 'row'}}>
                    <Text>Menu</Text>
                    <Image source={require('../assets/woman.png')}/>

                </View>
                {/* Searchbar */}
                <SearchBar></SearchBar>

                {/* flatlist */}
                <FlatList1></FlatList1>

                {/* promotions */}
                <Promotions></Promotions> 
            </SafeAreaView>
        </ScrollView>
             

       )

}


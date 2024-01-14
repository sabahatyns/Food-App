import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image , Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Searchbar=()=>{
    return(

        <View>
               <View style={style.main}>
            <TextInput 
            
            placeholder='Search' style={style.input}
            ></TextInput>

<TouchableOpacity>
            <EvilIcons style={style.icon} name='search' size={25}></EvilIcons>
            </TouchableOpacity>
            </View>
        </View>
        
    
    )
}
const style =StyleSheet.create({
    main:{

        backgroungColor: '#808080',
        height: 45,
        width: 330,
        borderColor:'#808080',
        borderWidth:2,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        marginLeft:30,
        marginRight:30,
        marginTop:-10,
       

    },
    input:{
        marginLeft:50,
        marginTop:5,
        
    },
    icon:{
        marginTop:-25,
        marginLeft:18,
        //color:'#808080',

    },
})


export default Searchbar
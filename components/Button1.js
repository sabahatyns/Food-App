import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button1 = (props) => {

    return (
                
                    <TouchableOpacity 
                    style={{...styles.button, ...props.style}}
                    onPress={()=> props.onPress()}>
                        <Text style={styles.btntext} >{props.title}</Text>
                         
                    </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
  
    button: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        alignself: 'center',
        marginTop: 30,
        borderRadius: 20,
        // marginLeft:7,

    },
    btntext: {

        color: '#A223DE',
        fontSize:19,
        fontWeight: "bold",
        alignSelf: 'center',
        marginTop: 13,
       


    },
})

export default Button1 
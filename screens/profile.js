import { StyleSheet, Image, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button1 from "../components/Button1";
import Input from "../components/Input";
import { useState } from "react";





function Profile(props ) {
  const [firstName, setFirstName] =useState(null)
  const [latName, setLastName] =useState(null)
  const [age, setAge] =useState(null)
  const [address, setAddress] =useState(null)
    return (
        <SafeAreaView style={styles.container}>

            <LinearGradient
                colors={["#6E14B6", "#FFFFFF"]}
                start={[0.1, 0.1]}
                style={styles.linearGradient}
            >
                <Image
                    source={require("../assets/food.png")}
                    style={styles.image}
                />
            <Input 
            placeholder={'First Name'}
            onChangeText={(t) => setFirstName(t)}            />
            <Input 
            placeholder={'Last Name'}
            onChangeText={(t) => setLastName(t)}            />
            <Input 
            placeholder={'Age'}
            onChangeText={(t) => setAge(t)}            />
            <Input 
            placeholder={'Address'}
            onChangeText={(t) => setAddress(t)}            />

                <Button1 title="Save/Update"
                    onPress={() => {}} />

            </LinearGradient>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 25,
        
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 55,
        

    },
    text5:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 55,

        

    },
    text6:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 55,

        

    }


});
export default Profile;
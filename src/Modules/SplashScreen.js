import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
        navigation.navigate("BottomTabNavigator")
    }, 2000)
  return (
    <View>
    <Image 
    style={styles.image}
    source={{uri:'https://cdn-icons-png.flaticon.com/128/888/888886.png'}}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        height:70,
        width:70,
        alignSelf:'center',
        marginTop:400

    }
})
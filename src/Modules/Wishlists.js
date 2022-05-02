import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';



const Wishlists = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.header}>
                Wishlists
            </Text>
            <Text style={styles.textHeader}>
                Log in to view your Wishlists
            </Text>
            <Text style={styles.textStyle}>
                You can create,view,or edit Wishlists once you've logged in.
            </Text>
        <View style={{paddingLeft:20,paddingTop:10}}>
        <TouchableOpacity
        style={styles.logButton}
        onPress={()=>{navigation.navigate('SignUpScreen')}}>
            <Text style={{color:"white",fontWeight:"bold"}}>
               {' Log in'}
            </Text>

        </TouchableOpacity>
        </View>
        </View>
    ); 
  };

const styles=StyleSheet.create({
    header:{
        fontSize:35,
        fontWeight:'500',
        marginTop:70,
        marginLeft:20,
        borderBottomWidth:20
    },
    textHeader:{
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 30,
        paddingLeft: 20
    },
    textStyle: {
        fontSize: 15,
        paddingTop:5,
        paddingLeft: 20,
        color: '#838383'
    },
    logButton: {
        backgroundColor: '#FF0083',
        width: 70,
        height: 40,
        padding: 10,
        borderRadius: 8
    },
})

export default Wishlists;
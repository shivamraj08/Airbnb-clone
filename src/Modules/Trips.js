import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, } from 'react-native';

const Trips = ({ navigation}) => {
    return (
        <View>
            <View style = {styles.container}>
            <Text style={styles.header}>
                Trips
            </Text>
            </View>
            <Text style={styles.textHeader}>
                No trips yet
            </Text>
            <Text style={styles.textStyle}>
                When you're ready to plan your next trip,we're here to help.
            </Text>
            <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                <TouchableOpacity
                    style={styles.logButton}
                    onPress={()=>{navigation.navigate('SignUpScreen')}}>
                    <Text style={styles.textLog}>
                        {' Log in'}
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 0.4, 
        borderBottomColor: 'grey', 
        width: '90%',
        marginLeft:20,
        marginTop:20
    },
    header:{
        fontSize:35,
        fontWeight:'500',
        marginTop:70,
        borderBottomWidth:30
    }
    ,textHeader: { 
        fontSize: 20, 
        fontWeight: '500', 
        paddingTop: 30,
        paddingLeft:20 
    },
    textStyle: {
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 20,
        color: '#838383'
    },
    logButton: {
        backgroundColor: '#FF0083',
        width: 80,
        height: 50,
        padding: 15,
        borderRadius: 8
    },
    textLog:{ 
        color: "white", 
        fontWeight: "bold" }
})

export default Trips;
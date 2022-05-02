import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Inbox = ({ navigation, route }) => {
    
    return (
        <View>
            
            <View style = {styles.container}>
                <Text style={styles.header}>
                    Inbox
                </Text>
            </View>
            <Text style={styles.textHeader}>
                Log in to read messages
            </Text>
            <Text style={styles.textStyle}>
                Once you log in,you'll find messages from hosts 
                here.
            </Text>
        <View style={{paddingLeft:20,paddingTop:10}}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('SignUpScreen')}}
        style={styles.logButton}>
            <Text style={{color:"white",fontWeight:"bold"}}>
               {' Log in'}
            </Text>
        </TouchableOpacity>
        </View>
    </View>
        )
}

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
            marginBottom:30
        },
    textHeader: {
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
            width: 90,
            height: 50,
            padding: 16,
            borderRadius: 8
        }
    }
    )


export default Inbox;




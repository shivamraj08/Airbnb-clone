import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {CountryPicker} from "react-native-country-codes-picker";

export default function SignUpScreen({navigation}) {
  // const [countryCode, setCountryCode] = useState('');
    
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('BottomTabNavigator')}>
        <Image
          style={styles.cancelImg}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/748/748122.png',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.header}>{'Log in or sign up to Airbnb'}</Text>
      <View style={styles.detailsBox}>
        <View
          style={styles.countryBox}>
        <Text>
          {'Country/Region'}
        </Text>
        <TextInput placeholder=""/>
        </View>
        <TextInput style={styles.phoneText} autoFocus={true} keyboardType={'numeric'} placeholder={'Phone number'} />
      </View>
      <View>
        <Text style={styles.textStyle}>
          {"We'll call or text you to confirm your number.Standard message and data rates apply."}
        </Text>
        <TouchableOpacity
        style={styles.continueButton}>
          <Text style={styles.continueText}>
            {'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seperatorView}>
        {/* <Text>
          {'------------------'}
        </Text> */}
        <Text style={styles.seperatorText}>
          {'or'}
        </Text>
        {/* <Text>
          {'------------------'}
        </Text> */}
      </View>
      <TouchableOpacity
      style={styles.emailBox}>
        <Image
        style={styles.iconImg}
        source={{uri:'https://cdn-icons.flaticon.com/png/128/542/premium/542638.png?token=exp=1651044083~hmac=73abb3ef4e07d247d3e65b7c84495a4e'}}
        />
        <Text style={styles.emailText}>
          {'Continue with Email'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.emailBox}>
        <Image
        style={styles.iconImg}
        source={{uri:'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'}}
        />
        <Text style={styles.emailText}>
          {'Continue with Facebook'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.emailBox}>
        <Image
        style={styles.iconImg}
        source={{uri:'https://cdn-icons-png.flaticon.com/128/281/281764.png'}}
        />
        <Text style={styles.emailText}>
          {'Continue with Google'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.emailBox}>
        <Image
        style={styles.iconImg}
        source={{uri:'https://cdn-icons-png.flaticon.com/128/15/15476.png'}}
        />
        <Text style={styles.emailText}>
          {'Continue with Apple'}
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer:{
    flex:1
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 20,
  },
  cancelImg: {
    height: 15,
    width: 15,
  },
  container: {
    marginTop: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  textStyle: {
    fontSize: 11.3,
    marginLeft: 20,
    marginTop: 10,
    marginRight: 10,
  },
  phoneText: {
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginRight: 20,
    height: 49,
    padding: 6,
    marginTop: 0.4,
  },
  continueText:{
    textAlign:'center',
    paddingTop:12,
    color:'white',
    fontWeight:'700',
    fontSize:18
  },
  continueButton:{
    backgroundColor:'#FF0083',
    margin:20,
    height:48,
    borderRadius:10
  },
  seperatorText:{
    textAlign:'center',
  },
  seperatorView:{
    // flexDirection:'row',
    marginLeft:20
  },
  countryBox:{
    borderWidth: 0.5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginRight: 20,
    height: 49,
    padding: 6,
  },
  detailsBox:{
    marginTop: 20, 
    marginLeft: 20
  },
  iconImg:{
    height:22,
    width:22,
    marginLeft:20,
    marginBottom:15,
    marginTop:10
  },
  emailText:{
    fontWeight:'500',
    marginTop:14,
    marginLeft:75
  },
  emailBox:{
    borderWidth:0.5,
    borderRadius:5,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    flexDirection:'row'
  }
});

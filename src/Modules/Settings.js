import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Settings({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            style={styles.arrowImage}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2223/2223615.png'}}
          />
        </TouchableOpacity>
          <Text style={styles.accountText}>
            {'ACCOUNT SETTINGS'}
          </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Text style={styles.currencyText}>
          {'Currency'}
          {'\t\t\t\t\t\t\t\t\tGBP'}
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowImage: {
    height: 20, 
    width: 20, 
    marginTop:60, 
    marginLeft: 20
  },
  accountText:{
    fontSize: 20,
    fontWeight: '500',
    borderBottomWidth: 2,
    marginTop:60,
    marginLeft:20,
  },
  currencyText:{
    marginTop:20,
    fontSize:20,
    fontWeight:'400',
    marginLeft:20
  }
});

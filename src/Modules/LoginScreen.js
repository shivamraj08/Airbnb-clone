import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.header}>{'Your Profile'}</Text>
      <Text style={styles.body}>
        {'Log in to start planning your next trip.'}
      </Text>
      <View style={styles.logButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}>
          <Text style={styles.textStyle}>{'Log in'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}>
        <View style={styles.textStyle1}>
          <Text>{"Don't have an account?"}</Text>
          <Text style={styles.signUp}>{'Sign up'}</Text>
        </View>
      </TouchableOpacity>
      <View style={{height: 30}}>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>navigation.navigate('Settings')}
        >
        <View style={styles.setView}>
          <Image
            style={styles.setImg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/503/503822.png',
            }}
          />
          <Text style={styles.textSet}>{'Settings'}</Text>
          <Image
            style={styles.arrowImg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
            }}
          />
        </View>
        </TouchableOpacity>
        <View style={styles.setView}>
          <Image
            style={styles.setImg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1946/1946488.png',
            }}
          />
          <Text style={styles.textSet}>{'Learn about hosting'}</Text>
          <Image
            style={styles.arrowImg2}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
            }}
          />
        </View>
        <View style={styles.setView}>
          <Image
            style={styles.setImg}
            source={{
              uri: 'https://t4.ftcdn.net/jpg/01/07/99/33/240_F_107993344_XpGtQzsrdbf0BCmFOr82qnyaf6q4MfMj.jpg',
            }}
          />
          <Text style={styles.textSet}>{'Get help'}</Text>
          <Image
            style={styles.arrowImg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
            }}
          />
        </View>
        <View style={styles.setView}>
          <Image
            style={styles.setImg}
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/128/4279/premium/4279576.png?token=exp=1650873140~hmac=709480c699402e64155facb7f7ee12f6',
            }}
          />
          <Text style={styles.textSet}>{'Terms of Service'}</Text>
          <Image
            style={styles.arrowImg4}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
            }}
          />
        </View>
        <View style={styles.setView}>
          <Image
            style={styles.setImg}
            source={{
              uri: 'https://img.icons8.com/windows/2x/privacy-policy.png',
            }}
          />
          <Text style={styles.textSet}>{'Privacy Policy'}</Text>
          <Image
            style={styles.arrowImg5}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
            }}
          />
        </View>
        <Text style={styles.version}>
          {'Version 22.16.1(26001088)'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: '500',
    marginTop: 70,
    marginBottom: 10,
    marginLeft: 20,
  },
  body: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#838383',
  },
  logButton: {
    marginTop: 45,
    backgroundColor: '#FF0083',
    height: 50,
    width: 350,
    marginLeft: 20,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  textStyle1: {
    flexDirection: 'row',
    marginLeft: 23,
    marginTop: 25,
    marginBottom: 20,
  },
  signUp: {
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
  setImg: {
    height: 20,
    width: 20,
  },
  arrowImg: {
    height: 17,
    width: 17,
    marginLeft: 220,
  },
  setView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: '87%',
    marginLeft: 20,
    marginTop: 20,
    height: 40,
    borderBottomColor: 'grey',
  },
  textSet: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '300',
  },
  arrowImg2: {
    height: 17,
    width: 17,
    marginLeft: 126,
  },
  arrowImg4: {
    height: 17,
    width: 17,
    marginLeft: 153,
  },
  arrowImg5: {
    height: 17,
    width: 17,
    marginLeft: 175,
  },
  version:{
    fontSize:12,
    marginLeft:20,
    marginTop:15
  }
});

export default LoginScreen;

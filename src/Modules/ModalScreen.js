import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import DATA from './Flatlist.js/data';

const renderItem = ({item}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.imgRishi} source={{uri: item.placeImg}} />
        <View>
          <Text style={{marginTop: 20, fontSize: 15}}>{item.title}</Text>
          <Text style={{marginRight: 40, color: '#5c5b5b'}}>
            {item.distance}
          </Text>
        </View>
      </View>
    </View>
  );
};

const ListHeaderComponent = () => {
  return (
    <View>
      <Text style={styles.textHeader}>{'Go anywhere,anytime'}</Text>
      <TouchableOpacity style={styles.searchBox}>
        <Text style={styles.textFlex}>{"I'm flexible"}</Text>
        <Image
          style={styles.flexArrImg}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/892/892528.png',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.textGateway}>{'GETAWAYS NEAR YOU'}</Text>
    </View>
  );
};

export default function ModalScreen({setModalVisible, modalVisible}) {
  // const [keyboardStatus,setKeyboardStatus] = useState(false)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image
            style={styles.backArrImg}
            source={{uri: 'https://img.icons8.com/ios-filled/2x/left.png'}}
          />
        </TouchableOpacity>
        <TextInput style={styles.input} autoFocus={true} keyboardType={'default'} placeholder="Where are you going?" />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  input: {
    height: 50,
    marginTop: 12,
    padding: 15,
    fontSize: 19,
  },
  backArrImg: {
    height: 30,
    width: 30,
    marginTop: 22,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 50,
  },
  searchBox: {
    marginTop: 20,
    borderWidth: 2,
    height: 50,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: 'white',
    marginLeft: 15,
   shadowOpacity: 0.2,
    flexDirection: 'row',
    width: '90%',
  },
  textFlex: {
    color: '#9900F0',
    fontSize: 17,
    fontWeight: '700',
    padding: 15,
    marginLeft: 10,
  },
  flexArrImg: {
    height: 20,
    width: 20,
    marginLeft: 185,
    marginTop: 12,
  },
  textGateway: {
    marginLeft: 20,
    marginTop: 25,
    fontSize: 15,
    fontWeight: '500',
  },
  imgRishi: {
    height: 40,
    width: 40,
    margin: 20,
    borderRadius: 10,
  },
});

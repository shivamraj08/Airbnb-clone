import { View, Text,StyleSheet ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Data from './CountryCode'
import { useState } from 'react'


export default function CountryModal(props) {
   const {setModalOpen,modalOpen}=props;
   console.log('gfdsghjhgfds',props)
    // const [location , setLocation]=useState([])

// const handleData = (index) => {
//     const {code , name,dial_code} = Data[index]
//     console.log('detail' , code, name);
//     setLocation({code:code , name:name, dial_code:dial_code});

// }
 


    const renderItem=({item, index})=>{
        return(
            <View>
                <TouchableOpacity
                onPress={()=>{setModalOpen(!modalOpen), props.location(item) }}>
                <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.dial_code}
                </Text>
                <Text>
                    {item.code}
                </Text>
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <View>
      <View >
        <TouchableOpacity onPress={() => setModalOpen(!modalOpen)}>
          <Image
            style={styles.backArrImg}
            source={{uri: 'https://img.icons8.com/ios-filled/2x/left.png'}}
          />
        </TouchableOpacity>
        {/* <TextInput style={styles.input} autoFocus={true} keyboardType={'default'} placeholder="Where are you going?" /> */}
      </View>
      <FlatList
      style={{backgroundColor:'white'}}
      data={Data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    backArrImg: {
        height: 30,
        width: 30,
        marginTop: 82,
        backgroundColor:'red'
      }
})
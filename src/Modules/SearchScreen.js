import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  Modal,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {bounce} from 'react-native/Libraries/Animated/Easing';
import ModalScreen from './ModalScreen';

const SearchScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Modal visible={modalVisible}>
        <ModalScreen
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </Modal>

      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <Image
            style={styles.helpImg}
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/128/4889/premium/4889297.png?token=exp=1650441777~hmac=e76b7f765cd712451ea15408e6f748fd',
            }}
          />
          <Text style={styles.input}>{'Where are you going?'}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // bounces={false}
      >
        <View style={styles.body}>
          <Text style={styles.textStyle}>
            {'Help house\n100,000 refugees\nfleeing Ukraine'}
          </Text>

          <TouchableOpacity style={styles.textLearn} activeOpacity={0.8}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 14,
                fontWeight: '700',
                padding: 5,
              }}>
              {'Learn more'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: 'https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_w=2560',
            }}
          />
          <Text style={styles.textImg}>
            {'Let your curiosity do the booking'}
          </Text>
          <TouchableOpacity style={styles.textFlexible} activeOpacity={0.8}>
            <Text
              style={{
                textAlign: 'center',
                color: '#9900F0',
                fontSize: 14,
                fontWeight: '700',
                padding: 5,
                //backgroundColor: 'white',
              }}>
              {"I'm flexible"}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textInspiration}>{'Inspiration for your'}</Text>
          <Text style={styles.textNextTrip}>{' next trip'}</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.inspire}>
            <Image
              style={styles.imgCard}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=720',
              }}
            />
            <Image
              style={styles.imgCard}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=720',
              }}
            />
            <Image />
            <Image
              style={styles.imgCard}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/68ef0c20-321d-42c0-beb4-13bce3e258a2.jpg?im_w=720',
              }}
            />
            <Image />
            <Image
              style={styles.imgCard}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/54582c41-77ef-4f41-aa88-6a4ed0068f4b.jpg?im_w=720',
              }}
            />
          </View>
        </ScrollView>
        <View>
          <Text style={styles.textDiscover}>{'Discover Airbnb'}</Text>
          <Text style={styles.textExp}>{'Experiences'}</Text>
        </View>
        <View>
          <View>
            <ImageBackground
              style={{
                height: 420,
                width: 350,
                borderRadius: 10,
                margin: 15,
                overflow: 'hidden',
              }}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=1200',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '600',
                  color: 'white',
                  marginLeft: 20,
                  marginTop: 25,
                }}>
                {'Things to do\non your trip'}
              </Text>
              <TouchableOpacity style={styles.expText}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    alignSelf: 'center',
                    marginTop: 9,
                  }}>
                  {'Experiences'}
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View>
          <ImageBackground
            style={{
              height: 450,
              width: 350,
              borderRadius: 10,
              margin: 15,
              marginTop: 10,
              overflow: 'hidden',
            }}
            source={{
              uri: 'https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=1200',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color: 'white',
                marginLeft: 25,
                marginTop: 25,
              }}>
              {'Things to do\nfrom home'}
            </Text>
            <TouchableOpacity style={styles.onlineExpText}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  alignSelf: 'center',
                  marginTop: 9,
                }}>
                {'Online Experiences'}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground
            style={{height: 450, width: 390}}
            source={{
              uri: 'https://a0.muscache.com/im/pictures/cca24f3f-8f66-4e9d-98d8-dd5cda8911eb.jpg?im_w=1920',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: '600',
                color: 'white',
                marginTop: 20,
                marginLeft: 20,
              }}>
              {'Questions\nabout\nhosting?'}
            </Text>
            <View style={{marginTop: 240}}>
              <TouchableOpacity style={styles.askSuperText}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    alignSelf: 'center',
                    marginTop: 11,
                  }}>
                  {'Ask a Superhost'}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <ScrollView>
          <View>
            <Text style={{margin: 20, borderBottomWidth: 2}}>{'Support'}</Text>
            <Text style={{marginLeft: 20}}>{'Help Centre'}</Text>
            <Text style={{marginLeft: 20, marginTop: 20}}>
              {'Cancellation options'}
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    marginTop: 50,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  helpImg: {
    height: 20,
    width: 20,
    marginLeft: 90,
    marginTop: 15,
  },
  input: {
    height: 30,
    margin: 10,
    fontSize: 16,
    padding: 5,
    color: 'black',
    position: 'relative',
    width: '69%',
    fontWeight: '500',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 60,
  },
  body: {
    height: 280,
    margin: 10,
    backgroundColor: 'red',
    marginTop: 20,
    borderRadius: 9,
  },
  textLearn: {
    marginTop: 20,
    borderWidth: 1,
    width: 120,
    marginHorizontal: 125,
    height: 30,
    borderRadius: 6,
    borderColor: 'white',
  },
  img: {
    height: 450,
    width: 370,
    borderRadius: 10,
    position: 'absolute',
    margin: 10,
  },
  textImg: {
    fontSize: 35,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    margin: 20,
    marginTop: 290,
    marginBottom: 5,
  },
  textInspiration: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 90,
    marginLeft: 20,
  },
  textNextTrip: {
    fontSize: 30,
    fontWeight: '600',
    marginLeft: 15,
  },
  imgCard: {
    height: 240,
    width: 240,
    margin: 20,
    borderRadius: 10,
  },
  inspire: {
    flexDirection: 'row',
  },
  textDiscover: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 25,
    marginLeft: 20,
  },
  textExp: {
    fontSize: 30,
    fontWeight: '600',
    marginLeft: 20,
  },
  expText: {
    backgroundColor: 'white',
    height: 38,
    width: 120,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  onlineExpText: {
    backgroundColor: 'white',
    height: 40,
    width: 170,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  askSuperText: {
    backgroundColor: 'white',
    height: 40,
    width: 170,
    borderRadius: 5,
    marginLeft: 20,
  },
  textFlexible: {
    marginTop: 20,
    borderWidth: 1,
    width: 120,
    marginHorizontal: 125,
    height: 30,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: 'white',
  },
});

export default SearchScreen;

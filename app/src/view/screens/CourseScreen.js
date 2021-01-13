import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CourseScreen = ({ route }) => {
  const { data } = route.params;

  const BottomNavigationBar = () => {
    return (
      <View
        style={{
          height: 80,
          bottom: 0,
          zIndex: 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            height: 60,
            backgroundColor: '#333',
            flex: 1,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>
            Buy Now
          </Text>
        </View>
      </View>
    );
  };

  const CourseContentList = ({ content, index }) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              color: '#666',
              fontWeight: '500',
              marginBottom: 5,
            }}>
            {content.time}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {content.title}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ImageBackground
        source={data.image}
        imageStyle={{ opacity: 0.8 }}
        style={{
          height: 400,
          paddingTop: 40,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: 100,
            marginBottom: 10,
          }}
          source={require('../../assets/bestseller.png')}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            top: -35,
          }}>
          {data.name}
        </Text>
        <View style={{ top: -25, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Icon
              name="people"
              size={25}
              style={{ color: '#333', marginRight: 5 }}
            />
            <Text style={{ color: '#333', fontWeight: 'bold' }}>
              {data.students + 'k'}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="star"
              size={25}
              style={{ color: '#333', marginRight: 5 }}
            />
            <Text style={{ color: '#333', fontWeight: 'bold' }}>
              {data.star + 'k'}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', top: -10 }}>
          {'$' + data.price}
        </Text>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -35,
          backgroundColor: '#fff',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          height: '100%',
        }}>
        <Text
          style={{
            marginTop: 50,
            marginBottom: 20,
            marginHorizontal: 40,
            fontSize: 21,
            fontWeight: 'bold',
          }}>
          Course Content
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CourseContentList index={index} content={item} />
          )}
        />
      </View>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

export default CourseScreen;

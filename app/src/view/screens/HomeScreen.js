import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import courses from '../../const/courses';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const COLORS = {
  white: '#fff',
  dark: '#000',
  red: '#F52A2A',
  light: '#999',
  green: '#40B8AF',
};

const HomeScreen = ({ navigation }) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'TRENDING', 'HIP', 'EXPENSIVE'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const CourseCard = ({ course }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CourseScreen', { data: course })}>
        <ImageBackground
          source={course.image}
          style={{
            marginVertical: 10,
            marginHorizontal: 10,
            width: windowWidth / 2 - 40,
            height: windowHeight / 3,
            paddingTop: 25,
            paddingLeft: 20,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <Text
            style={{
              color: '#333',
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            {course.name}
          </Text>
          <Text style={{ color: '#333', fontWeight: '600' }}>
            {course.totalCourse + ' Courses'}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#efefef',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={{ marginTop: 0, marginHorizontal: 30 }}>
        <View style={style.header}>
          <View>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Hey Nono,</Text>
            <Text style={{ fontSize: 22, color: '#666', marginTop: 5 }}>
              Change your life
            </Text>
          </View>
          <Icon name="shopping-cart" size={28} style={{ marginTop: -30 }} />
        </View>

        <View
          style={{
            height: 60,
            marginTop: 25,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            backgroundColor: '#F5F5F7',
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon size={30} name="search" color="#999" />
          <TextInput
            style={{ fontSize: 18, marginLeft: 10 }}
            placeholder="Momento Mori"
          />
        </View>
        <CategoryList />
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Courses</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#40B8AF' }}>
            See All
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;

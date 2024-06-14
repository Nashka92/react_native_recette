import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

const AboutTheMeal = ({route, navigation}) => {
  const aboutMeal = route.params.aboutMeal;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: aboutMeal.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{aboutMeal.title}</Text>
        <Text style={styles.info}>
          {aboutMeal.duration}m {aboutMeal.complexity.toUpperCase()}{' '}
          {aboutMeal.affordability.toUpperCase()}
        </Text>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Ingredients</Text>
        </View>
        <FlatList
          data={aboutMeal.ingredients}
          renderItem={({item}) => (
            <View style={styles.backgroundItem}>
              <Text style={styles.textItem}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Steps</Text>
        </View>
        <FlatList
          data={aboutMeal.steps}
          renderItem={({item}) => (
            <View style={styles.backgroundItem}>
              <Text style={styles.textItem}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 250,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  info: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  headerWrapper: {
    width: '75%',
    borderBottomColor: '#EAB39D',
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingBottom: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EAB39D',
  },
  backgroundItem: {
    backgroundColor: '#EAB39D',
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    width: '100%',
  },
  textItem: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
});

export default AboutTheMeal;

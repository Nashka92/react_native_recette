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
        <Text style={styles.header}>Ingredients</Text>
        <FlatList
          data={aboutMeal.ingredients}
          renderItem={({item}) => (
            <View style={styles.backgroundIngredient}>
              <Text style={styles.textIngredient}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.header}>Step</Text>
        <FlatList
          data={aboutMeal.steps}
          renderItem={({item}) => (
            <View style={styles.backgroundIngredient}>
              <Text style={styles.textIngredient}>{item}</Text>
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
    height: 200,
    marginVertical: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
  info: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EAB39D',
  },
  backgroundIngredient: {
    backgroundColor: '#EAB39D',
    borderRadius: 5,
    marginVertical: 5,
  },
  textIngredient: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
});

export default AboutTheMeal;

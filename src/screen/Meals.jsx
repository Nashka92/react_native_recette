import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {MEALS} from '../data/data';

const Meals = ({route, navigation}) => {
  const {categoryId} = route.params;

  // Permet de filtrer les repas pour ne garder que ceux qui appartiennent à la catégorie sélectionnée
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  const renderMealItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('About the meal', {aboutMeal: itemData.item});
        }}>
        <View style={styles.mealItem}>
          <Image source={{uri: itemData.item.imageUrl}} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{itemData.item.title}</Text>
            <Text style={styles.info}>
              {itemData.item.duration}m {itemData.item.complexity.toUpperCase()}{' '}
              {itemData.item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  details: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: 'black',
  },
});

export default Meals;

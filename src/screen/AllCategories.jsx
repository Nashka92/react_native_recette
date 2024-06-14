import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/data';

const AllCategories = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={itemData => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
              })
            }
            style={{...styles.container, backgroundColor: itemData.item.color}}>
            <Text style={styles.text}>{itemData.item.title}</Text>
          </TouchableOpacity>
        )}
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
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default AllCategories;

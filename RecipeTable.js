import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

export default function RecipeTable({ recipes }) {
    return (
        <FlatList
            data={recipes} // data lista
            keyExtractor={(item) => item.idMeal.toString()} // hakusana muutetaan stringiksi
            renderItem={({ item }) => (
                <View style={styles.recipeItem}>
                    <Text style={styles.title}>{item.strMeal}</Text>

                    <Image
                        source={{ uri: item.strMealThumb }}
                        style={styles.thumbnail}
                        resizeMode="cover"  // kuvan koko
                    />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    recipeItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
});

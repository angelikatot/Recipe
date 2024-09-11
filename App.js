import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, ActivityIndicator } from 'react-native';
import RecipeTable from './RecipeTable';
import { fetchRecipes } from './api'; // fetch funktio

export default function App() {
  const [ingredient, setIngredient] = useState(''); // ainekset
  const [recipes, setRecipes] = useState([]); // reseptit
  const [loading, setLoading] = useState(false); // loading kuva

  const handleFetch = async () => {
    setLoading(true); //  loading kuva esille
    try {
      const fetchedRecipes = await fetchRecipes(ingredient);
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // latausindikaattori häviää
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search recipes by ingredient"
        value={ingredient}
        onChangeText={setIngredient}
      />
      <Button title="FIND" onPress={handleFetch} />
      <StatusBar style="auto" />

      {/* lataus indikaattorin tyyli */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {!loading && recipes.length > 0 && (
        <RecipeTable recipes={recipes} />  //  recipes -> RecipeTable
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});

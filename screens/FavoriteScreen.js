import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoriteScreen = () => {
	const { ids } = useContext(FavoritesContext);
	const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
	return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({});

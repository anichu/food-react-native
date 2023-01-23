import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
	function renderCategoryItem(itemData) {
		const pressHandler = () => {
			navigation.navigate("MealsOverview", {
				categoryId: itemData.item.id,
			});
		};
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	}

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderCategoryItem}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({});

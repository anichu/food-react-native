import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";
const MealsList = ({ items }) => {
	const renderMealItem = (itemData) => {
		const item = itemData.item;
		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
			id: item.id,
		};
		return <MealItem {...mealItemProps} />;
	};
	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsList;

const styles = StyleSheet.create({});

import {
	Button,
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealsDetailsScreen = ({ navigation }) => {
	const route = useRoute();
	const id = route.params.id;
	const { addFavorite, ids, removeFavorite } = useContext(FavoritesContext);
	const mealDetails = MEALS.find((meal) => meal.id === id);

	const mealsFavorite = ids.includes(id);
	const pressHandler = () => {
		console.log("sina... ");
		if (mealsFavorite) {
			removeFavorite(id);
		} else {
			addFavorite(id);
		}
	};
	console.log(ids);
	useLayoutEffect(() => {
		navigation.setOptions({
			title: mealDetails?.title,
			headerRight: () => {
				return (
					<IconButton
						icon={mealsFavorite ? "star" : "staro"}
						onPress={pressHandler}
					/>
				);
			},
		});
	}, [navigation, id, mealsFavorite]);

	const InGredients = ({ item }) => {
		return (
			<View style={styles.ingredientItem}>
				<Text>{item}</Text>
			</View>
		);
	};

	const Step = ({ step }) => {
		return (
			<View style={styles.ingredientItem}>
				<Text>{step}</Text>
			</View>
		);
	};

	return (
		<ScrollView>
			<View style={styles.detailsContainer}>
				<Image source={{ uri: mealDetails?.imageUrl }} style={styles.image} />
				<View style={styles.mealItems}>
					<Text style={styles.mealItem}>{mealDetails?.duration}</Text>
					<Text style={styles.mealItem}>{mealDetails?.complexity}</Text>
					<Text style={styles.mealItem}>{mealDetails?.affordability}</Text>
				</View>
				<Text style={styles.title}>Ingredients</Text>
				<View>
					{mealDetails &&
						mealDetails?.ingredients.map((item, index) => (
							<InGredients item={item} key={index} />
						))}
				</View>
				<Text style={styles.title}>Steps</Text>
				<View>
					{mealDetails &&
						mealDetails?.steps.map((step, index) => {
							return <Step step={step} key={index} />;
						})}
				</View>
			</View>
		</ScrollView>
	);
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
		borderRadius: 10,
	},
	detailsContainer: {
		flex: 1,
		padding: 10,
	},
	mealItem: {
		padding: 10,
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
	},
	mealItems: {
		flexDirection: "row",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "900",
		color: "white",
		textAlign: "center",
		borderBottomColor: "red",
		borderBottomWidth: 3,
		borderRadius: 3,
		paddingBottom: 5,
	},
	ingredientItem: {
		backgroundColor: "green",
		marginVertical: 5,
		padding: 10,
		borderRadius: 10,
	},
	ingredientText: {
		fontSize: 20,
		fontWeight: "600",
		color: "white",
	},
});

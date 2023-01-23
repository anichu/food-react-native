import {
	Image,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
	id,
}) => {
	const navigation = useNavigation();
	const pressHandler = () => {
		navigation.navigate("MealsDetails", {
			id: id,
		});
	};
	return (
		<View style={styles.mealItem}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPress : null,
				]}
				android_ripple={{ color: "#ccc" }}
				onPress={pressHandler}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>

					<View style={styles.details}>
						<Text style={styles.detailItem}>{duration}m</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
	},
	image: {
		width: "100%",
		height: 200,
	},
	button: {
		flex: 1,
	},
	buttonPress: {
		opacity: 0.5,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});

import { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
	const [favoriteMealIds, setFavoriteMealIds] = useState([]);

	const addFavorite = (id) => {
		setFavoriteMealIds((prev) => [id, ...prev]);
	};

	const removeFavorite = (id) => {
		setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
	};
	const value = {
		ids: favoriteMealIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};
	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContextProvider;

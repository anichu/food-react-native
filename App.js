import { Button, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#2b1b",
				},
				headerTintColor: "white",
				sceneContainerStyle: {
					backgroundColor: "#b221",
				},
				drawerContentStyle: {
					backgroundColor: "#b221",
				},
				drawerInactiveTintColor: "red",
			}}
		>
			<Drawer.Screen
				name="Categories"
				options={{
					title: "All Categories",
				}}
				component={CategoriesScreen}
			/>
			<Drawer.Screen name="Favorites" component={FavoriteScreen} />
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="dark"></StatusBar>
			<FavoritesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "#2b1b",
							},
							headerTintColor: "white",
							contentStyle: {
								backgroundColor: "#b221",
							},
						}}
					>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
						/>

						<Stack.Screen name="MealsDetails" component={MealsDetailsScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</FavoritesContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#24180f",
	},
});

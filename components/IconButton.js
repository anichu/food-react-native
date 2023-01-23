import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ onPress, icon }) => {
	return (
		<Pressable onPress={onPress}>
			<AntDesign name={icon} size={24} color="black" />
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({});

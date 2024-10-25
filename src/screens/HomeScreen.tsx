import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.sample.value);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B39DDB",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";

export default function ProductDetailScreen() {
  const { id, name } = useLocalSearchParams(); // 👈 Recibe ID y nombre desde la URL
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    if (name) {
      navigation.setOptions({ title: name }); // 👈 Cambia el título dinámicamente
    }
  }, [name, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Producto ID: {id}</Text>
      <Text style={styles.subtitle}>📝 Nombre: {name}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
      <Button
        title="Go Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";
import { globalStyles } from "@/theme/theme";

const products = [
  {
    id: 1,
    name: "producto 1 ",
  },
  {
    id: 2,
    name: "producto 2 ",
  },
  {
    id: 3,
    name: "producto 3 ",
  },
  {
    id: 4,
    name: "producto 4 ",
  },
  {
    id: 5,
    name: "producto 5 ",
  },
];

export default function ProductsScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>
      <FlatList
        data={products}
        renderItem={(data) => (
          <PrimaryButton
            label={data.item.name}
            onPress={() =>
              router.push(
                `/screens/products/${data.item.id}?name=${encodeURIComponent(
                  data.item.name
                )}`
              )
            }
          />
        )}
      />
    </View>
  );
}

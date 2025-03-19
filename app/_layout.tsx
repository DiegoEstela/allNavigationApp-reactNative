import { globalColors, globalStyles } from "@/theme/theme";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { useWindowDimensions, View } from "react-native";

export default function Layout() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer
      drawerContent={(props) => <CustomDraw {...props} />}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#f5f3f3",
        },

        drawerType: dimensions.width >= 758 ? "permanent" : "slide",
        drawerStyle: {
          backgroundColor: globalColors.background,
          width: 280,
        }, // 🎨 Personaliza el drawer
        drawerActiveTintColor: "#007bff", // 🔹 Color del texto cuando está activo
        drawerInactiveTintColor: "#333", // 🔹 Color cuando está inactivo
      }}
    >
      <Drawer.Screen name="index" options={{ title: "🏡 Home" }} />
      <Drawer.Screen
        name="screens/products/index"
        options={{ title: "🛒 Products" }}
      />
      <Drawer.Screen
        name="screens/products/[id]"
        options={{ title: "📦 Product Details" }}
      />
      <Drawer.Screen
        name="screens/profile/index"
        options={{ title: "Perfil" }}
      />
    </Drawer>
  );
}

const CustomDraw = (props: any) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 30,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

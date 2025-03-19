import PrimaryButton from "@/components/PrimaryButton";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Profile = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  console.log(top);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, margin: top }}>
      <Text>Profile</Text>

      <PrimaryButton
        label="Abrir menú"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};

export default Profile;

import { globalStyles } from "@/theme/theme";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  onPress: () => void;
}

const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-2xl font-bold text-blue-500">Hello, World!</Text>
    </View>
  );
}

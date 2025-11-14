import { Text, View, StatusBar } from "react-native";

export default function challenges() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <StatusBar barStyle="light-content" />
      <Text style={{ color: "#fff" }}>challenges tab</Text>
    </View>
  );
}

import { StyleSheet, Text, View, StatusBar } from "react-native";
import Newstein from "./components/Newstein";
import Context from "./api/Context";
function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <Newstein />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};

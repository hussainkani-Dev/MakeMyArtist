import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Loader() {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {[0, 1, 2].map((i) => (
          <Animatable.View
            key={i}
            animation="bounce"
            iterationCount="infinite"
            delay={i * 150}
            style={styles.dot}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)", // light transparent
    zIndex: 999,
  },
  container: {
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
});
import { Image, StyleSheet, Text, View } from 'react-native';

export default function TopServiceCardItem() {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../../assets/dummyImages/featured-1.jpg')}
        style={styles.icon}
      />
      <Text style={styles.text}>Manicures</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    elevation: 2,
  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },

  text: {
    fontSize: 11,
    color: '#333',
  },
});
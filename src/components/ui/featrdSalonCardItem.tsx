import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  item: {
    title: string;
    rating?: number;
  };
};

export default function FeatrdSalonCardItem({ item }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../../assets/dummyImages/featured-1.jpg')}
        style={styles.image}
      />

      {/* Rating badge */}
      <View style={styles.ratingBadge}>
        <Ionicons name="star" size={12} color="#fff" />
        <Text style={styles.ratingTxt}>4.8</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>Alaina Tisha</Text>
        <Text style={styles.role}>Beauty Artist</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>$39.00/hr</Text>
          <Text style={styles.time}>04</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 12,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 110,
  },

  ratingBadge: {
    position: 'absolute',
    right: 8,
    top: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c47a2c',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },

  ratingTxt: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 3,
  },

  body: {
    padding: 10,
  },

  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },

  role: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },

  price: {
    fontWeight: '600',
    fontSize: 13,
  },

  time: {
    fontSize: 11,
    color: '#999',
  },
});
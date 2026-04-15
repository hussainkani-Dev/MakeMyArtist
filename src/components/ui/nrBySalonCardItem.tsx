import { Image, StyleSheet, Text, View } from 'react-native';
import RatingStars from '../ratingStars';
type Props = {
  item: {
    title: string;
    rating?: number;
  };
  onPress: (item: any) => void;
};
export default function NrBySalonCardItem({item, onPress}: Props) {
  const rating = item?.rating || 5; // dynamic rating

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/dummyImages/nearby-1.jpg')}
        style={styles.imageContainer}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.titleTxt}>Halon Salon</Text>
        <Text style={styles.contentTxt}>AI Karama</Text>
      </View>

      <View style={styles.ratingContainer}>{RatingStars(rating)}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f6f6f6',
    borderWidth: 2,
    borderRadius: 10,
    height: 100,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#e6dff1',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  bodyContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleTxt: {
    color: '#959f9e',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentTxt: {
    color: '#959f9e',
    fontSize: 10,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 10,
    height: '100%',
  },
});

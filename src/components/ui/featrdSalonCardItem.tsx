import { Image, StyleSheet, Text, View } from 'react-native';
import RatingStars from '../ratingStars';
type Props = {
  item: {
    title: string;
    rating?: number;
  };
  onPress: (item: any) => void;
};

export default function FeatrdSalonCardItem({item, onPress}: Props) {
  const rating = item?.rating || 5; // dynamic rating

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/dummyImages/featured-1.jpg')}
        style={styles.imageContainer}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.titleTxt}>The S Beauty Salon</Text>
        <Text style={styles.contentTxt}>Jumerian Lake Towers, Dubai (JLT)</Text>
        <View style={styles.ratingContainer}>{RatingStars(rating)}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6dff1',
    borderRadius: 20,
    height: 170,
    width: 200,
    margin: 10,
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: '65%',
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#e6dff1',
  },
  bodyContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
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
    justifyContent: 'center',
    paddingTop: 5,
  },
});

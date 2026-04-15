import { Image, StyleSheet, Text, View } from 'react-native';
type Props = {
  item: {
    title: string;
    rating?: number;
  };
  onPress: (item: any) => void;
};

export default function ExclsveDealsCardItem({item, onPress}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/dummyImages/featured-1.jpg')}
        style={styles.imageContainer}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.body1}>
          <Text style={styles.titleTxt}>The S Beauty Salon</Text>
          <Text style={styles.contentTxt}>
            Jumerian Lake Towers, Dubai (JLT)
          </Text>
          <Text style={styles.contentTxt2}>31% Off</Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.titleTxt}>AED 55</Text>
          <Text style={styles.contentTxt}>AED 100</Text>
        </View>
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
    width: 325,
    margin: 10,
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#e6dff1',
  },
  bodyContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: -60,
    backgroundColor: '#311a09',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: '40%',
    width: '100%',
    flexDirection: 'row',
  },
  body1: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '2%',
  },
  body2: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: '2%',
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

  contentTxt2: {
    color: '#fff',
    fontSize: 8,
    textAlign: 'center',
    textDecorationLine: 'line-through',
    backgroundColor: '#c43b8d',
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
});

import { Image, Text, View } from 'react-native';

export default function TopServiceCardItem() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6dff1',
        borderRadius: 20,
        height: 150,
        width: 150,
        margin: 5,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/dummyImages/face-mask.png')}
          style={{width: 50, height: 50}}
        />
      </View>
      <Text
        style={{
          color: '#000',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingBottom: 10,
        }}>
        Facial
      </Text>
    </View>
  );
}

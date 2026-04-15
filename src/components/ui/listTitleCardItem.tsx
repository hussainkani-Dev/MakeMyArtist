import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  item: {
    title: string;
  };
  onPress: (item: any) => void;
};
export default function listTitleCardItem({item, onPress}: Props) {
  return (
    <View style={styles.conintainer}>
      <Text>{item.title}</Text>
      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Text style={styles.btnTxt}>View More</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  conintainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStyle: {
    backgroundColor: '#e41d89',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {color: '#fff', textAlign: 'center'},
});

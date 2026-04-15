import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  item: {
    title: string;
    icon: any;
  };
  onPress: (item: any) => void;
};

export default function ProfileCardItems({item, onPress}: Props) {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Ionicons name={item.icon} size={20} color={'#e41d89'} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Ionicons name={'chevron-forward-outline'} size={20} color={'#000'} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContent: {flexDirection: 'row', alignItems: 'center', gap: 12},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
});

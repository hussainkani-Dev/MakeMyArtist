import AutoBannerList from '@/src/components/ui/autoBannerList';
import ExclsveDealsCardItem from '@/src/components/ui/exclsveDealsCardItem';
import FeatrdSalonCardItem from '@/src/components/ui/featrdSalonCardItem';
import ListTitleCardItem from '@/src/components/ui/listTitleCardItem';
import NrBySalonCardItem from '@/src/components/ui/nrBySalonCardItem';
import TopServiceCardItem from '@/src/components/ui/topServiceCardItem';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dataTopSveList = [
  {
    id: '1',
    title: 'My Reviews',
  },
  {
    id: '2',
    title: 'Wallet',
  },
  {
    id: '3',
    title: 'Wallet',
  },
];
const banners = [
  {id: '1', image: 'https://via.placeholder.com/400x200'},
  {id: '2', image: 'https://via.placeholder.com/400x200'},
  {id: '3', image: 'https://via.placeholder.com/400x200'},
];

export default function Home() {
  const handleLocRedirect = () => {
    console.log('pressedLoc');
    router.push('/screens/locationSearchView');
  };
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={[{id: 'main'}]} // dummy single item
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={() => (
          <>
            <View style={styles.headerBdy}>
              <View style={styles.headerLocBdy}>
                <TouchableOpacity
                  onPress={() => handleLocRedirect()}
                  style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <Ionicons name="location-sharp" size={20} color={'#e41d89'} />
                  <Text style={styles.locationTxt}>Dubai</Text>
                </TouchableOpacity>
                <Ionicons name="apps-outline" size={20} color={'#e41d89'} />
              </View>

              <View style={styles.serachCard}>
                <Ionicons name="search" size={20} color={'#e41d89'} />
                <Text style={styles.searchTxt}>
                  Search for salon, services...
                </Text>
              </View>
            </View>
            <View style={styles.bannerCard}>
              <AutoBannerList bannerList={banners} />
            </View>
            <View style={styles.exclusiveCard}>
              <ListTitleCardItem
                item={{title: 'Exclusive Deals'}}
                onPress={item => console.log('Pressed:')}
              />
              <FlatList
                data={dataTopSveList}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <ExclsveDealsCardItem
                    item={item}
                    onPress={item => console.log('Pressed:', item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View style={styles.topServiceCard}>
              <ListTitleCardItem
                item={{title: 'Top Services'}}
                onPress={item => console.log('Pressed:')}
              />

              <FlatList
                data={dataTopSveList}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => <TopServiceCardItem />}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View style={styles.featureSalonCard}>
              <ListTitleCardItem
                item={{title: 'Featured Salons'}}
                onPress={item => console.log('Pressed:')}
              />
              <FlatList
                data={dataTopSveList}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <FeatrdSalonCardItem
                    item={item}
                    onPress={item => console.log('Pressed:', item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View style={styles.nearbySalonCard}>
              <ListTitleCardItem
                item={{title: 'Nearby Salons'}}
                onPress={item => console.log('Pressed:')}
              />
              <FlatList
                data={dataTopSveList.slice(0, 5)}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <NrBySalonCardItem
                    item={item}
                    onPress={item => console.log('Pressed:', item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  headerBdy: {
    backgroundColor: '#f6f5fa',
    borderColor: '#f4f3f8',
    borderWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
  },
  headerLocBdy: {
    padding: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationTxt: {
    fontSize: 14,
    color: '#000',
  },

  serachCard: {
    backgroundColor: '#fff',
    borderColor: '#f4f3f8',
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 50,
  },
  searchTxt: {color: '#e9e9e9'},
  bannerCard: {
    backgroundColor: '#fff',
  },

  exclusiveCard: {
    backgroundColor: '#fff',
  },

  topServiceCard: {
    backgroundColor: '#fff',
  },
  featureSalonCard: {
    backgroundColor: '#fff',
  },

  nearbySalonCard: {
    backgroundColor: '#fff',
  },
});

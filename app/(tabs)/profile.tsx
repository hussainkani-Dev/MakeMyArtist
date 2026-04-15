import ProfileCardItems from '@/src/components/ui/profileCardItems';
import useAuthViewModel from '@/src/viewmodel/auth/useAuthViewModel';
import { FlatList, View } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'My Reviews',
    icon: 'star-outline',
  },
  {
    id: '2',
    title: 'Wallet',
    icon: 'wallet-outline',
  },
  {
    id: '3',
    title: 'Settings',
    icon: 'settings-outline',
  },
  {
    id: '4',
    title: 'Help & Support',
    icon: 'help-circle-outline',
  },
  {
    id: '5',
    title: 'Change Password',
    icon: 'lock-closed-outline',
  },
  {
    id: '6',
    title: 'Logout',
    icon: 'log-out-outline',
  },
  {
    id: '7',
    title: 'Delete Account',
    icon: 'trash-outline',
  },

  {
    id: '8',
    title: 'Terms of Use',
    icon: 'card-outline',
  },
  {
    id: '9',
    title: 'Privacy & Cookie Policy',
    icon: 'shield-checkmark-outline',
  },
  {
    id: '10',
    title: 'Terms of Service',
    icon: 'card-outline',
  },
];
export default function Profile() {
  const {logout, loading, error} = useAuthViewModel();

  const handlePress = async (item: any) => {
    console.log('Clicked:', item.title);

    //  actions
    if (item.title === 'Logout') {
      logout();
    }
  };
  return (
    <View style={{flex: 1, padding: 16, backgroundColor: '#f5f5f5'}}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProfileCardItems item={item} onPress={handlePress} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

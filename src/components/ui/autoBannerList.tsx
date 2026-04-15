import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

export type BannerItem = {
  id: string;
  image: string;
  title?: string;
};
type AutoBannerProps = {
  bannerList: BannerItem[];
};
const AutoBannerList: React.FC<AutoBannerProps> = ({bannerList}) => {
  const flatListRef = useRef<FlatList<BannerItem> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!bannerList?.length) return;

    const interval = setInterval(() => {
      const nextIndex = (index + 1) % bannerList.length;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, bannerList]);

  return (
    <FlatList
      ref={flatListRef}
      data={bannerList}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Image
          source={require('../../../assets/dummyImages/banner-1.jpg')}
          style={styles.imageStyle}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  imageStyle: {width: 350, height: 150, margin: 10},
});
export default AutoBannerList;

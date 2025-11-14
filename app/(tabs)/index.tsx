import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import ChallengeCard from '@/components/home/challengesCard';
import ReadMoreBtn from '@/components/home/readmorebtn';
import { challenges } from "@/data/data";
import { Profile } from '@/components/home/profile';
import { WalletConnection } from '@/components/home/walletConnection';

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={challenges}
        keyExtractor={(i) => i.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Profile />
            <WalletConnection />
          </View>
        }
        contentContainerStyle={{ paddingBottom: 140 }}
        renderItem={({ item }) => (
          <ChallengeCard
            item={item}
            selected={selectedId === item.id}
            onPress={(id) => setSelectedId((prev) => (prev === id ? null : id))}
            onFabPress={() => console.log('fab on', item.id)}
          />
        )}
      />

      {/* Read More button — anchored above tab bar */}
      <ReadMoreBtn
        selectedId={selectedId}
        onPress={() => {
          console.log('open details', selectedId);
          // navigate or open modal
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000', // match tab bar background to remove seam
  },
  header : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  }
});
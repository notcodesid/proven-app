import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import TabBar from '@/components/challenges/TabBar';
import ChallengeCard from '@/components/challenges/ChallengeCard';
import EmptyState from '@/components/challenges/EmptyState';
import { myChallenges, MyChallenge } from '@/data/data';

type Tab = 'active' | 'completed';

export default function ChallengesScreen() {
  const [selectedTab, setSelectedTab] = useState<Tab>('active');

  const filteredChallenges = useMemo(() => {
    if (selectedTab === 'active') {
      return myChallenges.filter((c) => c.progress < 100);
    }
    return myChallenges.filter((c) => c.progress === 100);
  }, [selectedTab]);

  const handleChallengePress = (id: string) => {
    console.log('Challenge pressed:', id);
    // Navigate to challenge detail screen
  };

  const renderItem = ({ item }: { item: MyChallenge }) => (
    <ChallengeCard
      challenge={item}
      onPress={() => handleChallengePress(item.id)}
    />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>My Challenges</Text>
      <Text style={styles.subtitle}>Track your ongoing challenges</Text>
      <TabBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
    </View>
  );

  const renderEmpty = () => <EmptyState type={selectedTab} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={filteredChallenges}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f10',
  },
  contentContainer: {
    paddingBottom: 80,
    flexGrow: 1,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
});

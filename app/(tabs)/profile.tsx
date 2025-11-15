import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import AvatarHeader from '@/components/profile/AvatarHeader';
import StatsRow from '@/components/profile/StatsRow';
import ProfileTabs from '@/components/profile/ProfileTabs';
import AchievementEmptyState from '@/components/profile/AchievementEmptyState';
import { userProfile } from '@/data/data';

type Tab = 'achievement' | 'transactions';

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState<Tab>('achievement');

  const handleEditProfile = () => {
    console.log('Edit profile');
    // Navigate to edit profile screen or open modal
  };

  const handleCompletedPress = () => {
    console.log('Navigate to completed challenges');
    // Navigate to challenges screen with completed filter
  };

  const handleActivePress = () => {
    console.log('Navigate to active challenges');
    // Navigate to challenges screen with active filter
  };

  const renderContent = () => {
    if (selectedTab === 'achievement') {
      if (userProfile.achievements.length === 0) {
        return <AchievementEmptyState />;
      }
      // TODO: Render achievement list when achievements exist
      return <AchievementEmptyState />;
    }

    // TODO: Render transactions list
    return (
      <View style={styles.transactionsPlaceholder}>
        {/* Transactions content will go here */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <AvatarHeader
          name={userProfile.name}
          email={userProfile.email}
          avatar={userProfile.avatar}
          onEditPress={handleEditProfile}
        />

        <StatsRow
          completed={userProfile.stats.completed}
          active={userProfile.stats.active}
          onCompletedPress={handleCompletedPress}
          onActivePress={handleActivePress}
        />

        <ProfileTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />

        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f10',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  transactionsPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
});

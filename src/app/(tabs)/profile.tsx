import { Pressable, ScrollView, Text, View } from '@/tw';
import { Image } from '@/tw/image';
import { useClerk, useUser } from '@clerk/expo';
import { UserProfileView } from '@clerk/expo/native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const insets = useSafeAreaInsets();
  const [showProfile, setShowProfile] = useState(false)

  if (showProfile) {
    return <UserProfileView onDismiss={() => setShowProfile(false)} />
  }

  const displayName = user ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || 'Learner' : 'Alex Rivera';
  const avatarUrl = user?.imageUrl;

  return (
    <ScrollView className="flex-1 bg-surface" contentContainerClassName="pb-8">
      {/* Header */}
      <View className="flex-row items-center gap-2 px-4 bg-surface border-b border-outline-variant/20"
        style={{ paddingTop: insets.top + 8, paddingBottom: 12 }}>
        <View className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} className="w-full h-full" style={{ objectFit: 'cover' }} />
          ) : (
            <View className="w-full h-full bg-primary-container items-center justify-center">
              <Text className="text-white text-lg font-bold">{displayName[0]}</Text>
            </View>
          )}
        </View>
        <Text className="text-2xl font-bold text-primary">EduFlow</Text>
      </View>

      <View className="px-4 pt-4 gap-4">
        {/* Profile Card */}
        <View className="flex-row items-center justify-between bg-surface-container-lowest p-4 rounded-xl border border-surface-container">
          <View className="gap-1">
            <Text className="text-lg font-semibold text-on-surface">{displayName}</Text>
            <View className="flex-row items-center gap-2">
              <View className="bg-tertiary-container/60 px-2 py-0.5 rounded-full">
                <Text className="text-xs font-bold text-on-surface uppercase">Rank: Senior Scholar</Text>
              </View>
              <Text className="text-xs font-semibold text-secondary">⭐ 4,850 XP</Text>
            </View>
          </View>
          <Pressable
            className="bg-primary px-4 py-2 rounded-xl"
            onPress={() => setShowProfile(true)}
          >
            <Text className="text-white text-sm font-semibold">Edit Profile</Text>
          </Pressable>
        </View>

        {/* Stats */}
        <View className="flex-row gap-3">
          <View className="flex-1 bg-surface-container-lowest p-4 rounded-xl border border-surface-container gap-2">
            <Text className="text-2xl">🕐</Text>
            <Text className="text-xs text-on-surface-variant uppercase tracking-wide">Total Hours</Text>
            <Text className="text-3xl font-bold text-on-surface">128.5</Text>
          </View>
          <View className="flex-1 bg-surface-container-lowest p-4 rounded-xl border border-surface-container gap-2">
            <Text className="text-2xl">🎓</Text>
            <Text className="text-xs text-on-surface-variant uppercase tracking-wide">Courses Done</Text>
            <Text className="text-3xl font-bold text-on-surface">14</Text>
          </View>
        </View>
        <View className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container gap-2">
          <Text className="text-2xl">🏆</Text>
          <Text className="text-xs text-on-surface-variant uppercase tracking-wide">Certificates</Text>
          <Text className="text-3xl font-bold text-on-surface">08</Text>
        </View>

        {/* Sign Out */}
        <Pressable
          className="bg-surface-container-low border border-outline-variant rounded-xl py-3 items-center mt-2"
          onPress={() => signOut()}
        >
          <Text className="text-sm font-semibold text-on-surface-variant">Sign Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}


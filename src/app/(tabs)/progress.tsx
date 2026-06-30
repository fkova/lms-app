import { ScrollView, Text, View } from '@/tw';
import { Image } from '@/tw/image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WEEKLY_DATA = [
  { day: 'Mon', pct: 40 },
  { day: 'Tue', pct: 80 },
  { day: 'Wed', pct: 65 },
  { day: 'Thu', pct: 95 },
  { day: 'Fri', pct: 30 },
  { day: 'Sat', pct: 15 },
  { day: 'Sun', pct: 25 },
];

const CHART_HEIGHT = 120;

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView className="flex-1 bg-surface" contentContainerClassName="pb-8">
      {/* Header */}
      <View className="px-4 bg-surface border-b border-outline-variant/20"
        style={{ paddingTop: insets.top + 8, paddingBottom: 12 }}>
        <Text className="text-2xl font-bold text-primary">Progress</Text>
        <Text className="text-sm text-on-surface-variant mt-1">Your learning activity</Text>
      </View>

      <View className="px-4 pt-4 gap-4">
        {/* Stats grid */}
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

        {/* Weekly Activity Chart */}
        <View className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container">
          <View className="flex-row items-end justify-between mb-4">
            <View>
              <Text className="text-lg font-semibold text-on-surface">Weekly Progress</Text>
              <Text className="text-sm text-on-surface-variant">Your learning frequency over the last 7 days.</Text>
            </View>
            <View className="items-end">
              <Text className="text-primary font-bold text-base">12h 40m</Text>
              <Text className="text-xs text-on-surface-variant">This Week</Text>
            </View>
          </View>
          <View className="flex-row items-end justify-between gap-1" style={{ height: CHART_HEIGHT + 24 }}>
            {WEEKLY_DATA.map((d) => (
              <View key={d.day} className="flex-1 items-center gap-1">
                <View
                  className="w-full rounded-t-lg bg-surface-container overflow-hidden"
                  style={{ height: CHART_HEIGHT }}
                >
                  <View
                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
                    style={{ height: `${d.pct}%` }}
                  />
                </View>
                <Text className="text-xs text-on-surface-variant">{d.day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recently Completed */}
        <View className="gap-3">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-on-surface">Recently Completed</Text>
            <Text className="text-sm font-semibold text-primary">View All</Text>
          </View>
          {[
            {
              title: 'Advanced Algorithm Design',
              when: 'Completed 2 days ago',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbyWMoUZ94C4GVgXLd93MExZ1CtFP3doraz_r9DUX6wqhj8gETwyXB109jZSiZJowfk1Zr59Ef8LXezP4-es1kssymb_ws-okp9bcu30U3jOOVCrub8Cp2ba9288qyjbUz3x4EzdKt5kBYZ9wgDjs_dPSKJtIyHEpkfGw4SuNcGWuwd92cCBeQJJ8XWWCWulhE9dSUx2t9TXvmiPX0k3n9nuo16hhBImWGB6i4D2sGiJ5BnW8nmg24XHN2lXu3KbA2VX89_QALW0oG',
            },
            {
              title: 'User Experience Essentials',
              when: 'Completed 1 week ago',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvaZNwjARHIsX06PoHISAiI7Zc8WHAU7Y4qR3j2v94XNYgMuN8I_tv5sodcOOZnBzFFnqiJOTXoqCAhZVpPI_TCB8un15v8y-S3tPr-7l7Ep-2Lsd0dDrMHU9u7BcnvIVJ7jYQ6m9jvna9rGqST7rTVX2IYwyoJRL8dXJHfPeZIDlMd9JXqz1u31s4bru-lzpF6zj8hiOZWZcI9JAlYNEnpN75qSFQFUjRyoLMqv0kmNnGGFgW01mU3eEugZyFwHw7f0PVlTcM6OdP',
            },
            {
              title: 'Cloud Infrastructure Fundamentals',
              when: 'Completed 3 weeks ago',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANVsFhoOspwx9XZltvoAOTASFERPUOf2K2BtAJTUdNtNkr-6l7VFTVBw-r2HfOpjY19210IzudwlhGADZomBdFeO1toJL_-T3ILAud5Jqelv7Q6ZYfZiZI0KPoURJH8zwpDDJpT49ECyS2EDNQKujSv8PJsxItDktTKhZw_lFQd9KXwsBQT1zMejOUjTvQOSSnYzg-fZzo0YSj8BCX5oyNqbzPWnlUw8h4RMUIhkS3gb8SFT1ZCOtvV_H2fv2Yn_DTRy2Vw4d0nI5X',
            },
          ].map((item) => (
            <View key={item.title} className="flex-row items-center gap-3 bg-surface-container-lowest p-3 rounded-xl border border-surface-container">
              <View className="w-20 h-14 rounded-lg overflow-hidden shrink-0">
                <Image source={{ uri: item.image }} className="w-full h-full" style={{ objectFit: 'cover' }} />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-on-surface" numberOfLines={1}>{item.title}</Text>
                <Text className="text-xs text-on-surface-variant">{item.when}</Text>
              </View>
              <Text className="text-tertiary-fixed-dim text-xl">✓</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

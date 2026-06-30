import { Pressable, ScrollView, Text, View } from '@/tw';
import { Image } from '@/tw/image';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MODULE_LESSONS = [
  { id: 'l1', num: 1, title: 'Introduction to State', duration: '08:20', status: 'completed' as const },
  { id: 'l4', num: 4, title: 'Context API Deep Dive', duration: '24:00', status: 'active' as const },
  { id: 'l5', num: 5, title: 'Custom Hooks Patterns', duration: '15:45', status: 'locked' as const },
  { id: 'l6', num: 6, title: 'Performance Tuning', duration: '32:10', status: 'locked' as const },
  { id: 'l7', num: 7, title: 'Deployment Strategies', duration: '12:00', status: 'locked' as const },
];

export default function LessonPlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-surface">
      {/* Header */}
      <View
        className="flex-row items-center justify-between px-4 bg-surface border-b border-outline-variant/20"
        style={{ paddingTop: insets.top + 8, paddingBottom: 8 }}
      >
        <View className="flex-row items-center gap-3">
          <Pressable onPress={() => router.back()} className="p-1">
            <Text className="text-2xl text-primary">←</Text>
          </Pressable>
          <Text className="text-xl font-bold text-primary">EduFlow</Text>
        </View>
        <Text className="text-2xl text-on-surface-variant">🔍</Text>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="pb-8">
        {/* Video Player */}
        <View style={{ aspectRatio: 16 / 9 }} className="bg-inverse-surface relative">
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7THS93oudrJ5Ov6HYOvaLDez_pRJcKjIrY5NyKV1DNIxZY7txdsrAyLD_5bnUgn4AeJi4lSkuloiiiVMLy6S76RDHOB9K6gCGPtbkroIknm2MWCSpzhxUdy0At7M6euHvPJJAh8pGtIWv5eDZj1EO72xaZJK-unJ3IKGIRYTETOdEXhrsmBUKpCfvltCuPoFhvSxxo4H5dGBenplH9umefxyPfWKYLJkvB5WvcZbCpmbRi4hxxERX5cfPsOEKaeZOLtVIodOjN37F' }}
            className="w-full h-full opacity-80"
            style={{ objectFit: 'cover' }}
          />
          {/* Controls overlay */}
          <View className="absolute inset-0 justify-end">
            <View className="bg-black/50 p-4 gap-2">
              {/* Progress */}
              <View className="flex-row items-center gap-2">
                <Text className="text-white text-xs">12:45</Text>
                <View className="flex-1 h-1.5 bg-white/30 rounded-full">
                  <View className="h-full w-[45%] bg-primary-container rounded-full" />
                </View>
                <Text className="text-white text-xs">24:00</Text>
              </View>
              {/* Buttons */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row gap-4">
                  {['▶', '↺', '↻', '🔊'].map((icon, i) => (
                    <Pressable key={i}><Text className="text-white text-xl">{icon}</Text></Pressable>
                  ))}
                </View>
                <View className="flex-row gap-4">
                  {['⚙', '⛶'].map((icon, i) => (
                    <Pressable key={i}><Text className="text-white text-xl">{icon}</Text></Pressable>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 pt-4 gap-4">
          {/* Lesson info */}
          <View>
            <View className="flex-row items-center gap-2 mb-2">
              <View className="bg-secondary-container/40 px-2 py-0.5 rounded-lg">
                <Text className="text-xs font-semibold text-on-secondary-container">Module 3</Text>
              </View>
              <Text className="text-xs text-on-surface-variant">• Lesson 4 of 12</Text>
            </View>
            <Text className="text-xl font-bold text-on-surface mb-2">Advanced State Management with Context API</Text>
            <Text className="text-sm text-on-surface-variant leading-relaxed">
              In this comprehensive lesson, we'll dive deep into how to manage complex application states using React's built-in Context API. We will explore performance optimization patterns, when to use Context over Redux, and how to structure your providers for maximum scalability.
            </Text>
          </View>

          {/* Navigation Buttons */}
          <View className="flex-row gap-3 pt-2 border-t border-outline-variant/30">
            <Pressable
              className="flex-1 border border-primary py-3 rounded-xl flex-row items-center justify-center gap-1"
              onPress={() => router.back()}
            >
              <Text className="text-primary">‹</Text>
              <Text className="text-sm font-semibold text-primary">Previous</Text>
            </Pressable>
            <Pressable className="flex-1 bg-primary py-3 rounded-xl flex-row items-center justify-center gap-1">
              <Text className="text-sm font-semibold text-white">Next Lesson</Text>
              <Text className="text-white">›</Text>
            </Pressable>
          </View>

          {/* Module Lessons */}
          <View className="bg-surface-container-low rounded-xl p-4 gap-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-semibold text-on-surface">Module Lessons</Text>
              <Text className="text-sm font-semibold text-primary">45% Done</Text>
            </View>
            {/* Progress bar */}
            <View className="h-1 bg-outline-variant rounded-full overflow-hidden">
              <View className="h-full w-[45%] bg-tertiary-container" />
            </View>
            {/* Lesson list */}
            <View className="gap-2">
              {MODULE_LESSONS.map((lesson) => {
                const isActive = lesson.id === id || (id === 'l1' && lesson.status === 'active');
                const isCompleted = lesson.status === 'completed';
                const isLocked = lesson.status === 'locked';

                return (
                  <Pressable
                    key={lesson.id}
                    className={`flex-row items-center gap-3 p-3 rounded-lg ${isActive ? 'border-l-4 border-primary bg-surface-container-lowest' : isLocked ? 'opacity-60 bg-surface-container-lowest/50' : 'bg-surface-container-lowest'}`}
                    onPress={() => !isLocked && router.push(`/lesson/${lesson.id}`)}
                  >
                    <View className={`w-6 h-6 rounded-full items-center justify-center ${isCompleted ? 'bg-tertiary-container' : isActive ? 'border-2 border-primary' : 'bg-outline-variant'}`}>
                      <Text className={`text-xs font-bold ${isCompleted ? 'text-white' : isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
                        {isCompleted ? '✓' : isActive ? '▶' : '🔒'}
                      </Text>
                    </View>
                    <View className="flex-1">
                      <Text className={`text-sm font-semibold ${isActive ? 'text-primary' : 'text-on-surface'}`} numberOfLines={1}>
                        {lesson.num}. {lesson.title}
                      </Text>
                      <Text className="text-xs text-on-surface-variant">
                        {lesson.duration} • {isCompleted ? 'Completed' : isActive ? 'In Progress' : 'Locked'}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

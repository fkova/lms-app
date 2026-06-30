import { Pressable, ScrollView, Text, View } from '@/tw';
import { Image } from '@/tw/image';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MODULES = [
  {
    id: 'm1',
    title: 'Figma Fundamentals',
    subtitle: '6 Lessons • 45m',
    lessons: [
      { id: 'l1', title: 'Interface Introduction', duration: '08:20', locked: false },
      { id: 'l2', title: 'Frames vs Groups', duration: '12:45', locked: false },
      { id: 'l3', title: 'Auto Layout Mastery', duration: '18:00', locked: true },
    ],
  },
  {
    id: 'm2',
    title: 'Design Systems',
    subtitle: '12 Lessons • 2h 15m',
    lessons: [
      { id: 'l4', title: 'Color Tokens', duration: '14:20', locked: true },
      { id: 'l5', title: 'Typography Scale', duration: '11:00', locked: true },
    ],
  },
  {
    id: 'm3',
    title: 'Advanced Prototyping',
    subtitle: '8 Lessons • 1h 50m',
    lessons: [
      { id: 'l6', title: 'Micro Interactions', duration: '22:10', locked: true },
    ],
  },
];

export default function CourseDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const [expandedModule, setExpandedModule] = useState<string>('m1');

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
        <Text className="text-2xl text-on-surface-variant">↗</Text>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="pb-8">
        {/* Hero Image */}
        <View className="mx-4 mt-4 rounded-xl overflow-hidden" style={{ aspectRatio: 16 / 9 }}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVhXKRN2m8C7YUoJCg_9D6HEHscqevtoEqPPW0q2_m981G9DpGASECpd3uoo4eLnhrVhTGiBn866C4hBExtjAzaVlSZFBfiekWygnXI1Oqj6xrmAb_-RxuV-_XH5D5dYUKIix_cO7In7pa6uXZf9qW1-xP6nMhvRlQkdBrNi7jzpPMYovB_Z3OoQWkAlPMNf153zsm458KAMx8sct7-3fYEIm1MdZMi_6qoHKCYe87O1ib-n8_1saf5seAE5fla729gUgdYBspenSS' }}
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
          <View className="absolute inset-0 bg-black/50" />
          <View className="absolute bottom-0 left-0 right-0 p-4 flex-row items-end justify-between">
            <View className="gap-1">
              <View className="bg-primary self-start px-2 py-0.5 rounded-full">
                <Text className="text-white text-xs font-bold uppercase">Bestseller</Text>
              </View>
              <Text className="text-white text-xl font-bold">Mastering UI/UX with Figma</Text>
            </View>
            <Pressable
              className="w-14 h-14 bg-primary-container rounded-full items-center justify-center"
              onPress={() => router.push(`/lesson/l1`)}
            >
              <Text className="text-white text-2xl">▶</Text>
            </Pressable>
          </View>
        </View>

        <View className="px-4 pt-4 gap-4">
          {/* CTA Button */}
          <Pressable
            className="w-full bg-primary py-4 rounded-xl items-center flex-row justify-center gap-2"
            onPress={() => router.push(`/lesson/l1`)}
          >
            <Text className="text-white text-sm font-semibold">Start Learning</Text>
            <Text className="text-white text-base">⚡</Text>
          </Pressable>

          {/* Stats */}
          <View className="flex-row gap-3">
            {[
              { icon: '🕐', label: '12.5 Hours' },
              { icon: '📖', label: '42 Lessons' },
              { icon: '⭐', label: '4.9 (2k+)' },
            ].map((stat) => (
              <View key={stat.label} className="flex-1 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30 items-center gap-1">
                <Text className="text-xl">{stat.icon}</Text>
                <Text className="text-xs text-on-surface-variant">{stat.label}</Text>
              </View>
            ))}
          </View>

          {/* About */}
          <View className="gap-2">
            <Text className="text-lg font-semibold text-on-surface">About this Course</Text>
            <Text className="text-sm text-on-surface-variant leading-relaxed">
              Unlock the power of Figma and transform your design workflow. In this comprehensive course, we cover everything from atomic design systems to high-fidelity prototyping and handoff. Perfect for aspiring designers and developers looking to level up.
            </Text>
          </View>

          {/* Curriculum */}
          <View className="gap-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-semibold text-on-surface">Course Curriculum</Text>
              <Text className="text-sm font-semibold text-primary">Expand All</Text>
            </View>

            {MODULES.map((mod) => {
              const isOpen = expandedModule === mod.id;
              return (
                <View key={mod.id} className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden">
                  <Pressable
                    className="flex-row items-center justify-between p-4"
                    onPress={() => setExpandedModule(isOpen ? '' : mod.id)}
                  >
                    <View className="flex-row items-center gap-3">
                      <View className="w-8 h-8 bg-surface-container-high rounded-full items-center justify-center">
                        <Text className="text-xs font-bold text-primary">{MODULES.indexOf(mod) + 1}</Text>
                      </View>
                      <View>
                        <Text className="text-sm font-semibold text-on-surface">{mod.title}</Text>
                        <Text className="text-xs text-on-surface-variant">{mod.subtitle}</Text>
                      </View>
                    </View>
                    <Text className="text-on-surface-variant">{isOpen ? '∧' : '∨'}</Text>
                  </Pressable>

                  {isOpen && (
                    <View className="px-4 pb-4 gap-3 border-t border-outline-variant/30 pt-3">
                      {mod.lessons.map((lesson) => (
                        <Pressable
                          key={lesson.id}
                          className="flex-row items-center justify-between"
                          onPress={() => !lesson.locked && router.push(`/lesson/${lesson.id}`)}
                        >
                          <View className="flex-row items-center gap-2">
                            <Text className={lesson.locked ? 'text-outline' : 'text-primary'}>
                              {lesson.locked ? '🔒' : '▶'}
                            </Text>
                            <Text className={`text-sm ${lesson.locked ? 'text-outline' : 'text-on-surface-variant'}`}>
                              {lesson.title}
                            </Text>
                          </View>
                          <Text className="text-xs text-on-surface-variant">{lesson.duration}</Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

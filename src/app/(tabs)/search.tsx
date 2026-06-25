import { FlatList } from 'react-native';
import { View, Text, Pressable } from '@/tw';
import type { Database } from '@/lib/database.types';
import { useCourses, useDeleteCourse } from '@/services/courses';

type Course = Database['public']['Tables']['courses']['Row'];

export default function SearchScreen() {
  const { data: courses = [] } = useCourses();
  const deleteCourse = useDeleteCourse();

  return (
    <View className="flex-1">
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
            <Text className="text-base flex-1">{item.title}</Text>
            <Pressable onPress={() => deleteCourse.mutate(item.id)} className="pl-4 py-1">
              <Text className="text-red-500 text-lg">✕</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
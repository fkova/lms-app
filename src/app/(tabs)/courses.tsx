import { useCourses } from '@/services/courses';
import { Pressable, ScrollView, Text, View } from '@/tw';
import { Image } from '@/tw/image';
import { router } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FALLBACK_COURSES = [
  {
    id: 'c1',
    title: 'Mastering UI/UX with Figma',
    description: 'Comprehensive Figma course from atomic design to prototyping.',
    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVhXKRN2m8C7YUoJCg_9D6HEHscqevtoEqPPW0q2_m981G9DpGASECpd3uoo4eLnhrVhTGiBn866C4hBExtjAzaVlSZFBfiekWygnXI1Oqj6xrmAb_-RxuV-_XH5D5dYUKIix_cO7In7pa6uXZf9qW1-xP6nMhvRlQkdBrNi7jzpPMYovB_Z3OoQWkAlPMNf153zsm458KAMx8sct7-3fYEIm1MdZMi_6qoHKCYe87O1ib-n8_1saf5seAE5fla729gUgdYBspenSS',
    price: 7999,
    category: 'Design',
  },
  {
    id: 'c2',
    title: 'Advanced React Patterns',
    description: 'Deep dive into React patterns and advanced component design.',
    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj0QOTWH6Ylhb483xUPAJHMBqe91XexeIIHxHsb6Lqrq-3XdJ74PqLGB_QNbFR_UaXlMqMQvhFbKnITJj4BHOjgfp824t25C8F3WszUF4rSQiobkw5XdoLipRilSNvbSK9S71nHteddR8L4WDE4zUYqJ3hi337yrl93N0zD4KLo0ZZEDAvfKnnTTw5KjqE4V4XiBHCmWK-D4gWcZnKKT2LJrQygllNRa3gArItnsfSt7i0F9VmUQ0wbMwzYGBXTEmYG4Twen5jJzkT',
    price: 8999,
    category: 'Development',
  },
  {
    id: 'c3',
    title: 'Cloud Architecture on AWS',
    description: 'Learn to architect scalable cloud systems on AWS.',
    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmI6yWdvTztylzFbnkBVH86hasQKPxeDSl_IBBrm1kWC-spqUn5mHjg8yAW7YOBEdRmdCp2kOZsjT-jqkGZb67q5IKmDmzHlkbJzm2r1qel6b4cujVEPkGWeBg0gPdBZ_-4Z6XjEYlEG-_fPU3xG44gO41l7R0Y_rEaky2nHh8URV5Ah07QdFedr9_THvmjCQSRZaZV4NMcyc4W7PsNqc4abRhcmrm5QsKUefBR4rnpTs3hK2PxiApETnp6-BmPmx_Qr-7Ws9H7kF9',
    price: 12499,
    category: 'Development',
  },
];

export default function CoursesScreen() {
  const insets = useSafeAreaInsets();
  const { data: courses, isLoading } = useCourses();

  const displayCourses = courses && courses.length > 0 ? courses : FALLBACK_COURSES;

  return (
    <ScrollView className="flex-1 bg-surface" contentContainerClassName="pb-8">
      {/* Header */}
      <View className="px-4 bg-surface border-b border-outline-variant/20"
        style={{ paddingTop: insets.top + 8, paddingBottom: 12 }}>
        <Text className="text-2xl font-bold text-primary">My Courses</Text>
        <Text className="text-sm text-on-surface-variant mt-1">Continue where you left off</Text>
      </View>

      <View className="px-4 pt-4 gap-4">
        {isLoading && (
          <View className="py-12 items-center">
            <ActivityIndicator color="#3525cd" />
          </View>
        )}

        {displayCourses.map((course) => (
          <Pressable
            key={course.id}
            className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 flex-row"
            onPress={() => router.push(`/course/${course.id}`)}
          >
            <View className="w-28 h-24 relative">
              {course.image_url ? (
                <Image source={{ uri: course.image_url }} className="w-full h-full" style={{ objectFit: 'cover' }} />
              ) : (
                <View className="w-full h-full bg-surface-container items-center justify-center">
                  <Text className="text-3xl">📚</Text>
                </View>
              )}
            </View>
            <View className="flex-1 p-3 gap-1">
              <Text className="text-sm font-semibold text-on-surface" numberOfLines={2}>{course.title}</Text>
              {course.category && (
                <View className="self-start bg-surface-container-low px-2 py-0.5 rounded-full">
                  <Text className="text-xs text-on-surface-variant">{course.category}</Text>
                </View>
              )}
              <Text className="text-sm font-semibold text-primary mt-auto">
                {course.price ? `$${(course.price / 100).toFixed(2)}` : 'Free'}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

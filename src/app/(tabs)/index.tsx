import { useCourses } from '@/services/courses';
import { Pressable, ScrollView, Text, TextInput, View } from '@/tw';
import { Image } from '@/tw/image';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CONTINUE_LEARNING = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    lesson: 'Lesson 12 of 30',
    progress: 65,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj0QOTWH6Ylhb483xUPAJHMBqe91XexeIIHxHsb6Lqrq-3XdJ74PqLGB_QNbFR_UaXlMqMQvhFbKnITJj4BHOjgfp824t25C8F3WszUF4rSQiobkw5XdoLipRilSNvbSK9S71nHteddR8L4WDE4zUYqJ3hi337yrl93N0zD4KLo0ZZEDAvfKnnTTw5KjqE4V4XiBHCmWK-D4gWcZnKKT2LJrQygllNRa3gArItnsfSt7i0F9VmUQ0wbMwzYGBXTEmYG4Twen5jJzkT',
  },
  {
    id: '2',
    title: 'UI/UX Foundations',
    lesson: 'Lesson 4 of 12',
    progress: 33,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2pIIE_nvLvUArlCjo-Xy2POKgZ_cry-odN9ItwVQ_nMACuIYPCEJFabaPpA5aFxsp_Yk_6TcKLO59y_3g12h1B2TXIWdr_CKRntaGOdh5VaijPX3Qpg3Em5UCbpEK-NYY75vH7qVapKXFACWQz0REGchzVE_JWKRUuXgT-PadyhGBCd9F23xJpPX9PmETb5oMyY30qsCXCas71V5UahbXmbHkLA-2y6ljm-2alKFBrsER-lTPVQD8dIPJ3DBs1f1gs4AwzF08MSgk',
  },
];

const CATEGORIES = [
  { id: '1', label: 'Development', icon: '⌨️', color: 'bg-blue-50' },
  { id: '2', label: 'Design', icon: '🎨', color: 'bg-green-50' },
  { id: '3', label: 'Business', icon: '📈', color: 'bg-cyan-50' },
  { id: '4', label: 'Marketing', icon: '📣', color: 'bg-red-50' },
];

const RECOMMENDED = [
  {
    id: 'r1',
    title: 'Mastering Machine Learning with Python',
    instructor: 'Dr. Sarah Jenkins',
    rating: '4.9',
    reviews: '1.2k',
    price: '$89.99',
    badge: 'New',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJXgFGKobTUIVNO2xK3Tupt9d3Flt9BDqzk3PAMH5whACEp8-A6KQapT4IoTNp-cKTslH-IrvZkTkLl1CP5BFh-f2NqIw3PptkY68aZ_1vx3SBguFq9Pq_d0gDH8_X7S_a02KLordCAnVu_t15G45bHv3nOmdMlCcoEbWCxCfycP0jGtV2FWm4iVZB2S1UIsQmcHgazt3EIXb0Q3PdVYP9JzEckUzqpiOW8BBv-YmBr-JWtEU9AP30lLqjnyDJVzuRw5mOy-Ni26CX',
  },
  {
    id: 'r2',
    title: 'Cloud Architecture on AWS',
    instructor: 'Mark Chen',
    rating: '4.7',
    reviews: '850',
    price: '$124.99',
    badge: 'Popular',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmI6yWdvTztylzFbnkBVH86hasQKPxeDSl_IBBrm1kWC-spqUn5mHjg8yAW7YOBEdRmdCp2kOZsjT-jqkGZb67q5IKmDmzHlkbJzm2r1qel6b4cujVEPkGWeBg0gPdBZ_-4Z6XjEYlEG-_fPU3xG44gO41l7R0Y_rEaky2nHh8URV5Ah07QdFedr9_THvmjCQSRZaZV4NMcyc4W7PsNqc4abRhcmrm5QsKUefBR4rnpTs3hK2PxiApETnp6-BmPmx_Qr-7Ws9H7kF9',
  },
  {
    id: 'r3',
    title: 'Digital Illustration: From Sketch to Final',
    instructor: 'Elena Rodriguez',
    rating: '4.8',
    reviews: '2.1k',
    price: '$54.99',
    badge: null,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM6ywi9uwQwbs4O5ic1KswSm7AuOD-EPNBXzclAqbs11KAqMSiLsaJg2xvjxlWH_oW__5SKLN6nIRrEWxjhilyEXYCd_-dWrkWXqgwT9T2Brnr-Gl1ekCa_dBSQSl1dq_7BZhXylZFTNzrk7xxO5onBZ9GUZewyhSluaIIRP8_qO8vxT0ocYM9i88BU1_QaAdJWIU5YlofqhVublIJ9J3nzOGcC9KSQ3JhTiC4eOpEsgRmeEZL72gxLEE2CSIlbMwYVNGlgmIyKDXX',
  },
];

export default function DiscoverScreen() {
  const insets = useSafeAreaInsets();
  const { data: courses = [] } = useCourses();

  const recommendedCourses = courses.length > 0
    ? courses.slice(0, 3).map((c) => ({
        id: c.id,
        title: c.title,
        instructor: 'Instructor',
        rating: '4.8',
        reviews: '1k',
        price: c.price ? `$${(c.price / 100).toFixed(2)}` : 'Free',
        badge: null,
        image: c.image_url ?? null,
      }))
    : RECOMMENDED;

  return (
    <ScrollView
      className="flex-1 bg-surface"
      contentContainerClassName="pb-8"
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 bg-surface border-b border-outline-variant/20"
        style={{ paddingTop: insets.top + 8, paddingBottom: 8 }}>
        <View className="flex-row items-center gap-2">
          <View className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJj6tVtffneoeXp7aTvJELOpZU-IFT49wjmhQ5F4hSUAcrwzCRaqhtMM4ga1625bUGWanMyS6YBaABAXXl0kDpAZzXlrPygiMAvuIjbIHn0R0hm0e8iw7by8TPXEBrrauUU-n0l_nMQsJ247nhDu9amP4DUby4m-yLzbR5RsW3WX7uECQAKEued70W7CHTNY2hkIUQ83MtY_COTvDKEC5Me-64J7sxXoCZQmoaeibMuOM3tUv4s7RyO8bZu8b6LOB4Cloean714WYA' }}
              className="w-full h-full"
            />
          </View>
          <View>
            <Text className="text-xs text-on-surface-variant">Welcome back,</Text>
            <Text className="text-lg font-bold text-primary">EduFlow</Text>
          </View>
        </View>
        <Pressable className="w-10 h-10 items-center justify-center">
          <Text className="text-2xl text-primary">🔍</Text>
        </Pressable>
      </View>

      <View className="px-4 pt-4 gap-6">
        {/* Search */}
        <View className="relative">
          <TextInput
            className="w-full h-12 bg-surface-container-lowest border border-outline-variant rounded-xl px-10 text-sm text-on-surface"
            placeholder="Search for courses, skills, or mentors..."
            placeholderTextColor="#777587"
          />
        </View>

        {/* Continue Learning */}
        <View className="gap-3">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-on-surface">Continue Learning</Text>
            <Text className="text-sm font-semibold text-primary">View All</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-4" contentContainerClassName="px-4 gap-3">
            {CONTINUE_LEARNING.map((course) => (
              <Pressable
                key={course.id}
                className="w-64 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30"
                onPress={() => router.push(`/course/${course.id}`)}
              >
                <View className="h-36 relative">
                  <Image source={{ uri: course.image }} className="w-full h-full" style={{ objectFit: 'cover' }} />
                  <View className="absolute inset-0 bg-black/40" />
                  <View className="absolute bottom-2 left-2 flex-row items-center bg-primary/90 px-2 py-0.5 rounded-full gap-1">
                    <Text className="text-white text-xs font-bold">{course.lesson}</Text>
                  </View>
                </View>
                <View className="p-3 gap-2">
                  <Text className="text-base font-semibold text-on-surface" numberOfLines={1}>{course.title}</Text>
                  <View className="gap-1">
                    <View className="flex-row justify-between">
                      <Text className="text-xs text-on-surface-variant">Progress</Text>
                      <Text className="text-xs text-on-surface-variant">{course.progress}%</Text>
                    </View>
                    <View className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <View className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }} />
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Popular Categories */}
        <View className="gap-3">
          <Text className="text-lg font-semibold text-on-surface">Popular Categories</Text>
          <View className="flex-row flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <Pressable
                key={cat.id}
                className="flex-1 min-w-[40%] bg-surface-container-low p-4 rounded-xl items-center gap-2"
              >
                <Text className="text-2xl">{cat.icon}</Text>
                <Text className="text-sm font-semibold text-on-surface">{cat.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Recommended for You */}
        <View className="gap-3">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-on-surface">Recommended for You</Text>
            <Text className="text-sm font-semibold text-primary">See All</Text>
          </View>
          <View className="gap-4">
            {recommendedCourses.map((course) => (
              <Pressable
                key={course.id}
                className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30"
                onPress={() => router.push(`/course/${course.id}`)}
              >
                <View style={{ aspectRatio: 16 / 9 }} className="relative">
                  {course.image ? (
                    <Image source={{ uri: course.image }} className="w-full h-full" style={{ objectFit: 'cover' }} />
                  ) : (
                    <View className="w-full h-full bg-surface-container items-center justify-center">
                      <Text className="text-4xl">📚</Text>
                    </View>
                  )}
                  {course.badge && (
                    <View className="absolute top-3 right-3 bg-white/90 px-2 py-0.5 rounded-lg">
                      <Text className="text-xs font-bold text-primary">{course.badge}</Text>
                    </View>
                  )}
                </View>
                <View className="p-3 gap-2">
                  <View className="flex-row items-start justify-between gap-2">
                    <Text className="text-base font-semibold text-on-surface flex-1" numberOfLines={2}>{course.title}</Text>
                  </View>
                  <Text className="text-xs text-on-surface-variant">{course.instructor}</Text>
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-1">
                      <Text className="text-secondary text-sm">⭐</Text>
                      <Text className="text-sm font-semibold text-on-surface">{course.rating}</Text>
                      <Text className="text-xs text-outline">({course.reviews})</Text>
                    </View>
                    <Text className="text-base font-semibold text-primary">{course.price}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        {/* PRO Banner */}
        <View className="bg-primary p-6 rounded-2xl overflow-hidden">
          <View className="mb-2">
            <View className="bg-white/20 self-start px-3 py-1 rounded-full mb-3">
              <Text className="text-white text-xs font-bold uppercase tracking-widest">PRO PLUS</Text>
            </View>
            <Text className="text-white text-2xl font-bold mb-2">Unlock Unlimited Access to 5000+ Courses</Text>
            <Text className="text-primary-fixed/90 text-sm mb-4">Experience the best of EduFlow with a Pro subscription. Start your 7-day free trial today.</Text>
          </View>
          <Pressable className="bg-white rounded-xl py-3 px-6 self-start">
            <Text className="text-primary text-sm font-semibold">Start Free Trial</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
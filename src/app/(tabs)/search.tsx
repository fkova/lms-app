import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSupabase } from '@/lib/supabase'

export default function SearchScreen() {
  const [courses, setCourses] = useState<string[]>([])

  const supabase = useSupabase()

  useEffect(() => {
    supabase.from('courses').select('title').then(({ data, error }) => {
      if (error) {
        console.error('Error fetching courses:', error)
      } else {
        const titles = data.map((c: any) => c.title)
        setCourses(titles)
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      {courses.length > 0 ? (
        <FlatList
          data={courses}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={styles.courseItem}>{item}</Text>
          )}
          contentContainerStyle={{ gap: 8 }}
        />
      ) : (
        <Text style={styles.loading}>Loading courses...</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 60,
    gap: 8,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseItem: {
    fontSize: 16,
    color: '#333',
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
})

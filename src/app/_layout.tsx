import "@/global.css";

import { Stack } from "expo-router";

import { ClerkProvider, useAuth } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { AuthView } from '@clerk/expo/native'
import React, { useState } from "react";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

function RootStack() {
  const { isSignedIn, isLoaded } = useAuth({ treatPendingAsSignedOut: false })
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  if (!isLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (!isSignedIn) {
    return <AuthView onDismiss={() => setIsAuthOpen(false)} />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <RootStack />
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

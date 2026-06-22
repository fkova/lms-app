@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — Expo dev server (then press `i`/`a`/`w` for iOS/Android/web)
- `npm run ios` / `npm run android` / `npm run web` — start directly on a platform
- `npm run lint` — `expo lint` (no test runner is configured)
- `npm run reset-project` — moves the current `app/` starter into `app-example/` and creates a fresh `app/` (one-time scaffolding helper from the Expo template; not for routine use)

There is no test script. If asked to "run tests," confirm with the user before adding a test framework.

## Architecture

Expo SDK **55** + React Native **0.83** + React **19**, using **Expo Router** for file-based routing.

- Routes live under `src/app/`. `src/app/_layout.tsx` is the root layout (a `Stack` from `expo-router`); `src/app/index.tsx` is the home route. New screens are added by creating files in this tree, not by registering navigators manually.
- Path aliases (from `tsconfig.json`): `@/*` → `./src/*`, `@/assets/*` → `./assets/*`. Use these for imports rather than relative paths.
- `app.json` enables two experiments that affect how you write code:
  - `typedRoutes`: route strings (e.g. for `<Link href=...>`, `router.push(...)`) are type-checked against the file tree. Generated types live in `.expo/types/`.
  - `reactCompiler`: React Compiler is on, so do **not** add manual `useMemo`/`useCallback`/`React.memo` purely for memoization — let the compiler handle it. Avoid patterns that defeat it (mutating props, conditional hooks, etc.).
- Entry point is `expo-router/entry` (see `package.json` `main`) — there is no `App.tsx`/`index.js`.
- App scheme for deep links: `lmsapp` (see `app.json`).

## Styling: Tailwind CSS v4 + NativeWind v5

This project uses **Tailwind CSS v4** with **NativeWind v5** for universal styling across web and native. Styles are written as Tailwind class names and applied through the wrapper components in `src/tw/index.tsx`.

**Wrapper Components** (import from `@/tw`):
- `View`, `Text`, `Pressable`, `TextInput`, `ScrollView`, `TouchableHighlight`, `AnimatedScrollView` — React Native components wrapped with `useCssElement` to support Tailwind class names via the `className` prop.
- `Link` — `expo-router` `Link` with Tailwind support.
- `useCSSVariable` — Access CSS variables on native (via `react-native-css`) and web (via `var()`).

**Usage:**
```tsx
import { View, Text, Pressable } from '@/tw';

<View className="flex-1 bg-white px-4 py-2">
  <Text className="text-lg font-semibold text-gray-900">Hello</Text>
  <Pressable className="bg-blue-500 rounded-lg px-4 py-2">
    <Text className="text-white font-medium">Press me</Text>
  </Pressable>
</View>
```

**How it works:**
- `react-native-css` on native converts Tailwind classes to React Native styles.
- On web, classes are applied directly (standard Tailwind).
- `ScrollView` and `AnimatedScrollView` support both `className` and `contentContainerClassName` for inner scrollable content.

## Expo SDK 55 specifics

`AGENTS.md` enforces this and it matters: APIs and config across `expo-router`, `expo-image`, `expo-glass-effect`, `expo-symbols`, `react-native-reanimated` 4, and `react-native-worklets` have churned recently. Before writing non-trivial code against any `expo-*` or `react-native-*` package, consult https://docs.expo.dev/versions/v55.0.0/ for the version actually pinned in `package.json` rather than relying on memory of older SDKs.

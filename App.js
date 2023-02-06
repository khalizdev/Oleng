import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
    </TailwindProvider>
  );
}
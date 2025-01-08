import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { images } from "../constants";
import CustomButton from '@/components/CustomButton';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <StatusBar style="light" backgroundColor="transparent" translucent />

      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="w-full justify-center items-center h-full px-4">

            {/* Logo */}
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />

            {/* Cards Image */}
            <Image
              source={images.cards}
              style={{
                maxWidth: 380,
                width: '100%',
                height: 298,
                aspectRatio: 380 / 298, // Ensures the correct aspect ratio
              }}
              resizeMode="contain"
            />

            {/* Header Text */}
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless{"\n"}
                Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
            </View>

            {/* Subtext */}
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              For your Portuguese Journey
            </Text>

            {/* Custom Button */}
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-[80%] max-w-[300px] mt-7"
            />

            {/* Other Elements */}
            {/* <Text className="text-3xl font-pblack text-white mt-5">Learn With Tânia</Text> */}
            {/* <StatusBar style="auto" /> */}
            {/* <Link href="/calendar" style={{ color: 'green', marginTop: 20 }}>Go to Home</Link> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

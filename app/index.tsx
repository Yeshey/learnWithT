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
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center h-full px-4">


            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />

            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[298px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            For your Portuguese Journey
          </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />

            <Text className="text-3xl font-pblack text-white">Learn With Tânia</Text>
            <StatusBar style="auto" />
            <Link href="/calendar" style={{ color: 'green' }}>Go to Home</Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

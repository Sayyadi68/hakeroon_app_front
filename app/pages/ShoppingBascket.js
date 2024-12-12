import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import "nativewind";

// Data for the gyms
const gyms = [
  { name: 'سالن ورزشی قدس', startTime: '10:30', endTime: '12:00', duration: '2:00' },
  { name: 'سالن ورزشی المپیک', startTime: '14:00', endTime: '16:00', duration: '2:00' },
  { name: 'سالن ورزشی زیوران', startTime: '8:00', endTime: '10:00', duration: '2:00' },

  // Add more gyms here
];

const ShoppingBascket = () => {
  return (
    <ScrollView className="">
      <Image
        className=""
        resizeMode="cover"
        source={require("../../assets/images/Tiket_vector.png")}
      />

      {gyms.map((gym, index) => (
        <TouchableOpacity key={index} className="mt-10 px-6">
          <View className="flex-col flex justify-center items-center">
            <Text className="w-full text-xl text-center font-bold">
              {gym.name}
            </Text>
          </View>

          <View className="flex flex-row justify-between px-6 mt-4">
            <View className="flex flex-col justify-center items-center">
              <Ionicons name="alert-circle-outline" size={32} color="orange" />
              <Text className="w-full text-sm font-bold  text-gray-500">
                پایان
              </Text>
              <Text className="w-full text-sm font-bold text-center text-gray-500">
                {gym.endTime}
              </Text>
            </View>

            <View className="w-[70%]">
              <View className=" border-gray-500 border border-dashed top-5 h-0 " />
              <Text className="w-full text-sm font-bold text-center mt-8">
                {gym.duration} ساعت
              </Text>
            </View>

            <View className="flex flex-col justify-center items-center">
              <Ionicons name="stopwatch-outline" size={32} color="red" />
              <Text className="w-full text-sm font-bold  text-gray-500">
                شروع
              </Text>
              <Text className="w-full text-sm font-bold text-center text-gray-500">
                {gym.startTime}
              </Text>
            </View>
          </View>

          <View className="bg-black border-black border mt-5" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ShoppingBascket;
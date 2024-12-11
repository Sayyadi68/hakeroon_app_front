import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";

const FootballUI = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Player Illustration */}
      <View className="p-4 items-center">
        <Image
          source={{ uri: "../../assets/images/home image.png" }}
          className="w-40 h-40"
        />
        <View className="absolute top-24 right-10 bg-orange-300 rounded-full w-20 h-20 items-center justify-center">
          <Text className="text-white text-lg font-bold">58%</Text>
        </View>
      </View>

      {/* Filter Section */}
      <View className="flex-row justify-around py-2 bg-white">
        {["وضعیت", "قیمت", "محله", "رضایت"].map((filter) => (
          <Pressable
            key={filter}
            className="bg-orange-200 py-2 px-4 rounded-md"
          >
            <Text className="text-orange-700 font-bold text-center">
              {filter}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-xl font-bold text-right px-8 pt-4">
        سالن های فوتسال
      </Text>
      {/* Football Halls List */}
      <ScrollView className="flex flex-1 p-4">
        {["سالن دبیرستان هدایتی", "سالن قدس", "سالن حضرت امیرالمومنین"].map(
          (title, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between bg-[#FFEBCF] border border-orange-300 px-8 py-3 mb-4 rounded-full shadow-md"
              >
              <View className="w-[50px] h-[50px] bg-white rounded-full"></View>
              <View className="flex-1 text-right">
                <Text className="text-right text-lg font-bold text-orange-700 mb-2">
                  {title}
                </Text>
                <Text className="text-right text-gray-600">
                  خیابان کلهری، خیابان آل یاسین، سالن هدایتی
                </Text>
                <View className="flex flex-row self-end gap-6 mt-2">
                  <Text className="text-right text-yellow-500 font-bold">
                    ⭐️⭐️⭐️⭐️⭐️
                  </Text>
                  <Text className="text-right text-yellow-500 font-bold">
                    میزان رضایت ورزشکاران
                  </Text>
                </View>
              </View>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
};

export default FootballUI;

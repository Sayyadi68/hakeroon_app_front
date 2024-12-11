import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const WelcomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      {/* تصویر */}
      <Image
        source={require("../../assets/images/screenOne.png")}
        className="w-48 h-48"
        resizeMode="contain"
      />

      {/* توضیحات */}
      <View className="items-center mt-4">
        <Text className="text-lg font-bold mb-2 text-center">نرم افزار ورزشیار چکار می‌کنه</Text>
        <Text className="text-sm text-gray-600 text-center">
          ورزشیار کمک میکنه بهتون که راحت تر بتونید سالن ها و باشگاه های اطرافتون رو پیدا کنید
        </Text>
      </View>

      {/* RadioGroup برای نشانگر وضعیت */}
      <View className="flex-row mt-4 space-x-2">
        {["1", "2", "3"].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            className={`w-4 h-4 rounded-full ${
              selectedValue === value ? "bg-orange-400" : "bg-gray-300"
            }`}
          />
        ))}
      </View>

      {/* دکمه ادامه */}
      <Link href="/(tabs)/screenTwo">
        <TouchableOpacity className="bg-orange-400 mt-6 py-3 px-8 rounded-full">
          <Text className="text-white text-base font-bold">ادامه</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default WelcomeScreen;

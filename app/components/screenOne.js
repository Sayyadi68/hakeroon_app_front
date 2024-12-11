import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState("1");
  const navigation = useNavigation();

  return (
    <View className="flex flex-col justify-center items-center bg-white px-4 h-dvh">
      {/* تصویر */}
      <View className="flex flex-col justify-center items-center h-dvh gap-2">
        <Image
          source={require("../../assets/images/screenOne.png")}
          className="w-[300px] h-[300px]"
          resizeMode="cover"
        />
        <Image
          source={require("../../assets/images/help.png")}
          className="w-dvw h-[188px]"
          resizeMode="contain"
        />

        {/* توضیحات */}
        <View className="flex flex-col items-center mb-16">
          <View className="items-center mt-4">
            <Text className="text-[22px] font-bold mb-2 text-center">
              چجوری با ورزشیار کار کنیم؟
            </Text>
            <Text className="text-lg text-gray-600 text-center">
              زمانی که وارد نرم افزار ورزشیار شدید در ابتدا با دسته بندی ها
              مواجه خواهید شد شما میتوانید با انتخاب دسته بندی مورد نظرتون وارد
              همون بخش بشید و سالن ها و باشگاه های مورد نظر رو پیدا کنید
            </Text>
          </View>

          {/* RadioGroup برای نشانگر وضعیت */}
          {/* <View className="flex-row my-8">
            {["1", "2", "3"].map((value) => (
              <TouchableOpacity
                key={value}
                onPress={() => setSelectedValue(value)}
                className={`w-4 h-4 rounded-full mx-2 ${
                  selectedValue === value ? "bg-[#ff6500]" : "bg-gray-300"
                }`}
              />
            ))}
          </View> */}
        </View>
      </View>

      {/* دکمه ادامه */}
      <TouchableOpacity
        className="w-full bg-[#ff6500] rounded-full self-end"
        onPress={() => navigation.navigate("screenTwo")} // استفاده از ناوبری
      >
        <Text className="text-white text-2xl text-center font-bold p-3.5">
          ادامه
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

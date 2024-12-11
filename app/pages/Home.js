import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

// کامپوننت TopSection برای تصویر بالای صفحه
const TopSection = () => {
  return (
    <View className="w-full h-[35vh] flex items-center">
      <Image
        source={require("../../assets/images/home image.png")}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};

// کامپوننت کارت توپی
export function ToopiCard() {
  const [active, setActive] = useState(true);

  return (
    <View
      className={`p-4 items-end justify-between rounded-3xl shadow-2xl ${
        active ? "bg-[#FF6500]" : "bg-white"
      }`}
    >
      <View className="flex-row items-center w-[90%]">
        <Image
          source={require("../../assets/images/horse.png")}
          className="w-44 h-44"
          resizeMode="contain"
        />
        {/* <Text className="text-center text-xl font-bold">دسته بندی</Text> */}
        <View className="flex-1 items-end justify-between">
          <View className="flex items-end w-48">
            <Text
              className={`text-xl font-bold ${
                active ? "text-white" : "text-black"
              }`}
            >
              اسب سواری
            </Text>
            <Text
              className={`text-sm mb-4 ${active ? "text-white" : "text-black"}`}
            >
              تخفیف ویژه به مناسبت افتتاح مجتمع اسب سواری رهرو با ثبت نام در
              باشگاه اسب سواری رهرو جایزه 3 روز اسب سواری رایگان دریافت کنید
            </Text>
          </View>
          <TouchableOpacity
            className={`flex-row items-center px-5 py-2 rounded-full ${
              active ? "bg-white" : "bg-white"
            }`}
          >
            <Text
              className={`text-lg font-bold ml-2 ${
                active ? "text-black" : "text-black"
              }`}
            >
              ثبت نام
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Text className="text-center text-xl font-bold">دسته بندی</Text> */}
      </View>
    </View>
  );
}

// کامپوننت اصلی Home
export default function Home() {
  const [active, setActive] = useState(true);
  return (
    <View className="">
      {/* تصویر بالای صفحه */}
      <TopSection />

      <View className="">
        {/* محتوا زیر تصویر */}
        {/* اسلایدر افقی */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="w-full -mb-4"
 
        >
          <View className="flex-row px-4">
            <Image
              source={require("../../assets/images/card_disable.png")}
              className={`${active ? "" : ""} w-48 h-48`}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/card.png")}
              className={`${active ? "" : ""} w-48 h-48`}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/card_disable.png")}
              className={`${active ? " " : ""} w-48 h-48`}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/card.png")}
              className={`${active ? "" : ""} w-48 h-48`}
              resizeMode="contain"
            />
          </View>
        </ScrollView>

        {/* کارت توپی */}
        <View className="items-center w-dvw rounded-3xl">
          <ToopiCard />
        </View>
        <View className="flex flex-row items-center justify-center h-40">
          <Image
            source={require("../../assets/images/salon 3.png")}
            className={`w-dvw`}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

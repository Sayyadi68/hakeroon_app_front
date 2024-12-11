import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

// کامپوننت TopSection برای تصویر بالای صفحه
const TopSection = () => {
  return (
    <View className="absolute top-0 left-0 right-0 w-full h-[273px] flex items-center">
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
      className={`w-[345px] rounded-lg p-4 items-end justify-between shadow-md ${
        active ? "bg-[#FF6500]" : "bg-white"
      }`}
    >
      <View className="flex-row items-center w-dvw">
        <Image
          source={require("../../assets/images/horse.png")}
          className="w-44 h-44"
          resizeMode="contain"
        />
        <View className="flex-1 items-end justify-between">
          <View className="flex items-end w-48">
            <Text
              className={`text-xl font-bold mb-2 ${
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
            onPress={() => setActive(!active)}
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
      </View>
    </View>
  );
}

// کامپوننت اصلی Home
export default function Home() {
  const [active, setActive] = useState(true);
  return (
    <>
      {/* تصویر بالای صفحه */}
      <TopSection />

      {/* محتوا زیر تصویر */}
      <View className="mt-[273px] flex-1 px-4">
        {/* اسلایدر افقی */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="w-full"
        >
          <View className="flex-row space-x-4">
            <Image
              source={require("../../assets/images/card_disable.png")}
              className={`${active ? "mb-3" : ""} w-44 h-44`}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/card.png")}
              className={`${active ? "mb-3" : ""} w-44 h-44`}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/card_disable.png")}
              className={`${active ? "mb-3" : ""} w-44 h-44`}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/card.png")}
              className={`${active ? "mb-3" : ""} w-44 h-44`}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>

      {/* کارت توپی */}
      <View className="items-center">
        <ToopiCard />
      </View>
    </>
  );
}

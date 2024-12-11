import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import "nativewind";

const SignupScreen = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const handleGetCode = () => {
    // Logic to get verification code
    console.log("Getting verification code for", phone);
  };

  const handleSendCode = () => {
    // Logic to send verification code
    console.log("Sending code", code);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <View className="h-52 justify-center items-center">
        {/* Replace this View with an SVG or image for the snowboarder */}
        <Text className="text-gray-400 text-lg">[SVG Illustration]</Text>
      </View>

      <Text className="text-lg font-bold text-center my-5">
        سلام! برای شروع ثبت نام کنید
      </Text>

      <TextInput
        className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-right"
        placeholder="شماره تماس خود را وارد کنید"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-center"
        placeholder="کد ارسالی را وارد کنید"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
      />

      <TouchableOpacity
        className="w-full bg-orange-500 py-4 rounded-lg items-center mb-3"
        onPress={handleGetCode}
      >
        <Text className="text-white font-bold">دریافت کد تایید</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="w-full bg-orange-500 py-4 rounded-lg items-center"
        onPress={handleSendCode}
      >
        <Text className="text-white font-bold">ارسال کد تایید</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

import React, { useState, useRef, useEffect } from "react";  
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Platform } from "react-native";  
import "nativewind";  

const Login = () => {  
  const [phone, setPhone] = useState("");  
  const [code, setCode] = useState(["", "", "", "", "", ""]); // Array to hold OTP digits  
  const inputRefs = useRef([]);  

  const handleGetCode = () => {  
    // Logic to get verification code  
    console.log("Getting verification code for", phone);  
  };  

  const handleSendCode = () => {  
    // Logic to send verification code  
    console.log("Sending code", code.join(""));  
  };  

  const handleInputChange = (index, value) => {  
    const newCode = [...code];  
    newCode[index] = value;  

    // Automatically focus on the next input field after entering a number  
    if (value.length === 1 && index < code.length - 1) {  
      inputRefs.current[index + 1].focus();  
    }  

    setCode(newCode);  
  };  

  return (  
    <KeyboardAvoidingView  
      className="flex-1 bg-white p-5"  
      behavior={Platform.OS === "ios" ? "padding" : "height"}  
    >  
      <ScrollView keyboardShouldPersistTaps="handled">  
        <Image  
          className="mt-10"  
          resizeMode="cover"  
          source={require("../../assets/images/login_vector.png")}  
        />  

        <View className="w-full">  
          <Text className="w-full text-[30px] font-bold text-right mt-5">  
            سلام! برای شروع ثبت نام کنید  
          </Text>  

          <TextInput  
            className="w-full border h-14 border-gray-300 rounded-lg p-2 mb-4 text-right"  
            placeholder="شماره تماس خود را وارد کنید"  
            value={phone}  
            onChangeText={setPhone}  
            keyboardType="phone-pad"  
          />  

          <Text className="w-full text-sm font-bold text-right mt-5">کد ارسالی به شماره موبایل را وارد کنید</Text>  

          <View className="flex flex-row gap-x-4">  
            {code.map((digit, index) => (  
              <TextInput  
                key={index}  
                ref={(ref) => (inputRefs.current[index] = ref)}  
                className="w-[60px] h-14 border border-gray-300 rounded-lg p-2 mb-4 text-center"  
                value={digit}  
                onChangeText={(value) => handleInputChange(index, value)}  
                keyboardType="numeric"  
                maxLength={1} // Allow only 1 digit  
              />  
            ))}  
          </View>  
        </View>  

        <TouchableOpacity  
          className="w-full bg-orange-500 py-4 rounded-lg items-center mb-3"  
          onPress={handleGetCode}  
        >  
          <Text className="text-white font-bold">دریافت کد تایید</Text>  
        </TouchableOpacity>  
{/* 
        <TouchableOpacity  
          className="w-full border-orange-500 border-2 py-4 rounded-lg items-center"  
          onPress={handleSendCode}  
        >  
          <Text className="text-orange-500 font-bold">ارسال کد تایید</Text>  
        </TouchableOpacity>   */}
      </ScrollView>  
    </KeyboardAvoidingView>  
  );  
};  

export default Login;
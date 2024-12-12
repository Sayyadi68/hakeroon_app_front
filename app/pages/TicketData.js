import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const gyms = [
  {
    name: "سالن ورزشی قدس",
    startTime: "10:30",
    endTime: "12:00",
    duration: "2:00",
  },
];

const TicketInfo = ({ label, value, onChange }) => {
  return (
    <View className=" flex flex-row justify-between">
      <Text className="text-lg font-bold text-orange-500">{value}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const TicketData = () => {
  const [ticketData, setTicketData] = useState({
    name: "سید عماد میری",
    phone: "09526845226",
    reservationCode: "1552053",
    hallName: "سالن هنرستان قدس",
    hallManager: "محمدرضا سلیمانی راد",
    hallPhone: "02537756859",
    hallAddress: "بلوار بسیج، سالن قدس",
    endTime: "14:00",
  });

  const handleInputChange = (field, value) => {
    setTicketData({ ...ticketData, [field]: value });
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/ticket_bg.png")} // Replace with your background image path
        className="flex-1 mt-4 h-full flex-col items-center justify-betwee"
        resizeMode="contain"
      >
        <Ionicons
          className="relative left-6 w-full"
          name="arrow-back-outline"
          size={32}
          color="red"
        />

        <Text className="text-2xl font-bold text-orange-500">بلیط ثبت شده</Text>

        <Image
          source={require("../../assets/images/TicketDataIMG.png")}
          className="w-70 h-60  object-contain"
          resizeMode="stretch"
        />

        {gyms.map((gym, index) => (
          <View key={index} className="mt-2 px-6 flex">
            <View className="flex flex-row justify-between px-6">
              <View className="flex flex-col justify-center items-center">
                <Ionicons
                  name="alert-circle-outline"
                  size={32}
                  color="orange"
                />
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

            <View className="bg-black border-black border mx-6" />

            <View className="">
              <Text className="w-full text-sm font-bold text-center mt-3">
                مشخصات رزروکننده
              </Text>
            </View>
          </View>
        ))}

        <View className="w-[70%]">
          <TicketInfo
            label="نام و نام خانوادگی:"
            value={ticketData.name}
            onChange={(value) => handleInputChange("name", value)}
          />
          <TicketInfo
            label="شماره تماس:"
            value={ticketData.phone}
            onChange={(value) => handleInputChange("phone", value)}
          />
        </View>

        <View className="w-[70%] mt-16">
          <TicketInfo
            label="کد رزرو سانس  :"
            value={ticketData.reservationCode}
            onChange={(value) => handleInputChange("name", value)}
          />
          <View className="mb-4">
            <Text className="w-full text-sm font-bold text-center mt-3">
              مشخصات رزروکننده
            </Text>
          </View>
          <TicketInfo
            label="نام سالن  :"
            value={ticketData.hallName}
            onChange={(value) => handleInputChange("name", value)}
          />
          <TicketInfo
            label="نام مسئول:"
            value={ticketData.hallManager}
            onChange={(value) => handleInputChange("hallManager", value)}
          />
          <TicketInfo
            label="شماره تماس:"
            value={ticketData.phone}
            onChange={(value) => handleInputChange("phone", value)}
          />
          <TicketInfo
            label="آدرس:"
            value={ticketData.hallAddress}
            onChange={(value) => handleInputChange("hallAddress", value)}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default TicketData;

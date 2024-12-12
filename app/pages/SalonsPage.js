import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TopSection } from "./Home";
import { SearchBar } from "../components/searchBox";

const FootballUI = () => {
  const [selectedFilter, setSelectedFilter] = useState("location");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(0); // Placeholder for min price filter
  const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER); // Placeholder for max price filter
  const [minPoint, setMinPoint] = useState(0); // Placeholder for min point filter

  const filters = [
    { label: "محله", iconName: "location", value: "location" },
    // { label: "قیمت", iconName: "pricetag", value: "price" },
    // { label: 'وضعیت', iconName: 'stats-chart', value: 'status' },
    // { label: "رضایت", iconName: "happy", value: "satisfaction" },
  ];

  const handleFilterPress = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const hallData = [
    {
      title: "سالن دبیرستان هدایتی",
      address: "خیابان کلهری، خیابان آل یاسین، سالن هدایتی",
      price: 30,
      point: 5,
    },
    {
      title: "سالن قدس",
      address: "پردیسان، میدان شهدای منا، سالن قدس ",
      price: 40,
      point: 4,
    },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text.toLowerCase()); // Search should be case-insensitive
  };

  const filteredHalls = hallData.filter((hall) => {
    let isIncluded = true;

    switch (selectedFilter) {
      case "price":
        isIncluded = hall.price >= minPrice && hall.price <= maxPrice;
        break;
      case "location":
        isIncluded = hall.address.toLowerCase().includes(searchQuery);
        break;
      case "point":
        isIncluded = hall.point >= minPoint;
        break;
    }

    return isIncluded;
  });

  const HallCard = ({ title, address, point }) => {
    return (
      <>
        <View className="flex-row items-center justify-between bg-[#FFEBCF] border border-orange-300 px-8 py-3 mb-4 rounded-full shadow-md">
          <Pressable
            onPress={() => setModalVisible(true)} // باز کردن مدال با کلیک
            className="w-[50px] h-[50px] bg-white rounded-full"
          />
          <View className="flex-1 text-right">
            <Text className="text-right text-lg font-bold text-orange-700 mb-2">
              {title}
            </Text>
            <Text className="text-right text-gray-600">{address}</Text>
            <View className="flex flex-row self-end gap-6 mt-2">
              <Text className="text-right text-yellow-500 font-bold">
                {Array(point).fill("⭐️").join("")}
              </Text>
              <Text className="text-right text-yellow-500 font-bold">
                میزان رضایت ورزشکاران
              </Text>
            </View>
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <Animated.View className="flex-1 justify-center items-center bg-black/50">
            <View className="bg-white w-[90%] rounded-2xl p-6 shadow-lg">
              {/* عنوان مدال */}
              <Text className="text-center text-lg font-bold text-orange-700 mb-4">
                ثبت رزرو
              </Text>

              {/* بخش انتخاب تاریخ */}
              <View className="mb-4">
                <Text className="text-center text-sm font-bold text-orange-600 mb-2">
                  روز و تاریخ
                </Text>
                <ScrollView horizontal className="flex-row gap-2">
                  {["2 Tue", "3 Wed", "4 Thu", "5 Fri", "6 Sat", "7 Sun"].map(
                    (day, index) => (
                      <Pressable
                        key={index}
                        className={`px-4 py-2 rounded-lg border ${
                          index === 2
                            ? "bg-yellow-400 border-yellow-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <Text
                          className={`text-center text-sm font-bold ${
                            index === 2 ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {day}
                        </Text>
                      </Pressable>
                    )
                  )}
                </ScrollView>
              </View>

              {/* بخش انتخاب تایم سانس */}
              <View className="mb-4">
                <View className="w-[46px] mb-2 p-4 rounded-lg">
                  <Text className="text-center text-sm font-bold bg-orange-600 text-white ">
                    تایم سانس
                  </Text>
                </View>
                <View className="flex-row flex-wrap items-center justify-center gap-2">
                  {["18 تا 20", "20 تا 22", "22 تا 24"].map((time, index) => (
                    <Pressable
                      key={index}
                      className={`px-4 py-2 rounded-lg border ${
                        index === 0
                          ? "bg-orange-500 border-orange-700"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      <Text
                        className={`text-sm font-bold ${
                          index === 0 ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {time}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* هزینه */}
              <Text className="text-center text-lg font-bold text-gray-800 mb-4">
                هزینه سانس: ۱۵۰,۰۰۰ تومان
              </Text>

              {/* دکمه ثبت رزرو */}
              <Pressable
                onPress={() => setModalVisible(false)}
                className="bg-black py-3 rounded-full"
              >
                <Text className="text-center text-white font-bold">
                  ثبت رزرو
                </Text>
              </Pressable>
            </View>
          </Animated.View>
        </Modal>
      </>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Player Illustration */}
      <View className="items-center">
        <TopSection />
        <View className="flex items-center justify-center absolute bottom-2 w-full bg-transparent">
          <SearchBar handlesearch={handleSearch} searchQuery={searchQuery} />
        </View>
        {/* <View className="absolute top-24 right-10 bg-orange-300 rounded-full w-20 h-20 items-center justify-center">
          <Text className="text-white text-lg font-bold">58%</Text>
        </View> */}
      </View>

      {/* Filter Section */}
      <View className="flex-row justify-end px-6 py-2 bg-white">
        {filters.map((filter) => (
          <Pressable
            key={filter.value}
            onPress={() => handleFilterPress(filter.value)}
            className={`bg-orange-200 py-2 px-4 rounded-md ${
              selectedFilter === filter.value
                ? "bg-orange-400"
                : "bg-orange-400"
            }`}
          >
            <View className="flex flex-row items-center">
              <Text className="text-orange-700 font-bold mr-2">
                {filter.label}
              </Text>
              <Icon name={filter.iconName} size={20} color="white" />
            </View>
          </Pressable>
        ))}
      </View>
      <Text className="text-xl font-bold text-right px-8 pt-4">
        سالن های فوتسال
      </Text>
      <ScrollView className="flex flex-1 p-4">
        {filteredHalls.map((hall, index) => (
          <HallCard key={index} {...hall} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FootballUI;

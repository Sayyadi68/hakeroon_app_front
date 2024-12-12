import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // یا هر روش دیگری برای نصب Ionicons

export const SearchBar = ({searchQuery, handlesearch}) => {
  return (
    <View className={`flex flex-row items-center rounded-full border-white border-opacity-30 bg-white/30 shadow-md px-4 py-2 mb-4 border-solid border-2 w-[90%] justify-center`}>
      <Ionicons name="search" size={24} color="white" />
      <TextInput
        className={`text-right flex-1 ml-2 placeholder:text-white placeholder:text-lg`}
        placeholder="جستجو..."
        value={searchQuery}
        onChangeText={handlesearch}
      />
    </View>
  );
};
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">

        {/* Header */}

        <View className="flex-row pb-3 m items-center mx-4 space-x-2">

          <Image
            source={{
              url: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          
          <View className="flex-auto">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon className="" size={25} color="#00CCBB" />

        </View>

        {/* Search */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-auto space-x-2 bg-gray-200 p-3">  
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput 
            placeholder="Restaurants and cuisines" 
            keyboardType="default"/>
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/* Body */}

        <ScrollView 
          className="bg-gray-100" 
          contentContainerStyle={{
            paddingBottom: 100
            }}
          >
        
          {/* Categories */}
          
          <Categories/>

          {/* Feature Rows */}

          <FeatureRow
          id="123"
          title="Feature"
          description="Paid placements from our partners"
          featureCategory="featured"
          />



          <FeatureRow
          id="113"
          title="Tasty Discounts"
          description="Paid placements from our partners"
          featureCategory="featured"
          />

          <FeatureRow
          id="124"
          title="Offers near you!"
          description="Paid placements from our partners"
          featureCategory="featured"
          />



        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

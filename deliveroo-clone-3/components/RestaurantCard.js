import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,
    imgUrl,
    test,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lon}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
      source={{
        url: imgUrl
      }}
     className="h-36 w-64 rounded-sm"
    />
    <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">
            {title}
        </Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0,5} size={22} />
            <Text>
            <Text className="text-green-500">{rating} </Text>• {genre} </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opactiy={0,4} size={22}/>
            <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          url: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 text-white font-bold left-1">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;

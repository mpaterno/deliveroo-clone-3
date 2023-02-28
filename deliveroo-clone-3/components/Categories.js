import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing2"/>
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing3"/>
    </ScrollView>
  )
};

export default Categories;
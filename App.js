import React from "react"
import { ScrollView, View } from "react-native"
import { COLORS } from "./constans"
import Categories from "./scr/components/Categories"
import Header from "./scr/components/Header"
import Popular from "./scr/components/Popular"

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: COLORS.black }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          paddingTop: 70,
          paddingBottom: 75,
        }}
      >
        <Header />
        <Categories />
        <Popular />
      </View>
    </ScrollView>
  )
}

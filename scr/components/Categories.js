import React, { useState } from "react"
import { Text, TouchableHighlight, View, Image } from "react-native"

import { COLORS, SIZES } from "../../constans"
import { categories } from "../categories"

export default function Categories() {
  const [active, setActive] = useState(null)

  return (
    <View style={{ paddingTop: 60 }}>
      <Text
        style={{ fontSize: SIZES.h1, fontWeight: "bold", color: COLORS.white }}
      >
        Hey,
      </Text>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>
        what's up?
      </Text>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {categories.map((cat, idx) => (
          <View
            key={`categories ${idx}`}
            style={{
              width: "31%",
              marginBottom: 10,
            }}
          >
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              onPress={() => setActive(idx)}
              style={{
                height: 100,
                justifyContent: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: "center",
                  }}
                >
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  )
}

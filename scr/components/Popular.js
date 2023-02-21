import React from "react"
import { Text, TouchableHighlight, View, Image } from "react-native"

import { COLORS, SIZES } from "../../constans"
import { popular } from "../popular"

export default function Popular() {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text
        style={{ fontSize: SIZES.h1, fontWeight: "bold", color: COLORS.white }}
      >
        Popular
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {popular.map((product, idx) => (
          <View
            key={`popular ${idx}`}
            style={{
              width: "31%",
              marginBottom: 10,
            }}
          >
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              style={{
                height: 120,
                justifyContent: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: product.image }}
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
                  {product.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.primary,
                    marginTop: 10,
                    textAlign: "center",
                  }}
                >
                  {product.price}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  )
}

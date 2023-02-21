import { View, Image, Linking, TouchableHighlight } from "react-native"
import React from "react"

export default function Header() {
  return (
    <View
      style={{
        // display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TouchableHighlight
          // onPress={() => Linking.openURL("https://google.com")}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/640px-McDonald%27s_Golden_Arches.svg.png",
            }}
            style={{
              width: 51,
              height: 45,
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Image
          source={{
            uri: "https://slaviapolymer.ru/wp-content/uploads/2021/08/kisspng-shopping-cart-computer-icons-white-cart-png-simple-5ab15d036a4b75.3538919915215731234354-1.png",
          }}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>
    </View>
  )
}

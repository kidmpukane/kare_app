import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const PressableNav = () => {
  return (
    <View style={styles.pressableViewStyles}>
      <Pressable
        style={styles.pressableStyles}
        onPress={() => alert("Pressable Nav")}
      >
        <Text style={styles.pressableTextStyle}>Pressable Nav</Text>
        <View style={styles.iconViewStyle}>
          <FontAwesome
            style={styles.iconStyle}
            name="long-arrow-right"
            size={10} // Adjust size as needed
          />
        </View>
      </Pressable>
    </View>
  );
};

const PressableNav2 = () => {
  return (
    <View style={styles.pressableViewStyles}>
      <Pressable
        style={styles.pressableStyles2}
        onPress={() => alert("Pressable Nav2")}
      >
        <Text style={styles.pressableTextStyle}>Pressable Nav</Text>
        <View style={styles.iconViewStyle}>
          <FontAwesome
            style={styles.iconStyle}
            name="long-arrow-right"
            size={10} // Adjust size as needed
          />
        </View>
      </Pressable>
    </View>
  );
};

const PressableNav3 = () => {
  return (
    <View style={styles.pressableViewStyles}>
      <Pressable
        style={styles.pressableStyles3}
        onPress={() => alert("Pressable Nav2")}
      >
        <Text style={styles.pressableTextStyle3}>Pressable Nav</Text>
        <View style={styles.iconViewStyle}>
          <FontAwesome
            style={styles.iconStyle}
            name="angle-right"
            size={20} // Adjust size as needed
          />
        </View>
      </Pressable>
    </View>
  );
};

const PressableNav4 = () => {
  return (
    <View style={styles.pressableViewStyles}>
      <Pressable
        style={styles.pressableStyles4}
        onPress={() => alert("Pressable Nav2")}
      >
        <Text style={styles.pressableTextStyle3}>Pressable Nav</Text>
        <View style={styles.underline} />
        <View style={styles.iconViewStyle}>
          <FontAwesome
            style={styles.iconStyle}
            name="angle-right"
            size={15} // Adjust size as needed
          />
        </View>
      </Pressable>
    </View>
  );
};

export { PressableNav, PressableNav2, PressableNav3, PressableNav4 };

const styles = StyleSheet.create({
  pressableViewStyles: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pressableStyles: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 40,
    fontSize: 14,
    padding: 5,
    backgroundColor: "#EBE5DC",
  },
  pressableStyles3: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 40,
    fontSize: 14,
    padding: 5,
    backgroundColor: "#24221E",
  },
  pressableStyles2: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 40,
    fontSize: 14,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#24221E",
  },
  pressableStyles4: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 40,
    fontSize: 14,
    padding: 5,
    borderWidth: 1,
    borderColor: "#EBE5DC",
  },
  pressableTextStyle: {
    marginLeft: 20, // Moves the text 10 units to the right
  },
  pressableTextStyle3: {
    marginLeft: 20,
    color: "#EBE5DC",
  },
  iconViewStyle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#24221E",
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  iconStyle: {
    color: "#EBE5DC",
  },
  underline: {
    height: 1,
    backgroundColor: "#EBE5DC",
    width: "40%",
    alignSelf: "center",
    marginTop: 2,
    marginBottom: 2,
  },
});

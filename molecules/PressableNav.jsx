import {
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { React, useState } from "react";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const PressableNav = (props) => {
  return (
    <View style={styles.pressableViewStyles}>
      <TouchableOpacity style={styles.pressableStyles} onPress={props.onPress}>
        <Text style={styles.pressableTextStyle}>{props.buttonName}</Text>
        <View style={styles.iconViewStyle}>
          <FontAwesome
            style={styles.iconStyle}
            name="angle-right"
            size={12} // Adjust size as needed
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const PressableNav2 = (props) => {
  return (
    <View style={styles.pressableViewStyles}>
      <TouchableOpacity style={styles.pressableStyles2} onPress={props.onPress}>
        <View style={styles.textUnderline}>
          <Text style={styles.pressableTextStyle2}>{props.buttonName}</Text>
          <View style={styles.underline2} />
        </View>
        <View style={styles.iconViewStyle2}>
          <FontAwesome
            style={styles.iconStyle2}
            name="angle-right"
            size={15} // Adjust size as needed
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const PressableNav3 = (props) => {
  return (
    <View style={styles.pressableViewStyles}>
      <TouchableOpacity style={styles.pressableStyles3} onPress={props.onPress}>
        <Text style={styles.pressableTextStyle3}>{props.buttonName}</Text>
        <View style={styles.iconViewStyle}>
          <FontAwesome
            style={styles.iconStyle}
            name="angle-right"
            size={20} // Adjust size as needed
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const PressableNav4 = (props) => {
  return (
    <View style={styles.pressableViewStyles4}>
      <TouchableOpacity style={styles.pressableStyles4} onPress={props.onPress}>
        <Text style={styles.pressableTextStyle4}>{props.buttonName}</Text>
        <View style={styles.underline} />
        <View style={styles.iconViewStyle4}>
          <FontAwesome
            style={styles.iconStyle}
            name="angle-right"
            size={10} // Adjust size as needed
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const PressableNav5 = (props) => {
  const [navStyle, setNavStyle] = useState(styles.pressableStyles4);
  const [txtStyle, setTxtStyle] = useState(styles.pressableTextStyle);
  const changeColour = () => {
    setNavStyle((prevStyle) =>
      prevStyle == styles.pressableStyles4
        ? styles.pressableStyles
        : styles.pressableStyles4
    );
  };
  const changeTxtColour = () => {
    setTxtStyle((prevStyle) =>
      prevStyle == styles.pressableTextStyle2
        ? styles.pressableTextStyle5
        : styles.pressableTextStyle2
    );
  };

  return (
    <View style={styles.pressableViewStyles}>
      <TouchableOpacity
        style={navStyle}
        onPress={() => {
          props.onPress();
          changeColour();
          changeTxtColour();
        }}
      >
        <Text style={txtStyle}>{props.buttonName}</Text>
        <View style={styles.iconViewStyle}>
          <FontAwesome
            style={styles.iconStyle}
            name="angle-right"
            size={12} // Adjust size as needed
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {
  PressableNav,
  PressableNav2,
  PressableNav3,
  PressableNav4,
  PressableNav5,
};

const styles = StyleSheet.create({
  pressableViewStyles: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pressableViewStyles4: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 5,
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
    fontSize: 4,
    padding: 5,
    backgroundColor: "#24221E",
  },
  pressableStyles2: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 25,
    fontSize: 14,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#24221E",
    borderWidth: 1,
    borderColor: "#EBE5DC",
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
  pressableTextStyle2: {
    marginLeft: 20,
    fontSize: 20,
    color: "#EBE5DC",
  },
  pressableTextStyle5: {
    marginLeft: 20,
    fontSize: 20,
    color: "#24221E",
  },
  pressableTextStyle3: {
    marginLeft: 20,
    color: "#EBE5DC",
  },
  pressableTextStyle4: {
    marginLeft: 2,
    fontSize: 10,
    color: "#EBE5DC",
  },
  iconViewStyle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#24221E",
    justifyContent: "center",
    alignItems: "center",
  },
  iconViewStyle2: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
  },
  iconViewStyle4: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#24221E",
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  iconStyle: {
    color: "#EBE5DC",
  },

  iconStyle2: {
    color: "#24221E",
  },

  underline: {
    height: 1,
    backgroundColor: "#EBE5DC",
    width: "40%",
    alignSelf: "center",
    marginTop: 2,
    marginBottom: 2,
  },
  underline2: {
    height: 1,
    backgroundColor: "#EBE5DC",
    width: 200,
    alignSelf: "center",
    marginTop: 4,
    marginBottom: 4,
    marginLeft: "5%",
  },
});

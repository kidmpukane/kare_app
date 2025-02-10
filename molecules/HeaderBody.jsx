import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderBody = (props) => {
  return (
    <View>
      <Text style={styles.headerStyles}>{props.headerText}</Text>
      <View style={styles.underline3} />
      <Text style={styles.bodyStyle}>{props.bodyText}</Text>
    </View>
  );
};

const HeaderBody2 = (props) => {
  return (
    <View>
      <Text style={styles.headerStyles2}>{props.headerText}</Text>
      <View style={styles.underline} />
      <Text style={styles.bodyStyle2}>{props.bodyText}</Text>
    </View>
  );
};

const HeaderBody3 = (props) => {
  return (
    <View>
      <Text style={styles.headerStyles3}>{props.headerText}</Text>
      <View style={styles.underline3} />
      <Text style={styles.bodyStyle}>{props.bodyText}</Text>
    </View>
  );
};

export { HeaderBody, HeaderBody2, HeaderBody3 };

const styles = StyleSheet.create({
  headerStyles: {
    fontSize: 38,
    padding: 10,
    color: "#EBE5DC",
  },
  headerStyles2: {
    fontSize: 38,
    padding: 10,
    color: "#24221E",
  },
  headerStyles3: {
    fontSize: 28,
    padding: 10,
    color: "#EBE5DC",
  },
  bodyStyle: {
    fontSize: 14,
    padding: 10,
    color: "#EBE5DC",
  },
  bodyStyle2: {
    fontSize: 14,
    padding: 10,
    color: "#24221E",
  },
  underline: {
    height: 1.5,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  underline3: {
    height: 1.2,
    backgroundColor: "#EBE5DC",
    width: "100%",
    alignSelf: "center",
    marginTop: 2,
    marginBottom: 2,
  },
});

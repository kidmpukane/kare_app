import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderBody = () => {
  return (
    <View>
      <Text style={styles.headerStyles}>Header</Text>
      <View style={styles.underline3} />
      <Text style={styles.bodyStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </View>
  );
};

const HeaderBody2 = () => {
  return (
    <View>
      <Text style={styles.headerStyles2}>Header</Text>
      <View style={styles.underline} />
      <Text style={styles.bodyStyle2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Text>
    </View>
  );
};

const HeaderBody3 = () => {
  return (
    <View>
      <Text style={styles.headerStyles3}>Header</Text>
      <View style={styles.underline3} />
      <Text style={styles.bodyStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
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

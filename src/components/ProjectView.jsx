import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MyIcons from "../layout/MyIcons";

export default function ProjectView({ projectTitle, notification, status }) {
  const businessCaseIcon = require('../assets/icons/business-case.png');
  
  return (
    <View style={styles.projectView}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require("../assets/icons/business-case.png")} />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{projectTitle}</Text>
          <View style={styles.container}>
            <Text style={styles.subTitle}>{notification}</Text>
            <Diviser style={styles.subTitle} />
            <Text style={styles.subTitle}>{status}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.image}>
          <Image source={require("../assets/icons/arrow-right-line.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Diviser() {
  return <Text style={styles.diviser}> • </Text>;
}

const styles = StyleSheet.create({
  projectView: {
    borderRadius: "24",
    borderWidth: "15",
    borderColor: "#F8F8F6",
    marginBottom: 12,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#F8F8F6",
    alignContent: "space-between",
    width: "90%",
  },
  containerTitle: {
    flex: 4,
    fontSize: 15,
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0A0909",
    paddingBottom: 4,
    paddingTop: 4,
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#9B9B9B",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
  diviser: {
    fontWeight: "bold",
    color: "#9B9B9B",
  },
});

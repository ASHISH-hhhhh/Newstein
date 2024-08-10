import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { NewsContext } from "../api/Context";
import { sources } from "../api/api";
import { categories } from "../api/api";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const DiscoverNewsScreen = () => {
  const { setCategory, setSource } = useContext(NewsContext);
  const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);
  // console.log(categories);

  return (
    <View
      style={{
        ...styles.discover,
        backgroundColor: darkTheme ? "black" : "white",
      }}
    >
      {/* search */}

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
        >
          Categories
        </Text>
        <Text
          style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
        >
          News Sources
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* categories */}
        <View
          style={{
            height: "95%",
            width: "40%",
          }}
        >
          <ScrollView>
            {categories.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  ...styles.category,
                }}
                onPress={() => setCategory(item.name)}
              >
                <Image
                  source={{ uri: item.pic }}
                  style={{ ...styles.categoryImage }}
                />
                <Text
                  style={{
                    ...styles.name,
                    color: darkTheme ? "white" : "black",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* sources */}
        <View
          style={{
            height: "95%",
            width: "40%",
            justifyContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          {sources.map((item, i) => (
            <TouchableOpacity
              key={item.id}
              style={{ width: "100%", height: "25%" }}
              onPress={() => setSource(item.id)}
            >
              <Image
                source={{ uri: item.pic }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  marginTop: 7,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    // alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default DiscoverNewsScreen;

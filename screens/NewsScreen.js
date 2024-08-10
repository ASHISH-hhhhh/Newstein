import { View, Text } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useContext } from "react";
import { NewsContext } from "../api/Context";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

const NewsScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const {
    news: { articles },
  } = useContext(NewsContext);
  const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);

  const renderItem = ({ item, i }) => (
    <View
      key={i}
      style={{
        height: windowHeight,
        width: windowWidth,
        backgroundColor: darkTheme ? "black" : "white",
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{
          height: "40%",
          resizeMode: "cover",
          width: windowWidth,
        }}
      />
      {/* <FastImage
        style={{
          height: "40%",
          resizeMode: FastImage.resizeMode.cover,
          width: windowWidth,
        }}
        source={{
          uri: item.urlToImage,
          priority: FastImage.priority.high,
        }}
      /> */}
      <View
        style={{
          ...styles.description,
        }}
      >
        <Text
          style={{
            ...styles.title,
            color: "white",
            color: darkTheme ? "white" : "black",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>
          Short by :
          <Text style={{ fontWeight: "bold" }}>{item.author ?? "unknown"}</Text>
        </Text>
      </View>
      <ImageBackground
        blurRadius={30}
        style={{ ...styles.footer, width: windowWidth }}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{ fontSize: 15, color: "white" }}>
            '{item?.content?.slice(0, 45)}...'
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Read More
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );

  return (
    // <View>
    //   <ScrollView>
    //     {articles &&
    //       articles.map((item, i) => (
    //         <View
    //           key={i}
    //           style={{
    //             height: windowHeight,
    //             width: windowWidth,
    //             backgroundColor: "black",
    //           }}
    //         >
    //           <Image
    //             source={{ uri: item.urlToImage }}
    //             style={{
    //               height: "40%",
    //               resizeMode: "cover",
    //               width: windowWidth,
    //             }}
    //           />
    //           <View
    //             style={{
    //               ...styles.description,
    //             }}
    //           >
    //             <Text style={{ ...styles.title, color: "white" }}>
    //               {item.title}
    //             </Text>
    //             <Text style={{ ...styles.content, color: "white" }}>
    //               {item.description}
    //             </Text>
    //             <Text style={{ color: "white" }}>
    //               Short by :
    //               <Text style={{ fontWeight: "bold" }}>
    //                 {item.author ?? "unknown"}
    //               </Text>
    //             </Text>
    //           </View>
    //           <ImageBackground
    //             blurRadius={30}
    //             style={{ ...styles.footer, width: windowWidth }}
    //             source={{ uri: item.urlToImage }}
    //           >
    //             <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
    //               <Text style={{ fontSize: 15, color: "white" }}>
    //                 '{item?.content?.slice(0, 45)}...'
    //               </Text>
    //               <Text
    //                 style={{ fontSize: 17, fontWeight: "bold", color: "white" }}
    //               >
    //                 Read More
    //               </Text>
    //             </TouchableOpacity>
    //           </ImageBackground>
    //         </View>
    //       ))}
    //   </ScrollView>
    // </View>
    <FlatList
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      // pagingEnabled
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
    />
  );
};

export default NewsScreen;
const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 80,
    // width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

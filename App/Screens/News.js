import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

//Main Function
export default function News() {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await response.json();
    setArticles(data);
    console.log(articles);
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <FlatList
      data={articles}
      renderItem={({ item, index }) => {
        return (
          <View
            style={{
              marginVertical: 5,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              paddingBottom: index == articles.length - 1 ? 250 : 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {item.title}
            </Text>
            <Text>{item.body}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});

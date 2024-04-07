import { View, Text } from "react-native";
import React, { useState } from "react";
import NewsApi from "../NewsAPI/NewsAPI";

//Main Function
export default function News() {
  const [newsAPI, setNewsAPI] = useState([]);
  fetch(
    "https://newsdata.io/api/1/news?apikey=pub_41479e008214f7ec60e909ab78d53e18781a3&q=pegasus&language=en"
  )
    .then((res) => res.json())
    .then((data) => {
      setNewsAPI(data);
      console.log(data);
    })
    .catch((err) => console.log(err));

  return (
    <View>
      {newsAPI.map((news) => (
        <Text key={index}>{news.title}</Text>
      ))}
    </View>
  );
}

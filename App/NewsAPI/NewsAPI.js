function NewsApi() {
  var newsData = [];
  fetch(
    "https://newsdata.io/api/1/news?apikey=pub_41479e008214f7ec60e909ab78d53e18781a3&q=pegasus&language=en"
  )
    .then((res) => res.json())
    .then((data) => (newsData = data), console.log(data))
    .catch((err) => console.log(err));
  return newsData;
}

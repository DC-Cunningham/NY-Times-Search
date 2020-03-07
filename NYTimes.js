var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6IrupsUwKdAX6Yp4HlfCZEXtuHLv0Gt3" +
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(results);
  });

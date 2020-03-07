//get the search terms from the input, store in variable

var numberOfArticles = 0;

function queryString() {
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  var queryParameters = { "api-key": "6IrupsUwKdAX6Yp4HlfCZEXtuHLv0Gt3" };

  queryParameters.q = $("#searchTerms")
    .val()
    .trim();
  var begin_date = $("#beginYear");

  if (parseInt(begin_date)) {
    queryParameters.begin_date = begin_date;
  }
  if (parseInt(end_date)) {
    queryParameters.end_date = end_date;
  }
  return queryURL + $.param(queryParameters);
}

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var results = response.data;
  const count = Math.min(numberOfArticles, results.length);
  for (var i = 0; i < count; i++) {
    var result = $("<div>");
    var image = $("<img>").attr("src", response.docs.multimedia.url);
    var headline = $("<h2>").text(response.docs.headline);
    var abstract = $("<p>").text(response.docs.abstract);
    var url = $("<p>").text(response.docs.web_url);
    var date = $("<p>").text(response.docs.pub_date);
    result.append(image);
    result.append(headline);
    result.append(abstract);
    result.append(url);
    result.append(date);
    $("#results").append(results);
  }
});

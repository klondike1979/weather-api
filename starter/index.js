var apiKey = "d7e2717363e2e3380e4652d1a453c2c7"
// var queryUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={" + apiKey + "}";

var userInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-button");

var convertCoordinates = "http://api.openweathermap.org/geo/1.0/direct?q={" + cityName + "},{" + stateCode + "},{" + countryCode + "}&limit={" + limit + "}&appid={" + apiKey + "}";



myFunction() {
    var cityName = userInput;
    var stateCode = "";
    var countryCode;
}

searchBtn.onclick = myFunction()
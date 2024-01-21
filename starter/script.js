var userInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-button");
var city = userInput.value;
var APIKey = "fde4deb2cdcb435337794609dc049da1";
var lat;
var lon;



searchBtn.onclick = myFunction();
function myFunction(){
  var convertCoordinates =
	"http://api.openweathermap.org/geo/1.0/direct?q={" +
	city +
	"},{},{}&limit={}&appid={" +
	APIKey +
	"}";
console.log(convertCoordinates);
}

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user input from the input field
    const userInput = searchInput.value;

    // Do something with the user input, for example, log it to the console
    console.log("User input:", userInput);
  });


    // You can now use the userInput variable to perform further actions, such as making an API call

    
var today = moment().format("LL");
document.getElementById("todayDate").innerHTML = today;

var nextDay = moment().add(1, "days").format("l");
document.getElementById("nextDay").innerHTML = nextDay;

var twoDays = moment().add(2, "days").format("l");
document.getElementById("twoDays").innerHTML = twoDays;

var threeDays = moment().add(3, "days").format("l");
document.getElementById("threeDays").innerHTML = threeDays;

var fourDays = moment().add(4, "days").format("l");
document.getElementById("fourDays").innerHTML = fourDays;

var fiveDays = moment().add(5, "days").format("l");
document.getElementById("fiveDays").innerHTML = fiveDays;


var cityName = document.getElementById("inputCity");
var cityRequest = document.getElementById("submitBtn");
   
$('button').on("click", function() {

event.preventDefault()

var cityName = document.getElementById("inputCity").value;
var myKey = "f2f9b3e4854158c32e614da7ebd95927";
var queryURL =`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${myKey}`
    
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response) {

    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;

    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    var apiKey1 = "f2f9b3e4854158c32e614da7ebd95927";
    var queryURL2 = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey1}&lat=${lat}&lon=${lon}`;

        $.ajax({
        url: queryURL2,
        method: "GET",
    })
        .then(function (res) {

        var uvI = res.value;
        $(".uvIndex").text("UV Index: " + uvI);
    });
    
    $(".city").html("<h3>" + response.city.name + "</h3>");
    $(".icon").html("<img src='http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon +".png'>");
    $(".temp").text("Temperature: " + response.list[0].main.temp.toFixed(0) + "°");
    $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");
    
    $(".icon1").html("<img src='http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon +".png'>");
    $(".temp1").text("Temp: " + response.list[1].main.temp.toFixed(0) + "°");
    $(".humidity1").text("Humidity: " + response.list[1].main.humidity + "%");

    $(".icon2").html("<img src='http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon +".png'>");
    $(".temp2").text("Temp: " + response.list[2].main.temp.toFixed(0) + "°");
    $(".humidity2").text("Humidity: " + response.list[1].main.humidity + "%");

    $(".icon3").html("<img src='http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon +".png'>");
    $(".temp3").text("Temp: " + response.list[3].main.temp.toFixed(0) + "°");
    $(".humidity3").text("Humidity: " + response.list[1].main.humidity + "%");

    $(".icon4").html("<img src='http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon +".png'>"); 
    $(".temp4").text("Temp: " + response.list[4].main.temp.toFixed(0) + "°");
    $(".humidity4").text("Humidity: " + response.list[1].main.humidity + "%");

    $(".icon5").html("<img src='http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon +".png'>"); 
    $(".temp5").text("Temp: " + response.list[5].main.temp.toFixed(0) + "°");
    $(".humidity5").text("Humidity: " + response.list[1].main.humidity + "%");    
    })  

}); 
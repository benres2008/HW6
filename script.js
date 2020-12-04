function fetchWeather(cityName){
    
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=d9a215e06eb15a76cea4b716478cd648",
        method: "GET",
        dataType: "JSON",
    }).then(function(response) {

        console.log(response)
        $("#cityName").text(response.name)
        $("#temp").text(((response.main.temp-273.15)*9/5 + 32) + " degrees F")
        $("#humidity").text((response.main.humidity)+ "%")
        $("#windSpeed").text((response.wind.speed) + " mph")

    })

}

$("#searchButton").on("click", function(event){
    event.preventDefault()
    var inputVal = $("#searchBar").val().trim()
    fetchWeather(inputVal);
})







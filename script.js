function fetchWeather(cityName){
    
    $.ajax({
        url: "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=d9a215e06eb15a76cea4b716478cd648",
        method: "GET",
    }).then(function(response) {

        console.log(response)
        $("#cityName").text(response.name)
        $("#temp").text(response.main.temp)
        $("#humidity").text(response.main.humidity)
        $("#windSpeed").text(response.wind.speed)
        $("#UV").text(response)

    })

}

$("#searchButton").on("click", function(event){
    event.preventDefault()
    var inputVal = $("#searchBar").val().trim()
    fetchWeather(inputVal);
})







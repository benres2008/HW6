function fetchWeather(cityName){
    
    $.ajax({
        type: "GET",
        url: "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=d9a215e06eb15a76cea4b716478cd648"
        
    }).then(function(data) {

        console.log(data)
        $("#   span id   ").text(data.city)



    })

}


var inputVal = $("#searchBar").val();

function searchCity(){
    fetchWeather(inputVal)
}

$("#searchButton").on("click", searchCity)


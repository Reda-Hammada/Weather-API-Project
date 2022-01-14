let town;
let url;

url = 'http://api.openweathermap.org/data/2.5/weather?q=ksar el kebir&appid=0bf1faee1a5ca7e5e899dd845e4e0d44&units=metric';
town = document.getElementById('city');


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(json){

    var city = json.name;
    var temp = json.main.temp;
    var humidity = json.main.humidity;

    town.innerHTML = "the city is " + city  + " " + "the temperature is " + temp + " " + "the humidity is " + humidity;

})


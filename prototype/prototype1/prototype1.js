let town;
let key;
let url;

url = 'http://api.openweathermap.org/data/2.5/weather?q=ksar el kebir&appid=0bf1faee1a5ca7e5e899dd845e4e0d44';
town = document.getElementById('city');


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(json){

    let city = json.name;
    let temp = json.main.temp

    town.innerHTML = city + "<br>" + temp;
})


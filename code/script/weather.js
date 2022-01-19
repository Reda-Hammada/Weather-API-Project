// variables declration 
let search;
let url;
let city;
let form;

// treatment 
document.getElementById('searchForm').addEventListener("submit", function show(event){
    event.preventDefault();
  
    // input 
    search = document.getElementById('searchBar').value;
    url = "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=0bf1faee1a5ca7e5e899dd845e4e0d44&units=metric";

    fetch(url)

    .then(function(response){

        return response.json();
    })

    .then(function(data){

      

           city = new City();
           city.name = data.name;
           city.country = data.sys.country;
           city.description = data.weather.description;
           city.humidity = data.main.temp;
           city.wind = data.wind.speed;
        
           list1 = document.getElementById('list1');
           list1.innerHTML = "location: " + city.name + ',' + city.country;
           list2 = document.getElementById('list2').innerHTML = "weather: " + city.description;
    })

    
    
});

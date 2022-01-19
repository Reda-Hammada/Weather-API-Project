// variables declration 
let search;
let url;
let city;
let form;

// treatment 
document.getElementById('searchForm').addEventListener("submit", function show(event){
    event.preventDefault();
    city;
    insert();
    // input 
    search = document.getElementById('searchBar').value;
    url = "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=0bf1faee1a5ca7e5e899dd845e4e0d44";

    fetch(url)

    .then(function(response){

        return response.json();
    })

    .then(function(data){

       function readData(){

           city = new City();
           city.name = data.name;
           city.country = data.country;
           city.description = data.description;
           city.humidity = data.main.humidity;
           city.wind = data.wind.speed;

           
       }

       function insert(){

       }
    })

    .catch(function(err){

        alert('wrong city');
    })
    
});

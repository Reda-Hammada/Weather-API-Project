// variables declration 
let search;
let url;
let city;
let form;

// treatment 
document.getElementById('searchForm').addEventListener("submit", function show(event){
    event.preventDefault();
    document.getElementById('info-container').style.display = "flex";

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
           city.description = data.weather[0].description;
           city.humidity = data.main.temp;
        
           info1 = document.getElementById('info1');
           info1.innerHTML = city.name + ',' + city.country;
           info2 = document.getElementById('info2').innerHTML =  city.description;
           info3 = document.getElementById('info3').innerHTML =  city.humidity + "°C";
    })

    
    .catch(function(err){

        alert("you entered a wrong city name");
    })
});


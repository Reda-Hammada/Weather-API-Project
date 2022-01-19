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
           city.country = data.country;
           city.description = data.description;
           city.humidity = data.main.temp;
           city.wind = data.wind.speed;

        

        let paragraph = document.getElementById('para1');
        paragraph.innerHTML = city.humidity;
       
    })

    .catch(function(err){

        alert('wrong city');
    })
    
});

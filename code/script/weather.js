// variables declration 
let search;
let url;
let city;
let form;

// treatment 
document.getElementById('searchForm').addEventListener("submit", function show(event){
    event.preventDefault();
    display();
    document.getElementById('info-container').style.display = "flex";

    
    // input 
    search = document.getElementById('searchBar').value;
    url = "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=0bf1faee1a5ca7e5e899dd845e4e0d44&units=metric";
          
});

function display(){
     weather = new weatherManager();
     document.getElementById('info1').innerHTML = weather.name + ',' + weather.country;
     document.getElementById('info2').innerHTML =  weather.description;
     document.getElementById('info3').innerHTML =  weather.humidity + "°C";
}
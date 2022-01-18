// variables declration 
let city;
let url;
let paragraph;

// treatment 

function show(){
    // input 
    city = document.getElementById('searchBar');
    url = "https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=0bf1faee1a5ca7e5e899dd845e4e0d44";


    fetch(url)

    .then(function(response){
        return response.json();
    })

    // output
    .then(function(data){

    })
}
// variables declration 
let search;
let url;
let paragraph;
let city;
let form;
//input 
form = document.getElementsByClassName('')
// treatment 
form.addEventListener('submit' ,function show(){
    // input 
    search = document.getElementById('searchBar');
    city = new City;
    url = "https://api.openweathermap.org/data/2.5/weather?q="+search.value+"&appid=0bf1faee1a5ca7e5e899dd845e4e0d44";


    fetch(url)

    .then(function(response){
        return response.json();
    })

    // output
    .then(function(data){
        
        alert(data.main.temp);
    })
} );

// Variables Declaration 
let city; 
let url;
let paragraph ;
var donnes;

// input
city = document.getElementById('inputBar');
paragraph = document.getElementById('paragraph');
url = "https://api.openweathermap.org/data/2.5/weather?q=&appid=0bf1faee1a5ca7e5e899dd845e4e0d44";

fetch(url)
.then(function(response){

    return response.json();

})

.then(function(data){

  donnes = data;
 
})


function show(){
    
  paragraph.innerHTML = donnes.main.temp;

}


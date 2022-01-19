// variables declration 
let search;
let url;
let paragraph;
let city;
let form;

// treatment 
document.getElementsByClassName('searchForm').addEventListener('submit', function show(event){
    event.preventDefault();
    // input 
    search = document.getElementById('searchBar').value;
    url = "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=0bf1faee1a5ca7e5e899dd845e4e0d44";


    fetch(url)

    .then(function(response){
        return response.json();
    })

    // output
    .then(function(data){
        
        console.log(data.main.temp);
    })

    .catch(function(err){

        alert('You entered a wrong city name');
    })
});

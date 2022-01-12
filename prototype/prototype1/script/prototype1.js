let city = document.getElementById('city');
let url ='api.openweathermap.org/data/2.5/weather?q=frankfurt&appid=c259124f52b8b6cc2e6fdd0caa3f7f4b';

fetch(url)
.then(response => response.json())
.then(data => city.innerHTML = data)
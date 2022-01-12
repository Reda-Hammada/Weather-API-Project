let city = document.getElementById('city');
let url ='';

fetch(url)
.then(response => response.json())
.then(data => city.innerHTML = data)
class weatherManager{
    #weather;

  get  weather(){
      this.#weather;
  }

   getData(){

       fetch(url)
       .then(function (response) {
           return response.json();
       })
    
       .then(function (data) {
           
            function  readData() {

            city  = new City;
            city.name = data.name;
            city.country = data.sys.country;
            city.description = data.weather[0].description;
            city.humidity = data.main.temp;
            this.#weather = city;
            }

       })
           
       
   }
}
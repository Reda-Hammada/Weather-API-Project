class City{
    #name;
    #country;
    #description;
    #humidity;
    #wind;
    
    get name(){

        return this.#name;
    }

    set name(value){
        this.#_name = value;
    }
    get country(){

        return this.#country;
    }

    set country(value){
        this.#country = value;
    }

    get description(){

        return this.#description;
    }

    set description(value){
        this.#description = value;
    }

    get humidity(){

        return this.#humidity;
    }

    set humidity(value){
        this.#humidity = value;
    }

    get wind(){

        return this.#wind;
    }

    set wind(value){
        this.#wind = value;
    }

}
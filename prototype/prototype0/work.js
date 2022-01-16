class Work {
    #_id;
    #_title;

    get id(){
        return this.#_id;
    }
    
    set id(value){
        this.#_id = value;
    }

    get title(){
        return this.#_title;

    }

    set title(value){
        this.#_title = value;

    }
}
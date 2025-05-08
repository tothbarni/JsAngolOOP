import Kerdes from "./Kerdes.js";

export default class Kerdesek{
    #kerdesLista;
    #szElem;
    #pont = 0;
    constructor(kerdesLista,szElem,pontszamElem){
        this.#kerdesLista=kerdesLista;
        this.#szElem = szElem;
        this.megjelenit();
    }

    megjelenit(){
        for (let index = 2; index < this.#kerdesLista.length; index++) {
            new Kerdes(this.#szElem,this.#kerdesLista[index],index)
        }
    }
}
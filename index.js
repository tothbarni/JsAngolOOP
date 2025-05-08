import { szenvedoMondatok } from "./angol.js";
import Kerdesek from "./Kerdesek.js";

let szElem = document.querySelector(".tarolo");

let pontElem = document.querySelector(".pontszam-container");
if (!pontElem) {
    pontElem = document.createElement("div");
    pontElem.classList.add("pontszam-container");
    document.querySelector("main").appendChild(pontElem);
}

new Kerdesek(szenvedoMondatok, szElem, pontElem);
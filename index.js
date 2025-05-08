import { szenvedoMondatok } from "./angol.js";
import Kerdesek from "./Kerdesek.js";

let szElem = document.querySelector(".tarolo");
let pontElem = document.querySelector(".tarolo .pontszam");

new Kerdesek(szenvedoMondatok, szElem, pontElem);


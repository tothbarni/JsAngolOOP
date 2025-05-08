import Kerdes from "./Kerdes.js";

export default class Kerdesek {
    #kerdesLista;
    #szElem;
    #pontszamElem;
    #pont = 0;
    #maxPont = 0;

    constructor(kerdesLista, szElem, pontszamElem) {
        this.#kerdesLista = kerdesLista;
        this.#szElem = szElem;
        this.#pontszamElem = pontszamElem;
        this.#keverKerdesek();
        this.megjelenit();
        this.#esemenykezeloInit();
    }

    #keverKerdesek() {
        const kerdesek = this.#kerdesLista.slice(2);
        for (let i = kerdesek.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [kerdesek[i], kerdesek[j]] = [kerdesek[j], kerdesek[i]];
        }
        this.#kerdesLista = [...this.#kerdesLista.slice(0, 2), ...kerdesek];
    }

    #esemenykezeloInit() {
        window.addEventListener("kivalaszt", (event) => {
            if (event.detail) {
                this.#pont++;
            }
            this.#maxPont++;
            this.#pontszamMegjelenit();
        });
    }

    #pontszamMegjelenit() {
        if (this.#maxPont > 0) {
            const szazalek = Math.round((this.#pont / this.#maxPont) * 100);
            let ertekeles = "";
            if (szazalek < 60) {
                ertekeles = "Próbálkozz még!";
            } else if (szazalek < 70) {
                ertekeles = "Elégséges";
            } else if (szazalek < 80) {
                ertekeles = "Közepes";
            } else if (szazalek < 90) {
                ertekeles = "Jó";
            } else {
                ertekeles = "Kiváló!";
            }
            
            this.#pontszamElem.innerHTML = `
                <div class="eredmeny">
                    <h3>Eredmény: ${this.#pont}/${this.#maxPont} pont (${szazalek}%)</h3>
                    <p>${ertekeles}</p>
                </div>
            `;
        }
    }

    megjelenit() {
        for (let index = 2; index < this.#kerdesLista.length; index++) {
            new Kerdes(this.#szElem, this.#kerdesLista[index], index);
        }
    }
}
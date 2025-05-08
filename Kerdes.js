export default class Kerdes {
    #szElem;
    #adat = {};
    #index;
    #buttonElem;
    #inputElem;
    #pontszamElem;
    #valaszolva = false;
  
    constructor(szElem, adat, index) {
      this.#szElem = szElem;
      this.#adat = adat;
      this.#index = index;
      this.megjelenit();
      let utolsoKerdesElem = this.#szElem.querySelector(".kerdes:last-child");
      this.#inputElem = utolsoKerdesElem.querySelector("input");
      this.#buttonElem = utolsoKerdesElem.querySelector("button");
      this.#pontszamElem = utolsoKerdesElem.querySelector(".pontszam");
      this.esemenykezelo();
    }
  
    esemenykezelo() {
      this.#buttonElem.addEventListener("click", () => {
        if (this.#valaszolva) {
          return;
        }
        
        let helyes = this.#inputElem.value === this.#adat.valasztas[0];
        let html = "";
        html = helyes ? "✅" : "❌";
        this.#pontszamElem.insertAdjacentHTML("beforeend", html);
        this.#valaszolva = true;
        this.#inputElem.disabled = true;
        this.#buttonElem.disabled = true;
        window.dispatchEvent(
          new CustomEvent("kivalaszt", { detail: helyes })
        );
      });
    }
  
    megjelenit() {
      let txt = this.#adat.mondat;
      let [elsoResz, masodikResz] = txt.split("_");
    
      let html = `
        <div class="kerdes">
            <p>${elsoResz}<input type="text"> ${masodikResz} (${this.#adat.alap})</p>
            <button>OK</button>        
            <div class="pontszam"></div>
        </div>`;
        
      this.#szElem.insertAdjacentHTML("beforeend", html);
    }
  }
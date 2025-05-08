export default class Kerdes {
  #szElem;
  #adat = {};
  #index;
  #buttonElem;
  #inputElem;
  #pontszamElem;
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
      let helyes = this.#inputElem.value === this.#adat.valasztas[0];
      let html = "";
      html = helyes ? "✅" : "❌";
      this.#pontszamElem.insertAdjacentHTML("beforeend", html)
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

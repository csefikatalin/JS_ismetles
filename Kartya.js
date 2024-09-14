export default class Kartya {
  #kutya = {}; //privát adattag

  constructor(kutya, szuloElem) {
    /* inicializálja az adattagokat */
    this.#kutya = kutya;
    this.szuloElem = szuloElem; 
    
    this.#egyKutyaKiiras();
    this.gombElem = $(".kivalaszt:last");

    this.#esemenyKezelo()
  }

  #esemenyKezelo() {
    /* eseménykezelőt a gombokra */
    
    this.gombElem.on("click", ()=> {
      //console.log(this); //az az elem, amelyik kiváltotta az eseményt
        //létrehozunk egy saját eseményt. 
        const e=new CustomEvent("kivalaszt",{detail:this.#kutya})
        window.dispatchEvent(e)
    });
  }

  /*  tagfüggvény */
  #egyKutyaKiiras() {
    this.szuloElem.append(`<div class="col-lg-4 col-md-6 card"> 
                            <div class="card-body">
                                <h3 class="card-title">${this.#kutya.nev}</h3>
                                <p class="card-text">kor: ${this.#kutya.kor}</p>
                                <p class="card-text">nem: ${this.#kutya.nem}</p>
                                <button class="kivalaszt btn btn-success">Kiválaszt</button>
                            </div>
                        </div>`);
  }
}

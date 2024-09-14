import { cimKiiras, egyKutyaKiiras } from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
let nev = "Dézi";
const cim = "Kutyák minden mennyiségben";

cimKiiras(cim);

kutyaLista.forEach((kutya, index) => {
  console.log(kutya, index);
  egyKutyaKiiras(kutya);
});

/* for (let index = 0; index < kutyaLista.length; index++) {
    egyKutyaKiiras(kutyaLista[index]);
    
} */

/* eseménykezelőt a gombokra */
const gombElem=$(".kivalaszt")
gombElem.on("click",(event)=>{
    console.log(event.target) //az az elem, amelyik kiváltotta az eseményt
})

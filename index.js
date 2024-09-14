import { kutyaLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";
const kivalasztottLitsa=[] 

const divElem = $(".tartalom");
const kivElem = $(".kivalasztottak");

new Kartyak(kutyaLista,divElem)

///melyik kártyára kattintunk? Az adatait tegyük bele a listába
//ha el akarunk érni egy privát adattagot: 1. getter az osztályban és azt gettert kell meghívni
//probléma, hogy ezt a gettert akkor kéne meghíyvni, ha rákattintnk a gombra. 
//feliratkozunk a saját eseményünkre
$(window).on("kivalaszt",(event)=>{
  console.log(event.detail)//event.detail  - ezt adtam át a saját eseménynél, az adott kártyához tartozó kutya adata.
  kivalasztottLitsa.push(event.detail)
  console.log(kivalasztottLitsa)
  new Kartyak(kivalasztottLitsa,kivElem)
})





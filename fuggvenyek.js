export function cimKiiras(cim) {
    // a header h1 tagjébe fűzzük hozzá a címet
    //Megfogjuk a h1-es teget
    //const h1Elem=document.querySelector("header h1")
    const h1Elem = $("header");
    console.log(h1Elem);
    //h1Elem.innerHTML += "<p>" + cim + "</p>";
    h1Elem.append(`<p> ${cim} </p>`);
  }

  /* készíts függvényt, akivel a kutya1 adatait irhatjuk ki a tartalom nevezető class-ba div-ben legye, a név, h3-as címben a kor p, nem p-tagben*/

  export function egyKutyaKiiras(kutya) {
    const divElem = $(".tartalom");   
    divElem.append(`<div class="col-lg-4 col-md-6 card"> 
                        <div class="card-body">
                            <h3 class="card-title">${kutya.nev}</h3>
                            <p class="card-text">kor: ${kutya.kor}</p>
                            <p class="card-text">nem: ${kutya.nem}</p>
                            <button class="kivalaszt btn btn-success">Kiválaszt</button>
                        </div>
                    </div>`);
  }

  /* 
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  */
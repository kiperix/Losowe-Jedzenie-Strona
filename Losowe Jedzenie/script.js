fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(request => request.json())
.then (data => getData(data))

function getData(dania){
    console.log(dania);
    const losoweDanie = dania["meals"][0];

    const nazwaLosowegoDania = losoweDanie['strMeal']
    console.log("Nazwa Dania: " + nazwaLosowegoDania);
    const paragraf = document.querySelector('.paragraf');
    paragraf.innerHTML = nazwaLosowegoDania;

    //skladniki
    console.log(dania);
    const losowySkladnik = dania["meals"][0];
    for(let i=1; i<=20;i++){
        if(losoweDanie["strIngredient"+i]){
            const losoweSkladniki = losoweDanie["strIngredient"+i]
    console.log("Nazwa Skladnika: " + losoweSkladniki);
    const table = document.querySelector('table')
    const row = table.insertRow(table.rows.lenght);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = losoweSkladniki;
    cell2.innerHTML = losoweDanie['strMeasure'+i]
        }
    
    }
    const skladniki = document.querySelector('.cont1');
   
    //zdjecie 

    console.log(dania);

    const zdjecie = losoweDanie['strMealThumb']
    console.log("Zdjecie: " + zdjecie);
    const zdjeciehtml = document.querySelector('img');
    zdjeciehtml.src = zdjecie;

   //proporcje
   
   console.log(dania);
   for(let i=1; i<=20;i++){
    if(losoweDanie['strMeasure'+i]){
   const skladnik = losoweDanie['strMeasure'+i]
   console.log("Proporcje: " + skladnik);
    }
}
//przepis
const przepis = losoweDanie['strInstructions']
console.log(przepis);
const divprzepis = document.querySelector('.przepis')
divprzepis.innerHTML = przepis;





}
//Basic funktioner til database fetch
//Database url
const url = "https://hnrcndxoquhelmpaqheh.supabase.co";
//Variable til APIkey
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucmNuZHhvcXVoZWxtcGFxaGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjI5MTksImV4cCI6MjAwOTM5ODkxOX0.Kj0vgWH3imfxSBjrhKN9746mppt3v9ldhd1y2ugyfyc";
//Få url fra input i hjul på forsiden
const urlParams = new URLSearchParams(window.location.search);
const urlEnd = urlParams.get("seasons");
const urlEndFull = "?aarstid=eq." + urlEnd;
//Fetch database og convert til json
fetch(url,{
    method: "GET",
    headers: {
    apikey: apikey
    }
})
    .then(res=>res.json())
    .then(showData);


function showData(items) {
    console.log(items);
    items.forEach(showItem);
    
}
function checkSeason(season){
    if (season == "foraar") {
        document.querySelector("#navblomst").classList.add(".saturate")
    } else if(season == "sommer"){
        document.querySelector("#navsol").classList.add(".saturate")
    } else if(season == "efteraar"){
        document.querySelector("#navblad").classList.add(".saturate")
    } else {
        document.querySelector("#navsnefnug").classList.add(".saturate")
    }
}

// function showItem(item){
//     console.log("item");
//     const template = document.querySelector("template").content;
//     const copy = template.cloneNode(true);
//     copy.querySelector(".column-text-title").textContent = "Navn: " + item.title;
//     copy.querySelector(".column-text-category").textContent = "Kategori: " + item.categoriesName;
//     copy.querySelector(".column-text-id").textContent = "ID: " + item.id;

//     const parent = document.querySelector(".container");
//     parent.appendChild(copy);
// }
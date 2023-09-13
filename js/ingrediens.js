//Basic funktioner til database fetch
//Database url
const url = "https://hnrcndxoquhelmpaqheh.supabase.co";
//Variable til APIkey
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucmNuZHhvcXVoZWxtcGFxaGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjI5MTksImV4cCI6MjAwOTM5ODkxOX0.Kj0vgWH3imfxSBjrhKN9746mppt3v9ldhd1y2ugyfyc";
//Få url fra input i hjul på forsiden
const urlParams = new URLSearchParams(window.location.search);
const urlEnd = urlParams.get("title");
const urlEndFull = "?title=eq." + urlEnd;
//Fetch database og convert til json
fetch(url+"/rest/v1/dataset" + urlEndFull,{
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
//highlight nav bar - sorry hvem end der skal læse
function checkSeason(season){
    if (season == "foraar") {
        document.querySelector("#navblomst").style.filter = "saturate(100%)";
    } else if(season == "sommer"){
        document.querySelector("#navsol").style.filter = "saturate(100%)";
    } else if(season == "efteraar"){
        document.querySelector("#navblad").style.filter = "saturate(100%)";
    } else {
        document.querySelector("#navsnefnug").style.filter = "saturate(100%)";
    }
  }

function showItem(item){
    //fyld content til main ingrediens
    const template = document.querySelector("#ingrediens-template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".ingrediens-text").innerHTML = item.ingrediens_text;
    copy.querySelector(".ingrediens-content-right-img").src = item.profile_image_src; 
    const parent = document.querySelector(".ingrediens-content");
    parent.appendChild(copy);


    checkSeason(item.aarstid);
    //Udfyld opskrifter
    //jeg ku ikk finde på en bedre måde at gøre det på, im sorry
    const opskriftTemplate = document.querySelector("#opskrifter-template").content;
    const opskriftCopy = opskriftTemplate.cloneNode(true);
    //Opskrift 1
    opskriftCopy.querySelector("#opskrift-title-1").textContent = item.opskrift_navn_1;
    opskriftCopy.querySelector("#opskrift-billede-1").src = item.opskrift_billede_1;
    opskriftCopy.querySelector("#opskrift-link-1").href = item.opskrift_link_1;
    //Opskrift 2
    opskriftCopy.querySelector("#opskrift-title-2").textContent = item.opskrift_navn_2;
    opskriftCopy.querySelector("#opskrift-billede-2").src = item.opskrift_billede_2;
    opskriftCopy.querySelector("#opskrift-link-2").href = item.opskrift_link_2;
    //Opskrift 3
    opskriftCopy.querySelector("#opskrift-title-3").textContent = item.opskrift_navn_3;
    opskriftCopy.querySelector("#opskrift-billede-3").src = item.opskrift_billede_3;
    opskriftCopy.querySelector("#opskrift-link-3").href = item.opskrift_link_3;

    const opskriftParent = document.querySelector(".opskrifter");
    opskriftParent.appendChild(opskriftCopy);
}

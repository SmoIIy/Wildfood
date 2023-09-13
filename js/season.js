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
fetch(url+"/rest/v1/dataset" + urlEndFull,{
    method: "GET",
    headers: {
    apikey: apikey
    }
})
    .then(res=>res.json())
    .then(showData);


//loop gennem items
function showData(items) {
    console.log(items);
    items.forEach(showItem);
}




 function showItem(item){
    console.log("item");
    //generate main content 
    //tilføjet en boolean i databasen, for at sørge for at det ikk printes 3 gange
    if(item.print_text_check){
    console.log(item.aarstid_text);
    const contentTemplate = document.querySelector("#season-text").content;
    const contentCopy = contentTemplate.cloneNode(true);
    contentCopy.querySelector(".season-text-p").innerHTML = item.aarstid_text;
    contentCopy.querySelector(".season-content-right-img").src = item.aarstid_icon;
    const contentParent = document.querySelector(".season-content");
    contentParent.appendChild(contentCopy);
    }
    
    

        
    //generate cards
    const template = document.querySelector("#card").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".ingrediens-title").textContent = item.title;
    copy.querySelector(".ingrediens-img").src = item.profile_image_src;
    copy.querySelector(".ingrediens-text").textContent = item.text_thumbnail;
    copy.querySelector(".ingrediens-knap").href = "ingrediens.html?title=" + item.title;

    const parent = document.querySelector(".grid-container");
    parent.appendChild(copy);
 }
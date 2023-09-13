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

function showItem(item){
    
}

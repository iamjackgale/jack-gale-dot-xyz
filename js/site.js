var myVar;
var root = document.documentElement;
var rndNum;
    
async function myFunction() {
    var rndNum =  Math.random() * 3000;
    console.log(rndNum);
    window.scrollTo(0, 0);
    window.setTimeout(showPage, rndNum);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("header").style.display = "block";
}
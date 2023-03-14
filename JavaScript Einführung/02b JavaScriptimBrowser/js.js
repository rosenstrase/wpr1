let hoch = document.getElementById("up");
let runter = document.getElementById("down");
let addieren = document.getElementById("addieren");

addieren.addEventListener("click", () => {
    let zahl1 = document.getElementById("zahl1").value;
    let zahl2 = document.getElementById("zahl2").value;
    let ergebnis = parseInt(zahl1)+parseInt(zahl2);
    document.getElementById("ergebnis").innerHTML=ergebnis;
})

hoch.addEventListener("click", () => {
    let inhalt = document.getElementById("zaehler").innerText;
    let zahl = parseInt(inhalt)+1;

    if (zahl < 10){
        document.getElementById("zaehler").innerText=zahl;
    }else{
        hoch.disabled = true;
    }
})

runter.addEventListener("click", () => {
    let inhalt = document.getElementById("zaehler").innerText;
    let zahl = parseInt(inhalt)-1;

    if (zahl > -10){
        document.getElementById("zaehler").innerText=zahl;
    }else{
        runter.disabled = true;
    }
})




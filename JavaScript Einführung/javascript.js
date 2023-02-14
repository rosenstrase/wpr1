console.log(document.getElementById("a1").innerHTML);
document.addEventListener("DOMContentLoaded", ()=> {
    console.log("hello world again!");
    let ausgabe = document.getElementById("a1");
    console.log(ausgabe);
    console.log(ausgabe.innerHTML);
    ausgabe.innerHTML +="<br> und das finde ich toll!";
    console.log(ausgabe.innerHTML);
})

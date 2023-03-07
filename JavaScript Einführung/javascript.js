console.log(document.getElementById("a1").innerHTML);
document.addEventListener("DOMContentLoaded",
    () => {
        console.log("hello world again!");
        let ausgabe = document.getElementById("a1");
        console.log(ausgabe);
        console.log(ausgabe.innerHTML);
        ausgabe.innerHTML += "<br> und das finde ich toll!";
        console.log(ausgabe.innerHTML);
        let container = document.getElementsByTagName("div");
        console.log(container);
        alert(container[0].id);
        alert(container[0].innerHTML);
        alert(container[0].innerText);
        for (let i = 0; i < container.length; i++) {
            ausgabe.innerHTML += "<br>Das " + (i + 1) + "te Element hat die id " + container[i].id
            console.log(ausgabe.innerHTML);
        }
        let x1=document.getElementById("a2");
        let y1=x1.childNodes[1].childNodes[0];
        y1.nodeValue="Versuch";

        x1.style.fontSize="1.8em";
        x1.style.color = "#b80926";

        /*auf das element mit der id=b1 zugreifen*/
        let b1 = document.getElementById("b1");

        /*wir erstellen einen Text(knoten) mit dem inhalt "Hier steht..." und schreiben diesen text in die variable content*/
        let content = document.createTextNode("Hier steht der Inhalt von B1");

        /*wir erstellen ein leeres p-element*/
        let paragraph = document.createElement("p");

        /*der content wird dem element paragraph als kind hinzugefügt*/
        paragraph.appendChild(content);

        /*der paragraph (mit text) wird als kind*/
        b1.appendChild(paragraph);
    })

"use strict"

////////////////////////////////////////////////////////////////////////////
// Zuerst erstellen wir ein paar Variablen. Was hier genau passiert,
// ist (jetzt) nicht wichtig, das einzige, was wichtig ist, dass wir
// hier das aktuelle Datum abfragen und Teile davon in Variablen schreiben
///////////////////////////////////////////////////////////////////////////

// Tag im Monat
let dayOfMonth = (new Date()).getDate()

// Der Name aktuellen Monats
let monthName = (new Date()).toLocaleString(["de", "en"], {month: "long"})

// Das aktuelle Jahr (Schreibweise 1)
let year1 = (new Date()).getFullYear()

// Das aktuelle Jahr (Schreibweise 2)
let year2 = (new Date()).toLocaleString(["de", "en"], {year: "numeric"})

////////////////////////////////////////////////////////////////////////////
// Aufgabe:
// 
// 1) Um was für einen Typ handelt es sich bei der Variable "dayOfMonth"
//    sowie "monthName"? Verwende dazu den "typeof"-Operator!
// 2) Warum klappt "year1 + 5", aber "year2 + 5" liefert eine andere Ausgabe?
//    Wie kann der typeof-Operator dir dabei helfen?
// 3) Erstelle eine Datumsausgabe. Beispielsweise sollte am 20. August 2020
//    folgender Text über ein console.log ausgegeben werden:
//      >> Heute ist der 20. August 2020
//    Verwende dazu den "+"-Operator. Bedenke, dass du mehrere Operatoren 
//    hintereinander hängen darfst: 
//      >> console.log("a" + "b" + "c") => Gibt "abc" aus
// 
////////////////////////////////////////////////////////////////////////////

// Passe den Code hier drunter an!
console.log("Hier sollen jetzt die Lösungen de Aufgaben als Konsole ausgegeben werden.");
// Aufgabe 1
console.log(typeof dayOfMonth); // Output: number
console.log(typeof monthName); // Output: string
// Aufgabe 2
console.log(year1 + 5)
console.log(year2 + 5)
console.log(typeof year1) // Weil year1 eine number Variable ist
console.log(typeof year2) // und year 2 eine string Variable
// Aufgabe 3
console.log("Heute ist der " + dayOfMonth + ". " + monthName + " " + year2)



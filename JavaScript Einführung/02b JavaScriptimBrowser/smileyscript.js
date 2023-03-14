let froehlich = document.getElementById("froehlich");
let traurig = document.getElementById("traurig");

froehlich.addEventListener("click", () => {
    document.getElementById("smiley").src="smiley%20happy.png";
    froehlich.disabled = true;
    traurig.disabled = false;
})

traurig.addEventListener("click", () => {
    document.getElementById("smiley").src="smiley%20sad.png";
    froehlich.disabled = false;
    traurig.disabled = true;
})


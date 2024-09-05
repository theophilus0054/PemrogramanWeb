document.getElementById("conversion").addEventListener("submit", function(event) {
    event.preventDefault();
    let x = document.getElementById("in").value;
    var out;
    if (x >= 0 && x <= 40)
        out = "E";
    else if (x >= 41 && x <= 55)
        out = "D";
    else if (x >= 56 && x <= 60)
        out = "C";
    else if (x >= 61 && x <= 65)
        out = "BC";
    else if (x >= 66 && x <= 70)
        out = "B";
    else if (x >= 71 && x <= 80)
        out = "AB";
    else if (x >= 81 && x <= 100)
        out = "A";
    document.getElementById("hasil").innerHTML = out;
});
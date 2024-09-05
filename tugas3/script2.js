document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener("click", function() {
        let x = parseInt(document.getElementById("angka1").value);
        let y = parseInt(document.getElementById("angka2").value);
        let op = this.value;
        var hasil;

        if (op === "+")
            hasil = x + y;
        else if (op === "-")
            hasil = x - y;
        else if (op == "*")
            hasil = x * y;
        else if (op === "/")
            hasil = x / y;
        else if (op === "%")
            hasil = x % y;

        document.getElementById("hasil").innerHTML = hasil;

    });
});
let loendus = 0;

document.getElementById("loenduseNupp").addEventListener("click", function() {
    loendus++;
    document.getElementById("loendur").innerText = loendus;
})

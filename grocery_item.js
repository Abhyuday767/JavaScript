let g1, g2, g3;
function calculateSum(){
    g1 = parseFloat(document.getElementById("g1").value);
    g2 = parseFloat(document.getElementById("g2").value);
    g3 = parseFloat(document.getElementById("g3").value);

    let sum1 = g1 + g2 + g3;
    document.getElementById("result").innerText = `The total amount is : ${sum1}`;
}
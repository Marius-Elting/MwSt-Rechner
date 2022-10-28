
let inputLabel = document.getElementById("inputLabel");
let endPreisTxT = document.getElementById("endPreisTxT");
let satz = 1.19;
let input = Number(document.getElementById("numberInput").value);
let endpreis = document.getElementById("endpreis");
let mwstBetragOutput = document.getElementById("MwstBetrag");
let mwstBetrag = 0;
let output = 0;
let method = "Netto-Brutto";


const selectBruNet = (value) => {
    console.log(value);
    method = value;
    switch (value) {
        case "Brutto-Netto": inputLabel.innerHTML = "Bruttobetrag (Preis mit MwSt) in Euro";
            endPreisTxT.innerHTML = "Nettobetrag";
            break;
        case "Netto-Brutto": inputLabel.innerHTML = "Nettobetrag (Preis ohne MwSt) in Euro";
            endPreisTxT.innerHTML = "Bruttobetrag (Endpreis";
    }
    return method;
};


const selectSatz = (value) => {
    switch (value) {
        case "Satz19": satz = 1.19;
            break;
        case "Satz7": satz = 1.07;
    }
    console.log(satz);
    return satz;
};


const berechnen = () => {
    input = Number(document.getElementById("numberInput").value);
    console.log(input);
    console.log(satz);
    switch (method) {
        case "Netto-Brutto": output = input * satz;
            mwstBetrag = output - input;
            break;
        case "Brutto-Netto": output = input / satz;
            mwstBetrag = input - output;
            break;
    }
    roundedOutput = output.toFixed(2);
    roundedMwstOutput = mwstBetrag.toFixed(2);
    endpreis.innerHTML = roundedOutput + "€";
    mwstBetragOutput.innerHTML = roundedMwstOutput + "€";
};
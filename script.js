let arr = [];

for (i = 0; i < 249; i = i + 1){
    arr[i] = Math.round ((Math.random() * 290)) + 10;
}

for (i = 250; i < 500; i= i + 1){
    arr[i] = Math.round ((Math.random() * 200)) + 500;
}

let HoogsteNummer = 0;
let HoogsteIndex = 0;
let LaagsteNummer = arr[0];
let AantalGetallen = arr.length;

for (i = 0; i < arr.length; i = i + 1){
    if (arr[i] > HoogsteNummer){
        HoogsteNummer = arr [i];
        HoogsteIndex = i
    }
    if (arr [i] < LaagsteNummer){
        LaagsteNummer = arr[i];
    }
}

let div = document.createElement("p");
let tekst = document.createTextNode(`Uit het array van ${AantalGetallen} getallen is het getal ${HoogsteNummer} het grootst. Dit getal zit in index ${HoogsteIndex} in het array.`)
div.appendChild(tekst);

document.body.appendChild(div);

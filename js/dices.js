function randomize(value){
    return Math.round(Math.floor(Math.random() * (value - 1))) + 1;
}

function genRoll(value, qtd){
    var result = 0;
    
    for (var i = 0; i < parseInt(qtd); i++){
        result += randomize(parseInt(value));
    }
    return result;
}

function roll(){
    var value = document.getElementById('values').value;
    var qtd = document.getElementById('qtd').value;

    document.getElementById('result').innerHTML = genRoll(value, qtd);
}
var depoimento = "";

function criarDepoimento(){
    depoimento = document.getElementById('depoimento').value;
    document.getElementById('text').innerHTML = depoimento;
}
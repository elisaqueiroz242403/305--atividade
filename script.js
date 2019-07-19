let idade = Number (prompt("Digite sua idade"));
let aposentado = prompt("Voce e aposentado?");


if(idade >= 60 || aposentado === "sim"){
    alert("ENTRADA GRATIS");
}else if(idade >= 0 && idade <= 12 ){
    alert("ENTRADA 10 REAIS");
}else if(idade >=13 && idade <= 17 ){
    alert("ENTRADA 15 REAIS");
}else if(idade >= 18 && idade >= 59){
    let estudante = prompt("Voce e estudante?");
    if(estudante == "sim"){
        alert("MEIA ENTRADA")
    }
    else{
        alert("ENTADA 35 REAIS");
    }
}
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
        alert("ENTRADA 35 REAIS");
    }
}




let idade = Number (prompt("Digite sua idade"));

    if(idade >=25 && idade <= 60){
       let salario= Number(prompt("Digite seu salario"));
          if (salario >=2000){
             let valor = Number(prompt("Digite o valor do emprestimo desejado"))
                if(valor <= 10*salario){
                   console.log("Emprestimo aprovado")
                }else{
                   console.log("Valor nao permitido")
                }  
            }else{
            console.log("Salario nao permitido para o emprestimo")
            }
        }else{
        console.log("Idade nao permitida para emprestimo")
    }

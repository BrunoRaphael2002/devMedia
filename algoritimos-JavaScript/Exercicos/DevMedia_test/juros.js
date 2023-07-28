import calculadoraJuros from 'readline-sync';

console.log("\n Aplicação de Juros");

let juros;

let valor_devido = calculadoraJuros.question(" Informe o valor devido : R$");

if(valor_devido > 0){
    



let dias_atrasados = calculadoraJuros.question(" Informe quantos dias se passaram desde o vencimento do boleto : ");

    if (dias_atrasados > 0 ){

    if(dias_atrasados > 15 ){
        juros = 10;
       
    }
    else {
        juros = 5;
        
    } 
    
    
    




    valor_devido = Number(valor_devido);
    dias_atrasados = Number(dias_atrasados);


    let total_Juros = (valor_devido / 100 ) * juros;

    let dividaTotal = valor_devido + total_Juros;



    console.log(" valor original da divida: R$" +valor_devido);
    console.log(" Dias atrasados : " +dias_atrasados);
    console.log(" Taxa de Juros : " +juros+ "%");
    console.log(" Valor total com juros: R$ "+dividaTotal);

    }
    else{
        console.log("Voce esta em dia !");
    }

}
else{
    console.log(" O Valor da divida deve ser maior que ZERO");
}
function regalo(cliente) {
    var valor, cliente;

    cliente = 10;

    for (cliente = 1; cliente <= 10; cliente++) {
        valor = Math.floor (Math.random () * 15000);
        //console.log("cliente " + cliente + ": " + valor);  
    
        if (valor > 10000) {      
        console.log("cliente " + cliente + ": " + valor + " --->" + " Cesta con jamon");  
        }

        else if (valor > 1000) {
        console.log("cliente " + cliente + ": " + valor + " --->" + " Cesta sin jamon");  
        }
        else {
        console.log("cliente " + cliente + ": " + valor + " --->" + " Carta");  
        }
    }
}
regalo();
function contar(){
    var num_inicial = document.getElementById('inicio');
    var num_final = document.getElementById('fim');
    var num_passo = document.getElementById('passo');
    var res = document.getElementById('res');

    if (num_inicial.value.length == 0 || num_final.value.length == 0 || num_passo.value.length == 0) {
        window.alert('[ERRO] Digite os valores para a operação!!!')

    }else {
        var inicio = Number(num_inicial.value);
        var fim = Number(num_final.value);
        var passo = Number(num_passo.value);
        
        if (passo == 0) {
            window.alert('Número de passos inválido! Será considerado o valor 1.')
            passo = 1;
    
        }
        if (inicio > fim) {
            // Contagem descrescente
            let resultado = []
            for(inicio; inicio >= fim; inicio -= passo){
                resultado.push(inicio)            
            }
            res.innerHTML = `Passos: ${resultado.join(' 👉 ')} 🏁`
        
        }else {
            // Contagem crescente
            let resultado = []
            for(inicio; inicio <= fim; inicio += passo){
                resultado.push(inicio)            
            }
            res.innerHTML = `Passos: ${resultado.join(' 👉 ')} 🏁`

        }
    }           
}

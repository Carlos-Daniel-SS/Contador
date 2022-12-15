function contar(){
    var num_inicial = Number(document.getElementById('inicio').value);
    var num_final = Number(document.getElementById('fim').value);
    var num_passo = Number(document.getElementById('passo').value);
    var res = document.getElementById('res');

    if(num_inicial <= 0){
        res.innerHTML = `Impossível ser contado!`
    
    }else if(num_final < 0 || num_final < num_inicial){
        res.innerHTML = `Digite um valor final correto para contagem`
    
    }else{
        if (num_passo <= 0){
            window.alert('Número de passos inválido! Será considerado o valor 1')
            num_passo = 1
        }
        let resultado = []
        for(num_inicial; num_inicial <= num_final; num_inicial+=num_passo){
            resultado.push(num_inicial)            
        }
        res.innerHTML = `Passos: ${resultado.join(' 👉 ')} 🏁`
    }           
}

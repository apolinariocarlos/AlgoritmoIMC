

// variaveis ---------   

let niveis = ["Muito Abaixo do peso",
              "Abaixo do peso",
              "Peso normal",
              "Obesidade Grau I",
              "Obesidade Grau I",
              "Obesidade Grau III",]

let pessoas = ["Igor", "Marcia", "Jose"]    //  aqui e ARRAY
let massas = [100, 68, 79]
let altura = [1.80, 1.75, 1.68]


//Funções--------

function calcularIMC(massa,altura) {
    let imc = massa/(altura**2)
    return imc
}

function verificaNivel(imc){   

    let nivel = 0     

    if(imc<17) {      // loop
        nivel = 0
    } else if (imc < 18.5) {
        nivel = 1
    }else if (imc < 25) {
        nivel = 2
    } else if (imc < 30) {
        nivel = 3
    } else if (imc < 35) {
        nivel = 4
    } else if (imc < 40) {
        nivel = 5
    } else {
        nivel = 6
    }

    return nivel
}


//-------------/

// Execução do Código  

for (let indice = 0; indice < pessoas.length; indice++) {   // Aqui e for.

    // Certifique-se de que o índice não ultrapasse os limites do array
   
    if (indice < pessoas.length) {
        let pessoa = pessoas[indice];
        let massa = massas[indice];

        // Certifique-se de que o índice não ultrapasse os limites do array
        
        if (indice < altura.length) {
            let alturaDoIndice = altura[indice];

            let imc = calcularIMC(massa, alturaDoIndice);
            let nivel = verificaNivel(imc);

            console.log("Nome: " + pessoa);
            console.log("Peso: " + massa);
            console.log("Altura: " + alturaDoIndice);
            console.log("IMC: " + imc.toFixed(2));
            console.log("Estado: " + niveis[nivel]);
            console.log("");
        } else {
            console.log("Erro: Índice fora dos limites para a array de alturas");
        }
    } else {
        console.log("Erro: Índice fora dos limites para a array de pessoas");
    }
}

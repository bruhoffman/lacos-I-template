const somarNumero = () => {
    let numero;
    let soma = 0;
    numero = Number(prompt("Digite um número:"));

    while (numero !== 0) {
        soma = soma + numero;
        numero = Number(prompt("Digite um número:"));
    }

    console.log(soma);
}

//somarNumero();

const imprimirNumeros = function () {
    let num = Number(prompt("Digite um número qualquer:"));

    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

//imprimirNumeros();

function percorrerArray() {
    const arrayNumeros = [1, 2, 3, 5, 7];

    for (let i = 0; i < arrayNumeros.length; i++) {
        console.log(`O elemento no índice ${i} é ${arrayNumeros[i]}`);
    }
}

//percorrerArray();
 export default function validarcpf(cpf:string){
    let digitos = cpf.slice(0, 9)
    const verificadores = cpf.slice(9)

    // validação do primeiro digito verificador
    let peso1:number = 10
    const numeros:number[] = []
    for(let i = 0; i < digitos.length; i++) {
        numeros.push(Number(digitos[i]) * peso1)
        peso1 -= 1
    }
    let soma_numeros:number = 0
    for(let i = 0; i < numeros.length; i++){
        soma_numeros += numeros[i]
    }
    soma_numeros = soma_numeros * 10
    soma_numeros = soma_numeros % 11

    if (soma_numeros !== Number(verificadores[0])) {
        console.error('Dígito verificador inválido');
        // Ou: throw new Error('Validação falhou');
        // Ou: return false; // Se estiver numa função
    } else {
        digitos += verificadores[0]; // Forma abreviada
    }

    // validação do segundo digito verificador
    let peso2:number = 11
    const numeros2:number[] = []
    for(let i = 0; i < digitos.length; i++) {
        numeros2.push(Number(digitos[i]) * peso2)
        peso2 -= 1
    }
    let soma_numeros2:number = 0
    for(let i = 0; i < numeros2.length; i++){
        soma_numeros2 += numeros2[i]
    }
    soma_numeros2 = soma_numeros2 * 10
    soma_numeros2 = soma_numeros2 % 11
    if(soma_numeros2 !== Number(verificadores[1])){
        return false
    } else {
        console.log("tá passando")
        return true}
}



//Função para limpar o formulário
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';

    document.getElementById('estado').value = '';
}

//Função para  o formulário
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
 
    document.getElementById('estado').value = endereco.uf;

}
// numero = numero.replace(".",null);
// numero = numero.replace("-",null);

//valida os números do cep
const eNumero = (numero) => /^[0-9]+$/.test(numero)
/* ^ : primeiro valor tem que ser número
   0-9: algortimos de 0 a 9
   +: os número podem se repetir
   $: tem que terminar com número
*/
// 
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


// o cep que for digitado será passado pela api
const pesquisarCep = async () => {
    limparFormulario()
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado'
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto.';
    }

}
//event listenner fica esperando um evento acontecer

document.getElementById('cep').addEventListener('focusout', pesquisarCep);


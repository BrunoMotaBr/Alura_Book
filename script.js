async function buscaEndereco(cep){
    try
    {  
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error('Cep não existe!')
        }
        var cidade = document.getElementById("cidade");
        var estado = document.getElementById("estado");
        var logradouro = document.getElementById("endereco");
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;
        logradouro.value = consultaCEPConvertida.logradouro
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida
    }catch(erro){
        alert(erro)
        return null
    }
}


const cep = document.getElementById('cep')

cep.addEventListener('focusout', () => buscaEndereco(cep.value))


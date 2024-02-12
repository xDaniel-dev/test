
function apenasletras(str){

    return /[1234567890!@#$%¨&*()+{}[~?/;.,><]/.test(str)
}

const nome = prompt('qual seu nome ?')

if(apenasletras(nome)) {
    alert('digite apenas letras')
} else {
    alert(`seu nome é ${nome}`)
}
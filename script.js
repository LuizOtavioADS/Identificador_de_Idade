function verificar(){
    let data = new Date ()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`

    }
}
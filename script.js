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
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebe-m.jpg')
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'jovem-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'jovem-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}
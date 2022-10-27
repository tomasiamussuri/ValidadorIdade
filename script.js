function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Masculino'
            if (idade < 12) {
                // criança - mas
                img.setAttribute('src', './img/menino_crianca.png')
            } else if (idade < 21) {
                // jovem - mas
                img.setAttribute('src', './img/homem_jovem.png')
            } else if (idade < 50) {
                // adulto - mas
                img.setAttribute('src', './img/homem_adulto.png')
            } else {
                // idoso - mas
                img.setAttribute('src', './img/homem_senhor.png')
            }
        } else {
            genero = 'Feminino'
            if (idade < 12) {
                // criança - fem
                img.setAttribute('src', './img/menina_crianca.png')
            } else if (idade < 21) {
                //jovem - fem
                img.setAttribute('src', './img/mulher_jovem.png')
            } else if (idade < 50) {
                // adulta - fem
                img.setAttribute('src', './img/mulher_adulta.png')
            } else {
                //senhora - fem
                img.setAttribute('src', './img/mulher_senhora.png')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
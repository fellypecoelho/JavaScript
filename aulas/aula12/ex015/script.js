function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('res')

  if (fano.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente.')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')

    if (fsex[0].checked) {  
      genero = 'Homem'
      if ( idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src' , './images/bebe.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src' , './images/jovem-m.png')
      }else if (idade < 50) {
        //adulto
        img.setAttribute('src' , './images/adulto-m.png')
      }else if (idade < 100) {
        //idoso
        img.setAttribute('src' , './images/idoso-m.png')
      }else{
        //morto
        img.setAttribute('src' , './images/morto.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if ( idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src' , './images/bebe.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src' , './images/jovem-f.png')
      }else if (idade < 50) {
        //adulto
        img.setAttribute('src' , './images/adulto-f.png')
      }else if (idade < 100) {
        //idoso
        img.setAttribute('src' , './images/idoso-f.png')
      }else{
        //morto
        img.setAttribute('src' , './images/morto.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.style.textAlign = 'Center'
    res.appendChild(img)
  }
}
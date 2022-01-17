function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 11
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
  //Bom dia
  img.src = './images/manha.png'
  window.document.body.style.background = '#88AF1D'
} else if (hora >= 12 && hora < 18) {
  //Boa tarde
  img.src = './images/tarde.png'
  window.document.body.style.background = '#9A560D'
}else {
  //Boa noite
  img.src = './images/noite.png'
  window.document.body.style.background = '#313848'
}
}
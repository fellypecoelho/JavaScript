function contar(){
  var inicio = window.document.getElementById('txti')
  var fim = window.document.getElementById('txtf')
  var pular = window.document.getElementById('txtp')
  var res = window.document.getElementById('res')


  if (inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
    window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Ocorreu um erro na contagem. Tente novamente.'
  } else{
    res.innerHTML = 'contando: <br>'

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(pular.value)
  if(p<=0){
    window.alert('Pulo inválido! Considerando pular 1')
    p=1
  }
  if (i < f){
    //CONTAGEM CRESCENTE
    for(var c=i ; c<=f ; c+=p) {
      res.innerHTML += ` ${c} \u{27A1}`
    }
  } else{
    //CONTAGEM DECRESCENTE
    for(var c=i ; c>=f ; c-=p){
      res.innerHTML += ` ${c} \u{27A1}`
    }
    }
    res.innerHTML += `\u{1f3c1}`
    }
    
    
  }

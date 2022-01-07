function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date() // apenas data
    var hora = data.getHours() // apenas horas
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){

        img.src = "img/manha.png"
        document.body.style.background = '#c5799b'
    }else if(hora >= 12 && hora < 18){

        img.src = "img/tarde.png"
        document.body.style.background = '#8e4a1f'


    }else{
        img.src = "img/noite.png"
        document.body.style.background = '#1d2935'
    }


}
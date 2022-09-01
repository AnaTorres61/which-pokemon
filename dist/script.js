var name = "MEW";

function confirmar(){
  var pokname = document.getElementById("nome").value;
  if(pokname.toLowerCase() == name.toLowerCase()){
    document.getElementById("imagem").src = 'https://www.vippng.com/png/full/355-3553438_mew-pokemon-png.png';
    document.getElementById("nome").value = "ACERTOU!!!";
  }else{
    document.getElementById("nome").value = "Errou! Tente Novamente";
    setTimeout(function(){
      document.getElementById("nome").value = null;
    }, 1800)
  }
}
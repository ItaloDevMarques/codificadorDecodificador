function codificarTexto(texto) {
  return texto.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");
}

function decodificarTexto(texto) {
  return texto.replace(/enter/g, "e")
              .replace(/imes/g, "i")
              .replace(/ai/g, "a")
              .replace(/ober/g, "o")
              .replace(/ufat/g, "u");
}

document.querySelector(".conversor__conteudo__opcoes__codificador").onclick = () => {
  var textoParaCodificar = document.getElementById("texto__para__conversao").value;
  var textoCriptografado = codificarTexto(textoParaCodificar);
  document.getElementById("texto__resultado").value = textoCriptografado;
};

document.querySelector(".conversor__conteudo__opcoes__decodificador").onclick = () => {
  var textoParaDecodificar = document.getElementById("texto__para__conversao").value;
  var textoDescriptografado = decodificarTexto(textoParaDecodificar);
  document.getElementById("texto__resultado").value = textoDescriptografado;
};

function copiarTextoResultado() {
  // Seleciona o campo de resultado
  var campoResultado = document.getElementById("texto__resultado");

  // Seleciona o texto dentro do campo de resultado
  campoResultado.select();

  try {
    // Copia o texto para a área de transferência usando a API Clipboard
    document.execCommand("copy");
    // Alerta o usuário que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
  } catch (err) {
    // Se houver algum erro, exibe uma mensagem de erro
    alert("Não foi possível copiar o texto: " + err);
  }
}

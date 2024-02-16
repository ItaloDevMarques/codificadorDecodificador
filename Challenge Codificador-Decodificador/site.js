function criptografarTexto() {
  const regras = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  const texto = document.getElementById("texto__para__conversao").value;
  const caracteres = texto.split("");
  const textoCriptografado = caracteres.map((caractere) => {
    return regras[caractere] || caractere;
  });
  
  return textoCriptografado.join("");
}

const textareaEntradaCript = document.getElementById("texto__para__conversao");
const textareaSaidaCript = document.getElementById("texto__resultado");

// Adiciona o evento onclick ao botão
document.querySelector(".conversor__conteudo__opcoes__codificador").onclick = () => {
  // Obtém o texto digitado
  const textoDigitadoCript = textareaEntradaCript.value;

  // Criptografa o texto
  const textoCriptografado = criptografarTexto(textoDigitadoCript);

  // Exibe o texto criptografado
  textareaSaidaCript.value = textoCriptografado;
};


function descriptografarTexto() {
  // Regras de descriptografia
  const regras = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  const textoCriptografado = document.getElementById("texto__para__conversao").value;
  // Converte o texto para um array de caracteres
  const caracteres = textoCriptografado.split("");

  // Substitui os caracteres de acordo com as regras
  const textoDescriptografado = caracteres.map((caractere) => {
    for (const chave in regras) {
      if (regras[chave].toLowerCase() === caractere.toLowerCase()) {
        return chave;
      }
    }
    return caractere;
  });

  // Retorna o texto descriptografado
  return textoDescriptografado.join("");
}



const textareaEntradaDesc = document.getElementById("texto__para__conversao");
const textareaSaidaDesc = document.getElementById("texto__resultado");

document.querySelector(".conversor__conteudo__opcoes__decodificador").onclick = () => {
  // Obtém o texto digitado
  const textoDigitadoDesc = textareaEntradaDesc.value;

  // Criptografa o texto
  const textoDescriptografado = descriptografarTexto(textoDigitadoDesc);

  // Exibe o texto criptografado
  textareaSaidaDesc.value = textoDescriptografado;
};


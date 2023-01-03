function getDadosEnderecoPorCep(cep) {
  let url = "https://viacep.com.br/ws/" + cep + "/json/";

  //instanciando obj xmlHttpRequest
  let xmlHttp = new XMLHttpRequest();
  //abrindo requisição
  xmlHttp.open("GET", url);

  //executando uma função anonima cada mudança de estado
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      // resposta da requisição xml, armazenada na var
      let xmlHttpText = xmlHttp.responseText;

      // convertendo os dados XML para JSON.
      let dadosJSONText = JSON.parse(xmlHttpText);
      //atribuindo os valores dos atributos do obj json, para os elementos html da página.
      let endereco = (document.getElementById("endereco").value =
        dadosJSONText.logradouro);
      let bairro = (document.getElementById("bairro").value =
        dadosJSONText.bairro);
      let cidade = (document.getElementById("cidade").value =
        dadosJSONText.localidade);
      let estado = (document.getElementById("uf").value = dadosJSONText.uf);
    }
  };

  //envio da requisição
  xmlHttp.send();
}

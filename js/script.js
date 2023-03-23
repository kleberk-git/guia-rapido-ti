function ajuda_1(){
    document.getElementById("ajuda").innerHTML ="Aqui estão os principais serviços de rede<br> para acessar clique em Zabbix - Entrar para acompanhamento.";
    document.getElementById("esconder").style.display="none";
    document.getElementById("mudar1").style.visibility = "hidden";
    document.getElementById("mudar2").style.visibility = "hidden";
    document.getElementById("mudar3").style.visibility = "hidden";
    document.getElementById("mudar4").style.visibility = "hidden";
   
    
}

function ajuda_2(){
    document.getElementById("ajuda").innerHTML ="Para acessar acessar o servidor de rede SONIC WALL, <br> controle e cadastro de usuários aos serviços de impressões PAPERCUT e controle e configurações das camêras <br>INTERNO. - Entrar para acompanhamento.";
    document.getElementById("esconder").style.display="none";
  

}

function mapear(){
    alert(document.getElementById('mapear').value);
}

function sistemas_internos(){
   

    var sistema_1 = "<br>SMART-WEB";
    var url_sistema_1 = "https://sesisst-web.fieb.org.br/smart/camacari_recepcao_atendimento_guiche_5/";

    var sistema_2 = "SOC | S+";
    var url_sistema_2 = "https://sistema.soc.com.br/WebSoc/";

    var sistema_3 = "S4 REGIONAL";
    var url_sistema_3 = "sst.fieb.org.br:8081/sst/";
    
    var sistema_4 = "INTEGRA MAIS+";
    var url_sistema_4 = "https://sesisst-web.fieb.org.br/smart/camacari_recepcao_atendimento_guiche_5/";

    var sistema_5 = "OUTROS...";
    var url_sistema_5 = "https://sesibahia.sharepoint.com/sites/MaisIntranet/SitePages/Sistemas-SESI-BA.aspx";
    document.getElementById("ajuda").style.display="none";
    document.getElementById("mudar1").innerHTML = sistema_1.link(url_sistema_1);
    document.getElementById("mudar2").innerHTML = sistema_2.link(url_sistema_2);
    document.getElementById("mudar3").innerHTML = sistema_3.link(url_sistema_3);
    document.getElementById("mudar4").innerHTML = sistema_4.link(url_sistema_4);
    document.getElementById("mudar5").innerHTML = sistema_5.link(url_sistema_5);

}


  function downloadFile() {
    // exibe uma mensagem de alerta
    alert('Certifique-se que esteja conectado à pasta pública e execute o arquivo baixado.');
    // redireciona o usuário para o caminho do arquivo para fazer o download
    window.location.href = 'programs/localizar_PROGRAMAS.zip';
  }


  function mostrarTexto() {
    var paragrafo = document.getElementById("meuParagrafo");

    const senha = prompt("Insira sua senha:");
    
    if (senha === null) {
      // Usuário clicou em "Cancelar"
      console.log("Pedido de senha cancelado.");
    } else if (senha === "admin123") {
      // Senha correta
      if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    }
}
  }

  function mostrarTexto1() {
    var paragrafo = document.getElementById("meuParagrafo1");

    const senha = prompt("Insira sua senha:");

    if (senha === null) {
      // Usuário clicou em "Cancelar"
      console.log("Pedido de senha cancelado.");
    } else if (senha === "admin123") {
      // Senha correta
      if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    }
}
};

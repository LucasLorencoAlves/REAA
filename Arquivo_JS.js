//Função que verifica qual é o inquilino
function verificarCodigo() {
    // Captura o valor do campo de entrada
    const codigo = document.getElementById("codigo").value;
    const mensagem = document.getElementById("mensagem");

    // Verifica se o código possui 4 dígitos numéricos
    if (codigo.length !== 4 || isNaN(codigo)) {
        mensagem.textContent = "Por favor, digite um código válido de 4 dígitos.";
        mensagem.style.color = "red";
        return;
    }

    // Condicionais baseadas nos valores específicos
    if (codigo === "0724" || codigo === "5002" || codigo === "6831" || codigo === "9257" || codigo === "2116" || codigo === "2466" ) {
        mensagem.textContent = "Código correto: Acesso liberado!";
        mensagem.style.color = "green";
        window.open('https://chat.whatsapp.com/IWW2kyU3JR57nVXFXIu0rp');
       // 

    } else if (codigo === "0000") {
        mensagem.textContent = "Código mestre: Bem-vindo, administrador!";
        mensagem.style.color = "blue";
    } else if (codigo === "0000") {
        mensagem.textContent = "Código especial: Função alternativa habilitada.";
        mensagem.style.color = "purple";
    } else {
        mensagem.textContent = "Código incorreto: Tente novamente.";
        mensagem.style.color = "red";
    }
}
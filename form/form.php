<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $assunto = $_POST["assunto"];
    $mensagem = $_POST["mensagem"];

    $destinatario = "contato@exemplo.com"; // Substitua pelo endereço de e-mail da instituição

    $conteudo = "Nome: $nome\n";
    $conteudo .= "Email: $email\n";
    $conteudo .= "Telefone: $telefone\n";
    $conteudo .= "Assunto: $assunto\n";
    $conteudo .= "Mensagem:\n$mensagem";

    $headers = "De: $email";

    if (mail($destinatario, $assunto, $conteúdo, $headers)) {
        echo "Sua mensagem foi enviada com sucesso.";
    } else {
        echo "Desculpe, houve um erro ao enviar sua mensagem.";
    }
}
?>
<?php
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Query para obter os serviços da barbearia
$sql = "SELECT * FROM servicos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Exibir os serviços
    while($row = $result->fetch_assoc()) {
        echo "<div class='servico'>";
        echo "<h3>" . $row["nome"] . "</h3>";
        echo "<p>" . $row["descricao"] . "</p>";
        echo "<p>R$ " . $row["preco"] . "</p>";
        echo "</div>";
    }
} else {
    echo "Nenhum serviço encontrado.";
}

$conn->close();
?>

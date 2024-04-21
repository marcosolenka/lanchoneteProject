import mysql from "mysql";

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "admin",
  password: "hsv2741989",
  database: "lanchonete",
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão bem-sucedida ao banco de dados MySQL");
});

// Exemplo de consulta ao banco de dados
connection.query("SELECT * TESTE", (err, results) => {
  if (err) {
    console.error("Erro ao executar a consulta:", err);
    return;
  }
  console.log("Resultados da consulta:", results);
});

// Fechar a conexão com o banco de dados quando não for mais necessário
connection.end();

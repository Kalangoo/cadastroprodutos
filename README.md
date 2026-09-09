# API REST de Cadastro de Produtos - AWS EC2

Esta é uma API REST desenvolvida em Node.js e Express para o **Desafio 2 - Computação em Nuvem**. A aplicação está implantada em uma instância EC2 da AWS e fornece endpoints para listar e cadastrar produtos.

## 🛠️ Tecnologias Utilizadas
* **Linguagem/Framework:** Node.js, Express
* **Nuvem:** AWS EC2 (Ubuntu)
* **Gerenciamento de Versão:** Git e GitHub

## 🌐 Endereço do Servidor
* **IP Público:** `44.215.108.228`
* **Porta:** `3000`

---

## 📌 Endpoints da API

### 1. Listar Produtos
* **Método:** `GET`
* **URL:** `http://44.215.108.228:3000/produtos`
* **Resposta Esperada (200 OK):**
```json
[
  { "id": 1, "nome": "Notebook", "preco": 3500 },
  { "id": 2, "nome": "Mouse Gamer", "preco": 150 }
]

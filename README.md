# ngcash-project
Rep privado para arquivos do projeto para o processo seletivo para backend jr. do NGCash

1. **Primeiro, deve-se instalar as dependências:** 
```  
    npm install
```

2. **Em seguida, deve subir a composição dos containers (neste caso, um container será resposável pelo banco de dados e o outro pela aplicação node) com o comando:**
```
    docker-compose up -d
```

3. **O próximo passo é "attachar" o terminal do container do node com o seguinte comando:**
```
    docker exec -it ng_cash_api sh
```

4. **Já no terminal do container (que deverá estar mostrando um prompt com /app), digitar o seguinte comando para criar o banco de dados com o schema do Prisma:**
```
    npx prisma db push
```
5. **Por fim, deve-se rodar a aplicação (em modo de desenvolvimento) para ter acesso aos endpoints:**
```
    npm run dev
```
	
O banco de dados estará vazio, mas já é possível interagir com a aplicação utilizando algum cliente REST como o Postman, Insomnia ou a extensão Thunder dentro do VSCode.

Os endpoints e instruções estão  

> **1. Criação do usuário** (é interessante criar mais de um usuário aqui para poder fazer as transações em seguida):

  | Body da requisição | Método | Endpoint |
  |--------------------|--------|----------|
  |`{` <br> `"username": "Pessoa 1",` <br> `"password": "Abc12345"` <br> `}` | POST | localhost:3000/users |
<br><br>

> **2. Login** (gerará o token que deverá ser usado nas demais requisições)

  | Body da requisição | Método | Endpoint |
  |--------------------|--------|----------|
  |`{`<br> `"username": "Pessoa 1",` <br> `"password": "Abc12345"` <br> `}` | POST | localhost:3000/login |

> **3. Verificar saldo** (aqui, deve-se utilizar o token gerado no login)

  | Header | Body da requisição | Método | Endpoint |
  |--------|--------------------|--------|----------|
  |Authorization: token |`{` <br> `"id": 1,` <br> `"accountId": 1` <br> `}` | GET | localhost:3000/account/balance |

> **4. Transferência** (aqui, deve-se utilizar o token gerado no login)

  | Header | Body da requisição | Método | Endpoint |
  |--------|--------------------|--------|----------|
  |Authorization: token |`{`<br> `"id": 1`, <---- Id do usuário origem <br> `"accountId": 1,` <---- Id da conta origem <br> `"username": "Guilherme",` <---- Username do usuário destino <br> `"value": 10` <------ valor a ser creditado <br> `}`| PATCH | localhost:3000/transaction/cashout |

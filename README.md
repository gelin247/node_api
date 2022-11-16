# node_api

<h1> Clonando o repositoio: </h1>

     git clone https://github.com/gelin247/node_api.git 
<h2> Logo após no seu terminal execute o comando para entrar na pasta </h2>
     
     cd NODE_API_RODRIGO

<h2> instalar o node modules: </h2>

    npm install
    
<h2> Para subir o servidor localmente : </h2>

    npm start
    
<h1> Criar a imagem na maquina DOCKER </h1>

    docker build . -t gelin247/node_api:1.0.0 
    docker run -p 8087:8087 gelin247/node_api:1.0.0
    
> **_NOTA: É necesario ter instalado o docker no seu computador_**

<h2> Para subir os containeres das aplicações basta executar na raiz do projeto: </h2>

    docker-compose up
    
**Docker Hub**

Endpoints da API:

    docker pull gelin247/node_api
    
    
<h1> API </h1>

<h2>Endpoints da API:</h2>
 
**POST**  
 
    http://localhost:8087/api/v1/game/
    
**PAYLOAD**

    {
        "id": <number>,
        "mandante": <string>,
        "visitante": <string>,
        "gols_mandante": <number>,
        "gols_visitante": <number>,
        "data_partida": <string>
    }
 
 
 
**GET**

    http://localhost:8087/api/v1/game/
    
 **GET BY TEAM**
 
    http://localhost:8087/api/v1/game/team/>Time a ser buscado<
    
    
 **GET BY DATE**
 
    http://localhost:8087/api/v1/game/date/>Data a ser procurada, exemplo : 2019-05-05<
    
 **PUT**
    
    http://localhost:8087/api/v1/game/>id do jogo<
    
 **PAYLOAD**
 
    {
        "id": 5,
        "mandante": "Grêmio",
        "visitante": "Internacional",
        "gols_mandante": 1,
        "gols_visitante": 1,
        "data_partida": "2019-05-05"
    }
    
 **DELETE**
 
    http://localhost:8087/api/v1/game/>id do jogo<
 
 
 
    
    
    
    
    

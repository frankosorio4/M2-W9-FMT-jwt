Modulo 2 - semanan 9

Ex. 01 - Aproveitando o projeto da última semana crie uma tabela de usuários.

Crie uma migration e model de uma tabela para cadastrar usuários.

Ex. 02 - Adicione um sistema de autenticação no sistema

Adicione um sistema login utilizando a técnica com autenticação vi JWT

Ex. 03 - Deixe todas as rotas da semana passada privadas

Aplique o JWT nas rotas da semana passada para que apenas usuários logados possam acessar os endpoints

http://localhost:3000/login/
{
    "email": "frank@email.com",
    "password": "12345679"
}

Ex. 04 - Crie uma tabela de permissões e tabelas auxiliares se necessário.

Crie migration e model para uma tabela de permissão e se necessário uma tabela auxiliar para que seja possivel separar rotas por permissões de usuários.


http://localhost:3000/permissoes/

{
    "descricao": "atribuir_permissao"
}

Ex. 05 - Aplique o conceito de permissões para as rotas do sistema

Criei um middleware para controlar permissões de rotas e aplique nas rotas do sistema.

Fique à vontade para especificar quais permissões são necessárias para cada rota.
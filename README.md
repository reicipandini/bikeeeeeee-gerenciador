# 🚲 BikeEEEEE — Sistema de Gerenciamento & Controle de Acesso

> Um sistema web completo de **CRUD** (*Create, Read, Update, Delete*) focado em controle de frotas e bicicletas, desenvolvido com uma camada extra de segurança para login, validação de chaves de acesso e autenticação por **chave mestre**.

---

## 🔒 Foco em Segurança: Chaves e Chave Mestre

Diferente de sistemas básicos de login, este projeto foi estruturado com proteção adicional voltada para ambientes corporativos ou de acesso restrito:

* **Sistema de Chaves Dinâmicas:** Validação de tokens de acesso para garantir que apenas usuários autorizados interajam com o sistema.
* **Mecanismo de Chave Mestre:** Uma credencial de superusuário que permite gerenciar permissões especiais e desbloquear funções críticas dentro da aplicação.

---

## 💻 O que é `localhost`? *(E o aviso sobre o Banco de Dados)*

Atualmente, este projeto está configurado para rodar em **`localhost`** (que significa *"neste computador"*):

* **O que é o `localhost`?** É um endereço de *loopback* que o seu próprio computador utiliza para simular um servidor web localmente. Ao acessar `localhost` (ou `127.0.0.1`), a sua própria máquina atua como servidor de hospedagem, permitindo testar códigos, páginas e regras de negócio sem precisar publicar tudo na internet primeiro.
* **Aviso sobre o Banco de Dados:** Como o sistema roda em ambiente local, os dados cadastrados (como usuários e registros do CRUD) ficam salvos apenas no armazenamento de testes da sua máquina. Para tornar a aplicação 100% online e acessível de qualquer lugar, o próximo passo ideal é **integrá-la a um banco de dados em nuvem** (como o *Firebase* ou um banco SQL remoto).

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

* **HTML5 & CSS3:** Estruturação das telas de login/dashboard e layout responsivo.
* **JavaScript (ES6+):** Lógica completa do CRUD, validação de segurança das chaves de acesso e manipulação dinâmica do DOM.
* **Ambiente Local (`Localhost`):** Utilizado para testes e homologação do sistema antes do deploy em nuvem.

---

## 🚀 Como Executar o Projeto Localmente

1. Faça um clone ou baixe os arquivos deste repositório.
2. Abra a pasta do projeto no **VS Code** e inicie um servidor local (como a extensão *Live Server*) para que o `localhost` funcione corretamente.
3. Acesse a página de login (`login.html`) no seu navegador e teste o sistema de chaves e as operações do CRUD!

---

## 🏃‍♂️ Próximos Passos & Melhorias

* ☁️ Migrar o armazenamento de dados local para um banco de dados em nuvem (ex: Firebase ou MySQL/MariaDB).
* 🔐 Implementar criptografia de senhas (*hash*) para elevar o nível de segurança em ambiente de produção.

---

<p align="center">
  ⭐ <b>Se curtiu o projeto de segurança e gestão, deixe sua estrela no repositório!</b> 🚀
</p>

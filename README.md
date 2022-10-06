# Front-end

#### Curso pela EBAC

# Git
## Conceitos de versionamento
 - Histórico
 - Controle de versão
 - Quem alterou
 - O que alterou
 - Quando alterou
 - Todos os arquivos
 - Evolução contínua

Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

 ## Instalação do Git
 https://git-scm.com/

 - Windows : https://git-scm.com/dowload/win
 - Linux (apt-get): sudo apt-get install git
 - Mac (brew): brew install git

 ## Criar conta no GitHub

 ## Clonar o Projeto

 git clone https://github.com/peehpimentel/frontend.git

 git add * - para adicionar uma mudança na área de preparação
 git status - ver o status do diretório e da área de preparação
 git config --global user.name "Seu nome" - criar uma configuração global para alterar o nome de usuário
 git config --global user.email "seu@email.com" - criar uma configuração global para alterar o email do usuário
 git config --get user.name - Mostrará o nome do usuário
 git config --get user.email - Mostrará o e-mail do usuário
 
 ## Commits
 Informação de alteração
 - Após testado todo seu código
 - Primeiro utilizo git add * (para mover as alterações para "Staged Changes")
 - Segundo git commit -m 'mensagem'
 - Terceiro git push (para enviar alterações ao repositório, só consigo executar esse comando caso meu código esteja atualizado)
 - Quarto git pull (para trazer alterações a sua máquina)
 
 OBS: Não é boa prática fazer commits pelo próprio site (como estou fazendo agora) e toda vez que eu fizer uma alteração no terminal, devo ir na aba "Source Control" e atualizar (colocar em "Staged Changes") as alterações por lá e depois utilizar o segundo e terceiro comando.

  ## GitFlow
  Fluxo do Git


 ### Branchs
 São ramificações do código. Quando estou trabalhando sozinho é melhor que tenha apenas uma branch, uma vez que fica mais fácil de atualizar o código. E quando estiver trabalhando com outras pessoas, é melhor ter mais de uma branch que ai teremos versões diferentes do código.

 Tipos de branchs:

 - main / master (mais comum, quando o projeto é publicado)
 - develop (onde será feita as alterações de um servidor de teste, sem afetar o projeto principal)
 - DOD - Definition Of Done: critérios de aceite (quando os critérios estiverem dentro desse "DOD" ai sim poderemos enviar o projeto para a branch master)
 - versionamento 0.0.0 (primeiro zero é a versão que normalmente só é atualizado quando está na versão final, o segundo zero seria tipo alfa/beta e o terceiro zero seria tipo as builds, exemplo, versão 0.3.50 "versão 0, alfa/beta 3, build 50")

 #### Comandos
 - git checkout -b nome_branch (para fazer checkout a uma nova branch)
 - git fetch --all (para verificar se não tem nenhuma alteração no repositório no GitHub)
 - git merge nome_branch_mesclar (mesclar branchs)
 - git checkout nome_branch (trocar de branchs)


 
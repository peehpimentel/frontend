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
  
  ### Configurar GitFlow
 - git flow init (para iniciar o fluxo do git)
 - git flow feature start nome_feature (inicia uma nova feature)
 - git flow feature finish nome_feature (termina de utilizar a feature em questão)

  # JavaScript

  * Site para executar e testar JS: https://jsfiddle.net/
  #### Variáveis em JS
  - são utilizados pra referenciar espaço na memória
  - var é uma variável de escopo global e local
  - let é uma variável de escopo local
  - const é uma variável imutável (valor não pode ser alterado)
  - string é uma variável que lê caractéres (para declarar um caracter, precisamos colocar o texto entre '' ou "")
  - array é uma sequencia de valores dentro de uma variável (para declarar um array, precisamos colocar [] e os valores são separados por vígula, exemplo: [ array1, array2, ... arrayN])
  - um array sempre começa pelo primeiro indice, que no caso é o indice 0. Caso tenhamos "var n = [1, 2, 3, 4]" e escrevamos n[3] o resultado será o ultimo número, ou seja, 4. E se escrevermos n[4] aparecerá apenas "Undefined"
  - variável.length mostrará a quantidade de posições dentro de um array, no caso do exemplo acima mostraria que existem 4 indices.
  - string se aplica ao mesmo conceito do array, cada caracter tem um indice e esse indice começa pelo 0, por exemplo, se declararmos "string x = 'exemplo'" a quantidade de indices dessa string será a quantidade de caracteres que a palavra "exemplo" tem, ou seja, se utilizamos o comando "x.length" o resultado será 7.
  - Exemplo de indices dentro de uma string: {
  - string x = 'exemplo'
  - x.lenght
  - 7
  - [e = indice 0, x = indice 1, e = indice 2, m = indice 3, p = indice 4, l = indice 5, o = indice 6]}

  #### Operadores
  - Soma +
  - Subtração -
  - Multiplicar *
  - Dividir /
  - Exponenciação ** (x**y)
  - Módulo (resto de divisão) % significa que é valor 1 / valor 2 = primeira casa valor 3... valor 3 * valor 2 = valor 4... valor 1 - valor 4 = valor % exemplo {
  - 16 / 6 = 2,6666666
  - 2 * 6 = 12
  - 16 - 12 = 4
  - 16 % 6 = 4 }
  - Método Math: random() (número randômico), round() (arredonda um número), sqrt() (raiz quadrada)
  
  * Operadores de atribuição
  - += significa "o valor entre x + y é dado a variável declarada, ou seja, a = 10; b = 12; a += b; o valor de a passa a ser 22"
  - -= significa "o valor entre x - y é dado a variável declarada, ou seja, a = 10; b = 12; a -= b; o valor de a passa a ser -2"
  - *= significa "o valor entre x * y é dado a variável declarada, ou seja, a = 10; b = 12; a *= b; o valor de a passa a ser 120"
  - /= significa "o valor entre x / y é dado a variável declarada, ou seja, a = 10; b = 5; a /= b; o valor de a passa a ser 5"
  - %= significa "o valor entre x % y é dado a variável declarada, ou seja, a = 10; b = 4; a /= b; o valor de a passa a ser 2"
  
  * Operadores de comparação/lógicos
  - = significa "recebe o valor"
  - == significa "é igual à" (valor)
  - === significa "é inteiramente igual" (valor e variável)
  - != significa "diferente de"
  - variável++ significa "incrementa 1 valor"
  - variável-- significa "subtrai 1 valor"
  - variável 1 > variável 2/condição significa "variável 1 maior que variável 2/condição"
  - variável 1 < variável 2/condição significa "variável 1 menor que variável 2/condição"
  - variável 1 >= variável 2/condição significa "variável 1 maior ou igual à variável 2/condição"
  - variável 1 <= variável 2/condição significa "variável 1 menor ou igual à variável 2/condição"

 
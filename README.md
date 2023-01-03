# Exercício 1
Para iniciar um aplicativo node precisamos configurar suas dependências.<br>
O objetivo desse exercício é justamente isso:
- criar o package.json
- personalizar as configurações
- criar scripts

Lembrando que ainda veremos ao longo do back-end diversas ferramentas e tecnologias que entrarão como dependências futuramente, ou seja, o package.json será atualizado ao longo das semanas.

## Personalizando o package.json
- Dê um nome para o projeto! Dica: labecommerce-backend (o nome precisa ser kebab-case)
- A versão pode deixar 1.0.0
- O arquivo principal será o index.js
- Adicione a propriedade "type" valendo "module" para conseguir utilizar import e export
- Crie pelo menos o script de start, que executa o arquivo index.js
- Opcional:
    - criar palavras-chaves na propriedade "keywords"
    - colocar seu nome na propriedade "author"
    - adicionar uma licença
    - adicionar uma descrição

# Exercício 2
## index.js
Crie o arquivo index.js e dentro dele coloque um console.log avisando que o aplicativo foi iniciado. Teste seu funcionamento executando no terminal o script de start.

## Argumentos de comando
Vimos em aula que é possível enviar dados do terminal para o aplicativo via process.argv, então agora chegou a hora de praticar!

Faça aparecer no console pelo menos um argumento, exemplo:
- ao executar no terminal o comando: ```node index.js bananinha```
    - aparece no console: "bananinha"


# Exercício 3
Crie um joguinho simples utilizando os conceitos vistos em aula. Temos alguns exemplos abaixo para auxiliar, você pode escolher um deles ou pensar em outro se quiser!
Colocamos uma dica no final desse readme de como gerar números aleatórios no JS.
<br>

## par-ou-impar.js
Crie o arquivo par-ou-impar.js e implemente o famoso joguinho!
A funcionalidade é:
- jogador é você, dev
- suas escolhas devem ser enviadas via argumentos no comando do terminal (process.argv)
    - par ou impar
    - e um número
- o adversário é o computador (que faz uma escolha aleatória)
- exemplos de fluxo:
    - ```node par-ou-impar.js par 1```
        - aparece no console: "Você escolheu par e o computador escolheu impar. O resultado foi 6. Você ganhou!"
    - ```node par-ou-impar.js impar 3```
        - aparece no console: "Você escolheu impar e o computador escolheu par. O resultado foi 4. Você perdeu!"
    - ```node par-ou-impar.js par 2```
        - aparece no console: "Você escolheu par e o computador escolheu impar. O resultado foi 2. Você ganhou!"

<br>

## pedra-papel-tesoura.js
Crie o arquivo pedra-papel-tesoura.js e implemente o famoso joguinho!
A funcionalidade é:
- jogador é você, dev
- sua escolha deve ser enviada via argumento no comando do terminal (process.argv)
- o adversário é o computador (que faz uma escolha aleatória)
- exemplos de fluxo:
    - ```node pedra-papel-tesoura.js pedra```
        - aparece no console: "Você escolheu pedra e o computador escolheu tesoura. Você ganhou!"
    - ```node pedra-papel-tesoura.js papel```
        - aparece no console: "Você escolheu papel e o computador escolheu tesoura. Você perdeu!"
    - ```node pedra-papel-tesoura.js tesoura```
        - aparece no console: "Você escolheu tesoura e o computador escolheu tesoura. Empate!"

<br>

# Dica: como gerar um número aleatório em JS
Número aleatório entre o valor min e o valor max (incluem ambas extremidades).
```
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)
console.log(numeroAleatorioEntreZeroeDez)

const numeroAleatorioEntreUmeNove = getRndInteger(1, 9)
console.log(numeroAleatorioEntreUmeNove)

const numeroAleatorioEntreDezeQuinze = getRndInteger(10, 15)
console.log(numeroAleatorioEntreDezeQuinze)
// ex1
// Reprovam na régua de 4,5:1:
// - #888888 no #FFFFFF (contraste de 3,5:1 — abaixo do mínimo)
// - #CCCCCC no #FFFFFF (contraste de 1,6:1 — muito claro)
// (Os pares #FFFFFF no #1F4E79 e #FFFFFF no #C00000 passam com 8,7:1 e 6,5:1).


// ex2
// (a) alt="Fila extensa de estudantes na cantina dobrando o corredor durante o intervalo"
// (b) alt="Logotipo da escola"
// (c) alt=""


// ex3
// Por que falha: O código muda apenas a cor de fundo do botão. Pessoas com daltonismo
// (dificuldade para distinguir verde) ou que usam leitor de tela não saberão que o botão
// foi ativado. Cor nunca deve ser usada sozinha.
//
// Correção:
botao.addEventListener("click", function() {
  botao.style.backgroundColor = "green";
  botao.textContent = "Apoiado";
});


// ex4
// 1. Título que explica: Adicionei um parágrafo (<p>) logo abaixo do <h1> no <header> explicando para que serve a página.
// 2. Foco visível: Adicionei a regra .apoiar:focus no CSS com outline vermelho de 3px para destacar a navegação pelo teclado.
// 3. Estado dito por escrito: Garanti que o botão troca o texto entre "Apoiar" e "Apoiado" junto com a atualização da contagem.


// ex5
// Tabela de auditoria:
// 1. Ao clicar em Apoiar, muda alguma coisa além da cor? Sim
// 2. Dá para saber, olhando o cartão parado, se você já apoiou ou não? Sim
// 3. Todas as imagens têm alt escrito? Sim
// 4. O texto de todos os cartões é legível quando você aperta os olhos? Sim
// 5. Navegando só de Tab, dá para chegar em todos os botões? Sim
// 6. Dá para apoiar um cartão apertando Enter? Sim
// 7. O contorno de foco aparece, ou alguém apagou com outline: none? Sim
// 8. Uma pessoa que nunca viu a página entenderia o que ela faz em 5 segundos? Não (antes de colocar a frase explicativa)
//
// Três melhorias em ordem de prioridade:
// 1º - Adicionar a frase explicativa abaixo do <h1> no cabeçalho (UX)
// 2º - Configurar o contorno de foco visível no CSS com .apoiar:focus (Acessibilidade)
// 3º - Mudar a cor do botão quando estiver apoiado para reforçar visualmente a troca de texto (UX/UI)
//
// Por que essa ordem: Comecei pelas mudanças de maior impacto e menor esforço (levam segundos para aplicar e resolvem a compreensão da página e a navegação por teclado), deixando o ajuste visual extra por último.

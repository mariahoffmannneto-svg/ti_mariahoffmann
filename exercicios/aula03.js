// ex1
// A página perde toda a aparência visual. No navegador, tudo aparece em preto e branco,
// com a fonte padrão do sistema, sem cores, sem margens e alinhado à esquerda (embora
// os botões continuem funcionando quando clicados).


// ex2
// Não é desnecessário. Como o script foi colocado no final do body, o código funcionou
// porque o HTML já tinha sido lido antes. A diferença é que, sem o "defer", o navegador
// pausa a leitura da página para rodar o script imediatamente; com o "defer", ele garante
// que o JavaScript só rode depois que todo o documento terminar de carregar.


// ex3
/*
:root {
  --cor-alerta: #C00000;
}

.cartao-urgente {
  border: 3px solid var(--cor-alerta);
}

.titulo-urgente {
  color: var(--cor-alerta);
}
*/


// ex4
// Dividi o projeto em três arquivos (index.html, styles.css e script.js). Não aconteceu
// nenhum erro porque conferi dois pontos no navegador: primeiro vi se o visual azul e os
// cartões carregaram direito (confirmando o CSS) e depois cliquei nos botões para testar
// se a contagem e o texto mudavam (confirmando o JS).


// ex5
// --cor-destaque: guarda a cor principal do tema, usada no cabeçalho, títulos e botões.
// --cor-borda-foco: guarda a cor do contorno de acessibilidade ao navegar pelo teclado (Tab).
// --espacamento: guarda o valor de preenchimento interno e margem entre os cartões.
// --arredondamento: guarda o tamanho dos cantos arredondados dos cartões.

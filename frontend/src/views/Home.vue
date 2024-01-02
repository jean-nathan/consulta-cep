<template>
  <div id="home">  
    <div class="description">
      <p>
        "Nosso site de consulta de CEP oferece uma maneira rápida e eficiente de encontrar Códigos de Endereçamento Postal (CEP). 
        Basta inserir o endereço desejado e obter imediatamente o CEP correspondente. Nossa plataforma simplifica o processo de 
        busca de CEP, fornecendo informações precisas e atualizadas para facilitar suas necessidades de entrega e correspondência."
      </p>
    </div>
    <div id="common-questions">
      <h1>Perguntas Frequentes</h1>
      <p>Confira abaixo algumas perguntas sobre a ferramenta de consultar CEP.</p>
      <div id="question-grid">
        <div class="question">
          <h3>Como saber meu CEP?</h3>
          <p>
            Para saber o CEP, basta digitar seu endereço em nossa ferramenta após selecionar buscar usando endereço.
          </p>
        </div>
        <div class="question">
          <h3>Qual meu CEP correios?</h3>
          <p>O CEP dos Correios pode ser consultado ao digitar seu endereço no campo de busca de CEP.</p>
        </div>
        <div class="question">
          <h3>O que é CEP do endereço?</h3>
          <p>O CEP do endereço é um conjunto de números que foi criado com o intuito de facilitar a organização.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
#home {
  background-color: #A83939;
  padding: 0 15px;
  color: white;
} 

.description, #common-questions  {
  padding: 1%;
  text-align: center;
  font-size: 1.3em;
}

#common-questions #question-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
}

.question {
  background-color: #752828;
  padding: 20px;
  width: calc(100% - 20px);
  box-sizing: border-box;
}

.question h3, .question p {
  color: white;
}

@media only screen and (min-width: 768px) {
  .question {
    width: calc(33.33% - 20px);
    margin-right: 10px;
  }

  .question:nth-child(3n) {
    margin-right: 0;
  }
}
</style>

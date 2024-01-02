<template>
  <div id="QueryZipCode">
    <label>Consultar CEP</label>
    <input v-model="inputCep" @input="formatCep" type="text" id="inputCep" placeholder="XXXXX-XXX">
    <button @click="getCep" :disabled="loading">Consultar</button>
    <div v-if="loading" class="loading-indicator">Carregando...</div>
    <div id="cepData">
      <p v-if="cepData">CEP: {{ cepData.cep }}</p>
      <p v-if="cepData">Logradouro: {{ cepData.logradouro }}</p>
      <p v-if="cepData">Bairro: {{ cepData.bairro }}</p>
      <p v-if="cepData">Cidade: {{ cepData.localidade }}</p>
      <p v-if="cepData">Estado: {{ cepData.uf }}</p>
    </div>
    <div id="cepHistory">
      <p>Histórico de CEPs consultados:</p>
      <p v-for="cep in storedCeps" :key="cep" @click="showCepDetails(cep)">{{ cep }}</p>
    </div>
    <div id="selectedCepDetails">
      <p v-if="selectedCepDetails">CEP Selecionado: {{ selectedCepDetails.cep }}</p>
      <p v-if="selectedCepDetails">Logradouro: {{ selectedCepDetails.logradouro }}</p>
      <p v-if="selectedCepDetails">Bairro: {{ selectedCepDetails.bairro }}</p>
      <p v-if="selectedCepDetails">Cidade: {{ selectedCepDetails.localidade }}</p>
      <p v-if="selectedCepDetails">Estado: {{ selectedCepDetails.uf }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputCep: '',
      cepData: null,
      storedCeps: [],
      selectedCepDetails: null,
      loading: false,
    };
  },
  created() {
    localStorage.setItem('IsPageQueryZipCode', JSON.stringify(true));
  },
  methods: {
    async getCep() {
      try {
        this.loading = true;

        const inputCep = this.inputCep;

        if (this.storedCeps.includes(inputCep)) {
          const dataFromLocalStorage = this.getLocalStorageData(inputCep);
          this.displayCepData(dataFromLocalStorage);
        } else {
          const response = await fetch(`http://localhost:3000/cep/${inputCep}`);
          const data = await response.json();

          if ('erro' in data) {
            alert('CEP inválido. Nenhum endereço encontrado.');
            return;
          }

          this.updateLocalStorage(inputCep, data);

          this.displayCepData(data);
          this.displayCepHistory();
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    displayCepData(data) {
      this.cepData = data;
    },
    displayCepHistory() {
      this.storedCeps = this.getStoredCeps();
    },
    getStoredCeps() {
      return JSON.parse(localStorage.getItem('cepHistory')) || [];
    },
    getLocalStorageData(cep) {
      return JSON.parse(localStorage.getItem(`cepData-${cep}`)) || {};
    },
    updateLocalStorage(cep, data) {
      this.storedCeps.push(cep);
      localStorage.setItem('cepHistory', JSON.stringify(this.storedCeps));

      localStorage.setItem(`cepData-${cep}`, JSON.stringify(data));
    },
    showCepDetails(cep) {
      this.selectedCepDetails = this.getLocalStorageData(cep);
    },

    formatCep() {
      let formattedCep = this.inputCep.replace(/\D/g, '');

      if (formattedCep.length > 5) {
        formattedCep = formattedCep.substring(0, 5) + '-' + formattedCep.substring(5, 8);
      }
      this.inputCep = formattedCep;
    },
  },
};
</script>

<style scoped>
#QueryZipCode {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 20px;
  max-height: 500px;
  overflow-y: auto;
}

label {
  font-size: 1.2em;
  margin-bottom: 10px;
  display: block;
}

input {
  padding: 8px;
  font-size: 1em;
}

button {
  padding: 8px 16px;
  font-size: 1em;
  margin-left: 10px;
  cursor: pointer;
}

#cepData {
  margin-top: 20px;
}

#cepHistory {
  margin-top: 20px;
  overflow-y: auto;
  max-height: 200px;
}

.loading-indicator {
  margin-top: 10px;
  color: #A83939;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-indicator::after {
  content: ' ';
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #A83939;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  animation: spin 0.8s linear infinite;
  margin-left: 5px;
  vertical-align: middle;
}
</style>

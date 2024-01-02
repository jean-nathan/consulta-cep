import { createStore } from 'vuex';

export default createStore({
  state: {
    inputCep: '',
    cepData: null,
    storedCeps: [],
    selectedCepDetails: null,
  },
  mutations: {
    setInputCep(state, payload) {
      state.inputCep = payload;
    },
    setCepData(state, payload) {
      state.cepData = payload;
    },
    setStoredCeps(state, payload) {
      state.storedCeps = payload;
    },
    setSelectedCepDetails(state, payload) {
      state.selectedCepDetails = payload;
    },
  },
  actions: {
    async getCep({ state, commit }) {
      try {
        const inputCep = state.inputCep;

        if (state.storedCeps.includes(inputCep)) {
          const dataFromLocalStorage = localStorage.getItem(`cepData-${inputCep}`);
          commit('setCepData', JSON.parse(dataFromLocalStorage));
        } else {
          const response = await fetch(`http://localhost:3000/cep/${inputCep}`);
          const data = await response.json();

          if ('erro' in data) {
            alert('CEP inválido. Nenhum endereço encontrado.');
            return;
          }

          commit('setCepData', data);
          commit('setStoredCeps', [...state.storedCeps, inputCep]);
          localStorage.setItem('cepHistory', JSON.stringify([...state.storedCeps, inputCep]));
          localStorage.setItem(`cepData-${inputCep}`, JSON.stringify(data));
        }
      } catch (error) {
        console.error(error);
      }
    },
    showCepDetails({ commit, state }, cep) {
      const selectedCepDetails = JSON.parse(localStorage.getItem(`cepData-${cep}`));
      commit('setSelectedCepDetails', selectedCepDetails);
    },
  },
  getters: {
  },
});

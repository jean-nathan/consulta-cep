import { createStore } from 'vuex';
import QueryZipCodeModule from './QueryZipCode.store.js';

const store = createStore({
  modules: {
    cepModule: QueryZipCodeModule,
  },
});

export default store;

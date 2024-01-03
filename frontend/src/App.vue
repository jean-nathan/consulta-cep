<template>
  <div id="app">
    <header>
      <div class="header-content">
    <img src="./assets/logo-consultacep.png" alt="A imagem não está disponível">
<button @click="goToPage()">
  {{ isPageQueryZipCode ? 'HOME' : 'CONSULTAR CEP' }}
</button>
      </div>
    </header>
    <ConsultaCepBar />
    <div class="banner-container">
      <img src="./assets/banner-consultacep.png" alt="A imagem não está disponível" class="banner">
    </div>
    <ConsultaCepBar />
    <router-view/>
    <ConsultaCepBar />
    <ConsultaCepFooter />
  </div>
</template>

<script>
import ConsultaCepBar from "./components/ConsultaCepBar.vue";
import ConsultaCepFooter from './components/ConsultaCepFooter.vue';
import router from "./router";

export default {
  components: {
    ConsultaCepBar,
    ConsultaCepFooter
  },
  data() {
    return {
      isPageQueryZipCode: false,
    };
  },
  created() {
    const isConsultarCepRoute = this.$route.path === '/consultar-cep';

    this.isPageQueryZipCode = isConsultarCepRoute;

    localStorage.setItem('IsPageQueryZipCode', JSON.stringify(this.isPageQueryZipCode));
  },
  methods: {
    goToPage() {
      this.isPageQueryZipCode = !this.isPageQueryZipCode;

      localStorage.setItem('IsPageQueryZipCode', JSON.stringify(this.isPageQueryZipCode));

      this.$router.push(this.isPageQueryZipCode ? '/consultar-cep' : '/');
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 5% 0 5%;
}

header {
  background-color: #f8f8f8;
  padding: 10px 20px;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  width: 100%;
  max-width: 250px;
  margin-top: 10px;
  height: 40px;
  background-color: #A83939;
  color: white;
  font-size: 1.2em;
  font-weight: 800;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: black;
}

.banner-container {
  overflow: hidden;
  width: 100%;
  height: 350px;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

main {
  background-color: #A83939;
  height: 100px;
}

@media only screen and (min-width: 768px) {
  .header-content {
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    margin-top: 0;
    margin-right: 20px;
  }
}
</style>

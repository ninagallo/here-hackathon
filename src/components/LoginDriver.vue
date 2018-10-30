<template>
  <div class="container">
    <div class="row">
      <div class="col-">
        <form @submit.prevent="login">
          <h3>Bienvenido, ingrese a su cuenta</h3>
          <input type="email" v-model="email" placeholder="Ingresa tu correo">
          <input type="password" v-model="password" placeholder="Ingresa tu contraseña">
          <button class="btn btn-warning">Adelante!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => this.$router.replace('Home'), (error) => console.error(error))
    }
  }
}
</script>

<style scoped>
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  form > * {
    display: block;
  }
</style>
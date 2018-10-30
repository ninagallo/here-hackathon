<template>
    <div class="container background">
      <div class="row">
        <div class="col-">
          <h3>Here</h3>
          <h3>We</h3>
          <h3>Bus</h3>
          <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Correo electrónico">
            <input type="password" v-model="password" placeholder="Contraseña">
            <button class="btn btn-dark">Iniciar Sesión</button>
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
.background{
    background-image: url('../assets/School_Bus.jpg');
    height: 100vh;
}
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



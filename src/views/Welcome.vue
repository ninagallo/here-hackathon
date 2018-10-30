<template>
    <div class="container background">
      <div class="row">
        <div class="col-">
          <p>HERE <br>
             WE <br>
             BUS</p>
          <form @submit.prevent="login">
            <div class="form-group">
              <input type="email" v-model="email" placeholder="Correo electrónico">
              <input type="password" v-model="password" placeholder="Contraseña"> 
            </div>
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
    background-color: #7dbae4;
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



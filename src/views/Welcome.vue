<template>
    <div class="container background">
      <div class="row">
        <div class="col">
          <p id="title">HERE <br>
             WE <br>
             BUS</p>
          <form @submit.prevent="login">
            <div class="form-group">
              <input class="input form-control" type="email" v-model="email" placeholder="Correo electrónico">
              <input class="input form-control" type="password" v-model="password" placeholder="Contraseña"> 
            </div>
            <div>
              <button id="button" class="btn btn-dark">Iniciar Sesión</button>
            </div>
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
  .background {
    background-color: #7dbae4;
    margin-top: 80px;
  }

  p {
    text-align: left;
    margin-left: 49px;
    justify-content: flex-start;
  }

  #title {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    align-items: flex-start;
  }

  .input {
    background-color: #ffffff;
    width: 190px;
    margin-left: 45px;
  }
  #button {
    justify-content: center;
  }

  form > * {
    display: block;
  }
  /* Tamaños de pantalla */
@media screen and (max-width:991px){
  #button {

  }
  #title {

  }

  .input {

  }
}

@media screen and (max-width:575px) {
  #button {
    
  }
  #title {
    
  }

  .input {
    /* width: 300px;
    height: 100px; */
  }
}
</style>



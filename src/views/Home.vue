<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">HWB</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        <Map
            appId="LbRwyMzRp1cGXIsI0GNE"
            appCode="_Zz0xbDQRqeT03IH5Q22iQ"
            lat="19.43"
            lng="-99.13"
            width="300px"
            height="380px" />
    </div>
</template>

<script>
import Map from '../components/Map.vue';

const platform = new H.service.Platform({
  app_id: 'LbRwyMzRp1cGXIsI0GNE',
  app_code: '_Zz0xbDQRqeT03IH5Q22iQ',
});

export default {
  name: 'home',
  components: {
    Map,
  },
};
</script>

<style>
#app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>

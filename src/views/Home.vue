<template>
    <div id="app">
        <Map
            appId="LbRwyMzRp1cGXIsI0GNE"
            appCode="_Zz0xbDQRqeT03IH5Q22iQ"
            lat="‎19.4284706"
            lng="-99.1276627"
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

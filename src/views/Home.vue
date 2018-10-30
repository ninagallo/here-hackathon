<template>
    <div id="app">
        <Map
            appId="LbRwyMzRp1cGXIsI0GNE"
            appCode="_Zz0xbDQRqeT03IH5Q22iQ"
            lat="37.7397"
            lng="-121.4252"
            width="100%"
            height="835px" />
    </div>
</template>

<script>
var platform = new H.service.Platform({
  'app_id': 'LbRwyMzRp1cGXIsI0GNE',
  'app_code': '_Zz0xbDQRqeT03IH5Q22iQ'
})

import Map from '../components/Map.vue';

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

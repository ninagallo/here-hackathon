/* eslint-disable */
<template>
    <div class="here-map">
        <div ref="map" v-bind:style="{ width: width, height: height }"></div>
    </div>
</template>

<script>
var platform = new H.service.Platform({
  'app_id': 'LbRwyMzRp1cGXIsI0GNE',
  'app_code': '_Zz0xbDQRqeT03IH5Q22iQ'
})

export default {
  name: 'Map',
  data() {
    return {
      map: {},
      platform: {},
    };
  },
  props: {
    appId: String,
    appCode: String,
    lat: String,
    lng: String,
    width: String,
    height: String,
  },
  created() {
    this.platform = new H.service.Platform({
      app_id: this.appId,
      app_code: this.appCode,
    });
  },
  mounted() {
    this.map = new H.Map(
      this.$refs.map,
      this.platform.createDefaultLayers().normal.map,
      {
        zoom: 10,
        center: { lng: this.lng, lat: this.lat },
      },
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

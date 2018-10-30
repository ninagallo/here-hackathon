<template>
  <div class="here-map">
    <div ref="map" v-bind:style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
const platform = new H.service.Platform({
  app_id: 'LbRwyMzRp1cGXIsI0GNE',
  app_code: '_Zz0xbDQRqeT03IH5Q22iQ',
});

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
            center: { lng: this.lng, lat: this.lat }
        }
    );
    this.geocoder.geocode({ searchText: this.location }, data => {
      if(data.Response.View.length > 0) {
        if(data.Response.View[0].Result.length > 0) {
          var coords = data.Response.View[0].Result[0].Location.DisplayPosition;
          this.map.setCenter({lat: coords.Latitude, lng: coords.Longitude });
          this.map.addObject(new H.map.Marker({lat: coords.Latitude, lng: coords.Longitude }));
        }
      }
    }, error => {
      console.error(error);
    });
  }
}
</script>

<style scoped></style>
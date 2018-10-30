<template>
 <div class="map-here">
        <div ref="map" v-bind:style="{ width: width, height: height }"></div>
    </div>
</template>

<script>
    export default {
        name: "Map-here",
        data() {
            return {
                map: {},
                platform: {},
                ui: {},
                search: {}

            }
        },
        props: {
            
            appId: String,
            appCode: String,
            lat: String,
            lng: String,
            width: String,
            height: String
        },
        created() {
            this.platform = new H.service.Platform({
                "app_id": this.appId,
                "app_code": this.appCode
            });
            this.search = new H.places.Search(this.platform.getPlacesService());
        },
        mounted() {
            var defaultLayers = this.platform.createDefaultLayers();
            this.map = new H.Map(
                this.$refs.map,
                defaultLayers.normal.map,
                {
                    zoom: 10,
                    center: { lng: this.lng, lat: this.lat }
                }
            );
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
            this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
        },
        methods: {
            places(query) {
        this.map.removeObjects(this.map.getObjects());
        this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, data => {
            for(var i = 0; i < data.results.items.length; i++) {
                // Marker logic here
            }
        }, error => {
            console.error(error);
        });
    },
    
         }
         
    }
</script>

<style scoped></style>


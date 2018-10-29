<template>
    <div id="app">
        <input type="text" v-model="query" />
        <button type="button" v-on:click="search()">Search</button>
        <Map ref="map" appId="mc2NK6gAp2fuCvM11cbf" appCode="AJCclGzWJiB2SvQIm0LLpg" lat="19.43" lng="-99.13" width="100%" height="800px" />
    </div>
</template>

<script>
    import Map from "./components/Map.vue"

    export default {
        name: 'app',
        components: {
            Map
        },
        data() {
            return {
                query: "schools"
            }
        },
        methods: {
            search() {
                this.$refs.map.places(this.query);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }
</style>
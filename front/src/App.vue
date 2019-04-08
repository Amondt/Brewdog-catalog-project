<template>
    <div id="app">
        <v-container fluid fill-height pa-0>
            <v-layout row>
                <v-flex xs2>
                    <MenuLeft />
                </v-flex>
                <v-flex>
                    <router-view :key="1"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import MenuLeft from './menu/MenuLeft.vue'

export default {
    name: 'app',
    components: {
        MenuLeft
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>

<template>
    <div id="app">
        <v-app id="inspire" dark>

            <Drawer ref="drawer"/>
            
            <Toolbar @toggleDrawer="$refs.drawer.toggleDrawer()"/>

            <Views />

            <Vfooter />
        </v-app>
    </div>
</template>

<script>
import Drawer from '@/menu/Drawer'
import Toolbar from '@/header/Toolbar'
import Views from '@/views/Views'
import Vfooter from '@/footer/Vfooter'

export default {
    name: 'app',
    components: {
        Drawer,
        Toolbar,
        Views,
        Vfooter
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

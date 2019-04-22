<template>
    <v-footer fixed height=32>
        <v-layout justify-center>
            <v-flex>
                &copy;2019 , <b><a :style="darkTheme ? 'color:white;' : 'color:black'" href="https://amondt.github.io">A. Mondt</a></b> - All right reserved
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
export default {
    name: 'vfooter',
    props: { darkTheme: { Boolean }}
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>

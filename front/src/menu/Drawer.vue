<template>
    <v-navigation-drawer clipped fixed v-model="drawer" :mini-variant="mini" app>
        <v-list class="mt-1">
            <v-list-tile v-if="mini" @click.stop="mini = !mini">
                <v-list-tile-action>
                    <v-icon>chevron_right</v-icon>
                </v-list-tile-action>
            </v-list-tile>

            <v-list-tile v-else>
                <v-layout justify-end>
                    <v-flex shrink>
                        <v-btn flat @click.stop="mini = !mini">
                            <v-icon >chevron_left</v-icon>
                            <span>clip</span>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-list-tile>
        </v-list>

        <v-list>
            <v-list-tile v-for="item in menu" :key="item.name" router :to="item.path" @click.stop="mini = true">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'drawer',
    data () {
        return {
            drawer: false,
            mini: false,
            menu: [
                { name: 'Catalog', icon: 'folder', path: '/catalog/all' },
                { name: 'About', icon: 'weekend', path: '/about' }
            ]
        }
    },
    methods: {
        toggleDrawer () {
            this.drawer = !this.drawer
        }
    }
}
</script>

<style scoped>

</style>

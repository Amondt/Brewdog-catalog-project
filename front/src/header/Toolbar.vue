<template>
    <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="$emit('toggleDrawer')"></v-toolbar-side-icon>
        <v-toolbar-title>Brewdog</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu open-on-hover bottom offset-y transition="slide-y-transition" full-width>
            <template v-slot:activator="{ on }">
                <v-btn icon large v-on='on'>
                    <v-icon >color_lens</v-icon>
                </v-btn>
            </template>
            <v-card max-width='350' class="py-3 px-1">
                <v-layout wrap>
                    <v-flex xs4 v-for="color in colors" :key="color.name">
                        <v-btn depressed :color="color.code" ripple small @click.stop="$vuetify.theme.primary = color.code"></v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-menu>
        <!-- <v-btn  @click.stop="'#4caf50'"></v-btn> -->
        <v-btn icon large @click.stop="$emit('toggleTheme')"><v-icon>invert_colors</v-icon></v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name: 'toolbar',
    data() {
        return {
            colors: [
                { name: 'red', code: '#F44336' },
                { name: 'pink', code: '#E91E63' },
                { name: 'purple', code: '#9C27B0' },
                { name: 'deep-purple', code: '#673AB7' },
                { name: 'indigo', code: '#3F51B5' },
                { name: 'blue', code: '#2196F3' },
                { name: 'light-blue', code: '#03A9F4' },
                { name: 'cyan', code: '#00BCD4' },
                { name: 'teal', code: '#009688' },
                { name: 'green', code: '#4CAF50' },
                { name: 'light-green', code: '#8BC34A' },
                { name: 'lime', code: '#CDDC39' },
                { name: 'yellow', code: '#FFEB3B' },
                { name: 'amber', code: '#FFC107' },
                { name: 'orange', code: '#FF9800' },
                { name: 'deep-orange', code: '#FF5722' },
                { name: 'brown', code: '#795548' },
                { name: 'blue-grey', code: '#607D8B' },
            ]
        }
    }
}
</script>

<style>

</style>

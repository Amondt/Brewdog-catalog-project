<template>
    <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="$emit('toggleDrawer')"></v-toolbar-side-icon>
        <v-toolbar-title>Brewdog</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn fab flat @click.stop="$vuetify.theme.primary = '#4caf50'"><v-icon>color_lens</v-icon></v-btn>
        <v-btn fab flat @click.stop="$emit('toggleTheme')"><v-icon>invert_colors</v-icon></v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name: 'toolbar'
}
</script>

<style>

</style>

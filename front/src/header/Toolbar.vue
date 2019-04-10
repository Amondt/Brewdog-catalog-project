<template>
    <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="$emit('toggleDrawer')"></v-toolbar-side-icon>
        <v-toolbar-title>Brewdog</v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
    name: 'toolbar'
}
</script>

<style>

</style>

<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout>
                <v-flex>
                    <router-view key="routerView" />
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    name: 'views'
}
</script>

<style>

</style>

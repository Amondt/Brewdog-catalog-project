<template>
    <div>
        <v-container>
            <div v-if="dataBeers && dataBeers.length" style="display: flex; flexFlow: row wrap;">
                <div v-for="beer in dataBeers" :key="beer.name" style="margin: 10px 40px; width: 120px;">
                    <p>{{ beer.name }}</p>
                    <p>ABV : {{ beer.abv }}</p>
                    <p>IBU : {{ beer.ibu }}</p>
                    <p>EBC : {{ beer.ebc }}</p>
                </div>
            </div>
            <div v-else>
                Loading...
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'displayBox',
    props: {
        dataBeers: {
            type: Array
        }
    }
}
</script>

<style scoped>

</style>

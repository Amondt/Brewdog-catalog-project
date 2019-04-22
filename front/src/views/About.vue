<template>
    <div id="about">
        <v-layout wrap>
            <v-flex xs12 sm10 md6 lg4 text-xs-left>
                <h1 class='display-2 mt-3 mx-3 white--text'>Experimentation is our art. Revolution our weapon.</h1>
                    
                <p class="subheading mt-3 mx-3 white--text">At BrewDog we are on a mission to make other people as passionate about great craft beer as we are. All we care about is brewing world-class craft beer; extraordinary beers that blow people's minds and kick-start a revolution.</p>

                <p class="subheading mt-3 mx-3 white--text">Our Headliners are the beers that stand shoulder to hop-flecked shoulder alongside it. These are the beers we brew most frequently. They are the beers our die-hard beer geek fans come back to, time and time again...</p>
            </v-flex>

            <v-flex xs12 sm10 md6 lg4 offset-lg4 text-xs-right>
                <h3 class="display-1 mt-4 mx-3 white--text">The brewing proccess</h3>

                <p class="subheading mt-3 mx-3 white--text">Brewing is a pretty simple, natural process. We take malt, water, yeast and hops and make something awesome.</p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<style scoped>
#about {
    height: 100%;
    background-image: url("../assets/about_brewdog.jpg");
    background-position: 50% 45%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed!important
}
</style>

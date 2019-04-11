<template>
    <div>
        <SearchArea />
        <DisplayBox />
    </div>
</template>

<script>
import SearchArea from '../components/SearchArea'
import DisplayBox from '../components/DisplayBox'

export default {
    name: 'catalog',
    components: {
        SearchArea,
        DisplayBox
    }
}
</script>

<style scoped>

</style>

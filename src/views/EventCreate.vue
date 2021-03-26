<template>
    <div>
        <h1>Create an Event, {{ userName }}</h1>
        <p>This was created by {{ userName }}</p>
        <p><b>There are {{ catLength }} categories:</b></p>
        <ul v-for="cat in categories" :key="cat">
            <li>{{cat }}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        computed: { 
            catLength(){
                return this.$store.getters.catLength
            },
            ...mapState({
            userName: state => state.user.name,
            userId: state => state.user.id,
            categories: state => state.categories
        })
        }
    }
</script>

<style scoped>

</style>
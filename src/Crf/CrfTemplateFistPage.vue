<template>
    <div>
        <v-HeaderCrf></v-HeaderCrf>
        <router-view></router-view>
    </div>
    
</template>

<script>
    import HeaderCrf from "../components/HeaderCrf";
    export default {
        components:{
          'v-HeaderCrf':HeaderCrf,
        },
        name: "CrfTemplateFistPage"
    }
</script>

<style scoped>

</style>
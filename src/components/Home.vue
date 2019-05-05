<template>
 <div>
     home----------
     <button @click="handleclick"></button>
     <router-view/>
 </div>
</template>

<script>
 export default {
   name: '',
   data () {
     return {

     }
   },
   methods:{
     handleclick:function(){
       this.$router.push({path:'/use'})
     }
   },
   components: {

   }
 }
</script>

<style scoped>

 
</style>

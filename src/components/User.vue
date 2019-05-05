<template>
 <div>
     user-------
     {{id}}
     <router-view></router-view>
 </div>
</template>

<script>
 export default {
   name: '',
   data () {
     return {

     }
   },
   components: {

   },
   props:['id'],
   mounted:function(){
      console.log(this.$route)
   },
   watch:{
     '$route'(from,to){
       console.log(from)
       console.log(to)
     }
   }
 }
</script>

<style scoped>

 
</style>


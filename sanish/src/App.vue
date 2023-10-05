<template>
  <test :user="user"/>
</template>
<script scoped>
export default{
    data(){
      return{
        user:[
          {
            name:"Sanish",
            pwd:1234
          }
        ]
      }
    },
  }
</script>
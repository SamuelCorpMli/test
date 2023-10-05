<template>
  <test :user="user"/>
  <p>Main</p>
  <p>{{ user }}</p>
  <log :user="user" />
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
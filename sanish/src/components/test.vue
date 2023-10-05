<template>
<h2>Hello there</h2>
<p>mic test</p>
<p>{{ user }}</p>
<form @submit.prevent="reg" method="post">
    <input type="text" v-model="Nname" placeholder="Name">
    <input type="password" v-model="Npwd" placeholder="Password">
    <button class="submit">Sign Up</button>
</form>
</template>

<script>
export default{
    props:[
        "user"
    ],
    data(){
        return{
            Nname:"",
            Npwd:"",
        }
    },
    methods:{
        reg(){
            let Nuser={
                name:this.Nname,
                pwd:this.Npwd
            }
            this.user.push(Nuser);
        }
    }
}
</script>
<template>
<h2>Hello there</h2>
<p>Register</p>
<p>{{ user }}</p>
<form @submit.prevent="reg" method="post" id="sUp">
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
            Nname:null,
            Npwd:null,
        }
    },
    methods:{
        reg(){
            let Nuser={
                name:this.Nname,
                pwd:this.Npwd
            }
            if(this.Nname!=null && this.Npwd!=null){
                this.user.push(Nuser);
            }
            this.Nname=null;
            this.Npwd=null;

        }
    }
}
</script>
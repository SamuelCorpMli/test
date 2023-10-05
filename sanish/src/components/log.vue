<template>
<form @submit.prevent="log" method="post" id="sUp">
    <p>Login</p>
    <p>{{ user }}</p>
    <input type="text" v-model="Lname" placeholder="Name">
    <input type="password" v-model="Lpwd" placeholder="Password">
    <button class="submit">Sign in</button>
</form>
</template>

<script>
export default{
    props:[
        "user"
    ],
    data(){
        return{
            Lname:null,
            Lpwd:null,
        }
    },
    methods:{
        log(){
            if(this.Lname!=null && this.Lpwd!=null){
                this.user.forEach(x =>{
                    if(this.Lname==x.name && this.Lpwd==x.pwd){
                        alert("Login successful");
                    }
                });
            }
            else{
                alert("Incorrect Name or Password")
            }
            this.Lname=null;
            this.Lpwd=null;

        }
    }
}
</script>
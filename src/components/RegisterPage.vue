<template>
    <div id="app">
<div class="login-page">
    <div class="wallpaper-register"></div>
   <div class="container">
      <div class="row">
         <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card register" @submit="doRegister" v-bind:class="{ error: emptyFields }">
               <h1>Zarejestruj się</h1>
               <form @submit.prevent="handleSubmit" class="form-group">
                  <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                  <input v-model="passwordReg" type="password" class="form-control" placeholder="Hasło" required>
                  <input v-model="confirmReg" type="password" class="form-control" placeholder="Potwierdź hasło" required>
                  <input type="submit" class="btn btn-primary">
                  <p>Masz juz konto? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Zaloguj się</a>
                  </p>
               </form>
            </div>
         </div>
      </div>

   </div>
</div>
</div>
</template>
<script>

import axios from "axios";
export default {

    name: "RegisterPage",

    data: () => ({
        emailReg: "",
        passwordReg: "",
        confirmReg: "",
        emptyFields: false
    }),

    methods: {
        
        doRegister(){

            const data = {
                emailReg: this.emailReg,
                passwordReg: this.passwordReg,
                confirmReg: this.confirmReg

            };

            axios.post('//localhost:5163/api/Authentication/register', data)
                .then(
                    response => {
                        console.log(response)
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            }
    }
}

</script>
 

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
                                <input v-model="emailReg" type="email" class="form-control" placeholder="Email"
                                    required>
                                <input v-model="usernameReg" type="login" class="form-control" placeholder="Login"
                                    required>
                                <input v-model="passwordReg" type="password" class="form-control" placeholder="Hasło"
                                    required>
                                <input v-model="confirmReg" type="password" class="form-control"
                                    placeholder="Potwierdź hasło" required>
                                <input type="submit" class="btn btn-primary">
                                <p>Masz juz konto? <a href="#"
                                        @click="registerActive = !registerActive, emptyFields = false">Zaloguj się</a>
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
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {

    name: "RegisterPage",

    setup() {
        return { v$: useVuelidate() }
    },

    data: () => ({
        emailReg: "",
        usernameReg: "",
        passwordReg: "",
        confirmReg: "",
        emptyFields: false
    }),

    validations () {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email } // Matches this.contact.email
      }
    }
  },

    methods: {

        async doRegister() {

            const data = {
                email: this.emailReg,
                password: this.passwordReg,
                username: this.usernameReg,

            };

            const response = await axios.post('api/Authentication/register', data);

            console.log(response);

            this.$router.push('login');
        }
    }
}

</script>
 

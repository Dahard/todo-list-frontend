<template>
    <div id="app">
        <div class="login-page">
            <div class="wallpaper-login"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                        <div class="card login" v-bind:class="{ error: emptyFields }">
                            <h1>Zaloguj się</h1>
                            <form @submit.prevent="doLogin" class="form-group">
                                <input v-model="login" type="login" class="form-control" placeholder="Login"
                                    required>
                                <input v-model="passwordLogin" type="password" class="form-control" placeholder="Hasło"
                                    required>
                                <input type="submit" class="btn btn-primary" @click="doLogin">
                                <p>Nie masz konta? <a href="#"
                                        @click="registerActive = !registerActive, emptyFields = false">Zarejestruj
                                        się</a>
                                </p>
                                <p><a href="#">Zapomniałeś hasła?</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {

    name: "LoginPage",

    data: () => ({
        login: "",
        passwordLogin: "",
        emptyFields: false
    }),

    methods: {
        async doLogin() {

            const data = {
                password: this.passwordLogin,
                username: this.login,

            };

            const response = await axios.post('api/Authentication/login', data);
            localStorage.setItem('token', response.data.token);

            this.$router.push('/');
        
        },
    }
}

</script>
 

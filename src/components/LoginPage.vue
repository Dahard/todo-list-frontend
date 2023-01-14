<template>
<div id="app">
<div class="login-page">
   <div class="wallpaper-login"></div>
   <div class="container">
      <div class="row">
         <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login" v-bind:class="{ error: emptyFields }">
               <h1>Zaloguj się</h1>
               <form class="form-group">
                  <input v-model="emailLogin" type="email" class="form-control" placeholder="Login" required>
                  <input v-model="passwordLogin" type="password" class="form-control" placeholder="Hasło" required>
                  <input type="submit" class="btn btn-primary" @click="doLogin">
                  <p>Nie masz konta? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Zarejestruj się</a>
                  </p>
                  <p><a href="#">Zapomniałeś hasło?</a></p>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
</template>

<script>


export default {

    name: "LoginPage",

    data: () => ({
        emailLogin: "",
        passwordLogin: "",
        emptyFields: false
    }),

    methods: {
        doLogin() {
            if (this.emailLogin === "" || this.passwordLogin === "") {
                this.emptyFields = true;
            } else {
                alert("Jesteś zalogowany");
            }
        },
    }
}

</script>
 

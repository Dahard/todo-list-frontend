<template>
  <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
    <div class="container">
      <RouterLink to="/" class="nav-link mx-2" height="60">Home</RouterLink>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link mx-2 active" aria-current="page">Logowanie</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/register" class="nav-link mx-2">Rejestracja</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['user']
}
</script>
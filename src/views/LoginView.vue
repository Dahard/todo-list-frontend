<template>
    <LoginPage />
  </template>

<script>
import { defineComponent } from 'vue';

// Components
import LoginPage from '@/components/LoginPage.vue';

export default defineComponent({
  name: 'LoginPage',

  components: {
    LoginPage
  },
});
</script>
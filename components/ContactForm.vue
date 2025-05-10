<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" placeholder="Email" />
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
import { api } from '~/services/api';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login');

        const response = await api.post(
          'https://form-validacao-captcha.vercel.app/validar-recaptcha',
          {
            token,
          }
        );

        console.log(response);
      } catch (error) {
        console.log('Login error:', error);
      }
    },
    async mounted() {
      try {
        await this.$recaptcha.init();
      } catch (e) {
        console.error(e);
      }
    },
    beforeDestroy() {
      this.$recaptcha.destroy();
    },
  },
};
</script>

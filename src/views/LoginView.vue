<template>
  <div class="flex flex-1 h-screen w-screen polka-dot">
    <div class="flex flex-1 items-center justify-center">
      <div
        class="flex flex-col basis-1/4 shadow-sm p-8 gap-5 bg-gray-50 rounded-md"
      >
        <label for="email">Email</label
        ><input v-model="email" type="text" /><label for="password"
          >Password</label
        ><input v-model="password" type="password" />
        <p class="text-red-600">{{ message ? message : '' }}</p>
        <button class="bg-blue-500 text-white p-2 rounded" @click="handleLogin">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      message: '',
    }
  },
  methods: {
    handleLogin() {
      AuthService.login(this.email, this.password)
        .then(() => {
          this.$router.push('/home')
          window.location.reload()
        })
        .catch((error) => {
          this.message = error.response.data
        })
    },
  },
  watch: {
    email() {
      this.message = ''
    },
    password() {
      this.message = ''
    },
  },
}
</script>

<style>
.polka-dot {
  background-color: #202329;
  opacity: 1;
  background-image: radial-gradient(
      #535353 1.2000000000000002px,
      transparent 1.2000000000000002px
    ),
    radial-gradient(#535353 1.2000000000000002px, #202329 1.2000000000000002px);
  background-size: 48px 48px;
  background-position: 0 0, 24px 24px;
}
</style>

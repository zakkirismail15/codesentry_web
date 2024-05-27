<template>
  <div class="flex flex-1 flex-col h-screen w-screen">
    <Navbar />
    <DualNavbar><router-view /></DualNavbar>
  </div>
</template>

<script>
import Navbar from '@/components/base/navbar/Navbar.vue'
import DualNavbar from '@/components/base/dualnavbar/DualNavbar.vue'

export default {
  name: 'AuthorizedView',
  components: { Navbar, DualNavbar },
}
</script>

<style></style>

<template>
  <div class="p-4 box-border hover:bg-slate-200 transition duration-300">
    <router-link :to="route || { name: 'home' }" class="flex items-center gap-3"
      ><slot></slot
    ></router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    route: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>

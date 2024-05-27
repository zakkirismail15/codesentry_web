<template>
  <!-- Navbar -->
  <div class="flex flex-1 flex-col relative">
    <nav class="relative bg-white h-dualnav w-full z-[10] shadow-sm p-1">
      <button @click="toggleSidebar" class="btn-menu">
        <MenuIcon class="h-8 w-8" />
      </button>
      <!-- Collapsible Sidebar -->
    </nav>
    <div class="flex flex-1">
      <nav
        class="relative overflow-hidden top-0 left-0 h-full bg-slate-100 transition-all duration-300"
        :class="sidebarOpen ? 'max-w-64' : 'max-w-0'"
      >
        <SidebarItem
          ><DashboardIcon class="h-8 w-8" /><span>Dashboard</span></SidebarItem
        >
        <SidebarItem :route="{ name: 'project' }"
          ><ProjectIcon class="h-8 w-8" /><span>Project</span></SidebarItem
        >
        <SidebarItem :route="{ name: 'home' }"
          ><TicketIcon class="h-8 w-8" /><span>Ticket</span></SidebarItem
        >
      </nav>
      <div class="flex-1 relative"><slot></slot></div>
    </div>
  </div>
</template>

<script>
import MenuIcon from '@/assets/svg/MenuIcon.vue'
import SidebarItem from '@/components/base/dualnavbar/SidebarItem.vue'
import DashboardIcon from '@/assets/svg/DashboardIcon.vue'
import TicketIcon from '@/assets/svg/TicketIcon.vue'
import ProjectIcon from '@/assets/svg/ProjectIcon.vue'

export default {
  name: 'DualNavbar',
  components: { MenuIcon, SidebarItem, DashboardIcon, TicketIcon, ProjectIcon },
  data() {
    return {
      sidebarOpen: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>

<style>
.sidebar-nav {
  @apply relative top-0 left-0 h-full bg-slate-100 transition-all duration-300;
}

.sidebar-items {
  @apply flex justify-center overflow-hidden py-4 box-border hover:bg-black hover:text-white transition duration-300;
}
</style>

<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-data">
        <a href="" class="nav-logo"
          ><CodeSentryIcon class="nav-icon" />codesentry</a
        >
      </div>
      <ul>
        <li class="dropdown-item">
          <div class="nav-link"><UserIcon class="nav-icon" /></div>
          <ul class="dropdown-menu">
            <li>
              <a href="" class="dropdown-link">Settings</a>
            </li>
            <li>
              <a href="" @click="logout" class="dropdown-link">Log out</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import UserIcon from '@/assets/svg/UserIcon.vue'
import CodeSentryIcon from '@/assets/svg/CodeSentryIcon.vue'

export default {
  name: 'NavbarComponent',
  components: { UserIcon, CodeSentryIcon },
  methods: {
    logout() {
      const cookies = document.cookie.split(';')
      const accessTokenCookie = cookies.find((cookie) =>
        cookie.trim().startsWith('access_token=')
      )
      if (accessTokenCookie) {
        const [cookieName] = accessTokenCookie.split('=')
        document.cookie = `${cookieName.trim()}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      }
    },
  },
}
</script>

<style>
.header {
  @apply fixed top-0 left-0 w-full bg-dark-gray text-white shadow-lg z-[100] relative;
}

.nav-logo {
  @apply flex items-center gap-2;
}

.nav-data {
  @apply h-full flex justify-between items-center ms-6;
}
.nav-container {
  @apply h-header me-6 flex justify-between;
}

.nav-link {
  @apply text-white bg-dark-gray flex justify-around items-center h-header transition duration-300 w-16;
}

.nav-link:hover {
  background-color: blanchedalmond;
}

.dropdown-item {
  cursor: pointer;
  position: relative;
}

.dropdown-link {
  padding: 1.25rem 1.25rem 1.25rem 2.5rem;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  transition: background-color 0.3s;
}

.dropdown-link:hover {
  background-color: blueviolet;
}

.dropdown-menu {
  @apply absolute right-0 top-full max-h-0 overflow-hidden transition-transform duration-300 ease-out;
}

.dropdown-item:hover .dropdown-menu {
  max-height: 1000px;
  transition: max-height 0.4s ease-in;
}

.nav-icon {
  @apply h-9;
}
</style>

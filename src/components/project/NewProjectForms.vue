<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50"
    v-if="isOpen"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-xl w-1/2 h-1/2" @click.stop>
      <div class="bg-dark-gray p-3 mb-2 rounded-t-xl">
        <h2 class="text-white"><b>New Project</b></h2>
      </div>
      <form class="flex flex-col gap-3 mx-4" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-2">
          <label for="name">Project Name</label>
          <input
            class="ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            v-model="form.name"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="desc">Description</label>
          <textarea
            v-model="form.desc"
            class="ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div class="flex gap-2 self-end justify-end">
          <Button :type="'submit'" title="Create" :handleClick="handleSubmit"
            >Create</Button
          >
          <Button :handleClick="closeModal">Cancel</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/common/Button.vue'
import ProjectService from '@/services/ProjectService'

export default {
  name: 'NewProjectForms',
  components: { Button },
  data() {
    return {
      form: {
        name: '',
        desc: '',
      },
      isOpen: false,
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
    handleSubmit() {
      // handle form submit
      ProjectService.createProject(this.form.name, this.form.desc)
      this.closeModal()
    },
  },
  mounted() {
    this.$root.$on('openModal', () => {
      this.openModal()
    })
  },
  beforeDestroy() {
    this.$root.$off('openModal')
  },
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

button {
  margin-right: 10px;
}
</style>

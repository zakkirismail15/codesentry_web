<template>
  <div>
    <NewProjectForms></NewProjectForms>
    <Modal v-if="isModalVisible" @close="closeModal" @confirm="removeProject">
      <template v-slot:header>New Project</template>
      <template v-slot:body>Are you confirm to remove this project?</template>
      <template> </template>
    </Modal>
    <div class="flex justify-end p-2">
      <Button
        v-if="userRole === 'ROLE_PROJECT_MANAGER'"
        :handleClick="openModal"
        >Create Project</Button
      >
    </div>
    <ProjectItem
      v-for="project in $store.state.projects"
      :key="project.id"
      :project="project"
    ></ProjectItem>
  </div>
</template>

<script>
import ProjectItem from '@/components/project/ProjectItem.vue'
import NewProjectForms from '@/components/project/NewProjectForms.vue'
import ProjectService from '@/services/ProjectService'
import Button from '@/components/common/Button.vue'
import AuthService from '@/services/AuthService'
import Modal from '@/components/common/Modal.vue'

export default {
  name: 'ProjectView',
  components: { ProjectItem, Button, NewProjectForms },
  data() {
    return {
      userRole: AuthService.getUserRole(),
    }
  },
  methods: {
    openModal() {
      this.$root.$emit('openModal', NewProjectForms)
    },
    openModalConfirmation() {
      this.$root.$emit('openModal', Modal)
    },
    removeProject(id) {
      ProjectService.removeProject(id)
    },
  },

  mounted() {
    ProjectService.getProjects()
  },
}
</script>

<style></style>

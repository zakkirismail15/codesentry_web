<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-full bg-black/50"
    @click.self="close"
  >
    <div
      class="bg-white shadow-lg overflow-x-auto flex flex-col rounded-xl"
      @click.stop
    >
      <div class="bg-dark-gray p-3 flex">
        <slot name="header"></slot>
        <button class="ml-auto text-white" type="button" @click="close">
          X
        </button>
      </div>
      <section class="relative p-5">
        <slot name="body"></slot>
      </section>
      <footer class="p-5 flex gap-3 justify-end">
        <slot name="footer"></slot>
        <Button type="button" :handleClick="confirm">Confirm</Button>
        <Button type="button" :handleClick="close">Cancel</Button>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'ModalComponent',
  components: { Button },
  methods: {
    close() {
      this.$emit('close')
    },
    confirm() {
      this.$emit('confirm')
      this.$emit('close')
    },
  },
}
</script>

<style></style>

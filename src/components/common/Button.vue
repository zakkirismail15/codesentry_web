<template>
  <button
    class="rounded-xl hover:bg-slate-200 bg-dark-gray text-white hover:text-black p-2"
    @click="handleClick"
    :type="buttonType"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    handleClick: {
      type: Function,
      required: true,
    },
    buttonType: {
      type: String,
      required: false,
      default: 'button',
    },
  },
}
</script>

<style></style>

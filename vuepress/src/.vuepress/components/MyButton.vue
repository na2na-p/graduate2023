<template>
  <button class="my-button" :class="[type, size]" @click="click">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  methods: {
    click() {
      this.$emit('myclick');
    },
  },
};
</script>

<style>
.my-button {
  background: #f6f6f6;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  color: #666;
  cursor: pointer;
  font-size: 14px;
  margin: 2px 5px;
  outline: none;
  padding: 10px 20px;
  transition: opacity 0.4s;
}
.my-button.success {
  background: #2ecc71;
  color: #ffffff;
}
.my-button.large {
  font-size: 18px;
  padding: 15px 30px;
}
</style>

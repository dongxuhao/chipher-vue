<template>
  <!--  子组件-->
  <div class="confirm-button">
    <button @click="getButtonClick">{{text || '确认'}}</button><!--    点击事件-->

  </div>
</template>

<script>
  export default {
    name: "confirm-button",
    props: ["text"],//父组件传给子组件得值，父组件出给子组件得值通过props接收，子组件件通过$emit向父组件传值
    data() {
      return {
        msg: true
      };
    },
    methods: {
      getButtonClick() {
        this.$emit("message", this.msg);//点击按钮，向父组件传递值
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <!--  父组件-->
  <div class="first-app">
    {{msg}}
    <confirm text="注册" @message="getMeaasge"></confirm>
    <!--    text传给子组件得值-->
  </div>

</template>

<script>
  import Confirm from '../sub/Confirm'

  export default {
    name: "First",
    components: {
      Confirm
    },
    data() {
      return {
        msg: "Welcome to FirstApp"
      };
    },
    methods: {
      getMeaasge(val) {//val为子组件传给父组件得值
        alert(val);
      }
    }
  };
</script>

<style scoped>

</style>

<template>
  <div>
    <!--加密-->
    <el-row>
      <el-col :span="6" :offset="4">
        <el-input placeholder="请输入需加密内容" v-model="encryptInput" clearable>
        </el-input>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-input placeholder="加密后内容" v-model="encryptOutput" clearable>
        </el-input>
      </el-col>
      <el-button type="primary" round @click="encryptButton">加密</el-button>
    </el-row>

    <!--解密-->
    <el-row>
      <el-col :span="6" :offset="4">
        <el-input placeholder="请输入需解密内容" v-model="decryptInput" clearable>
        </el-input>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-input placeholder="解密后内容" v-model="decryptOutput" clearable>
        </el-input>
      </el-col>
      <el-button type="primary" round @click="decryptButton">解密</el-button>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "Cipher",
    data() {
      return {
        encryptInput: '',
        encryptOutput: '',
        decryptInput: '',
        decryptOutput: ''
      }
    },
    methods: {
      //加密
      encryptButton() {
        this.$axios({
          methods: "get",
          url: "/api/encryptEcb/" + this.encryptInput,  //@PathVaribale 获取url路径的数据
        }).then(response => {
          console.log(response)
          this.encryptOutput = response.data;
        })

      },
      //解密
      decryptButton() {
        this.$axios({
          methods: "get",
          url: "/api/decryptEcb",  //@RequestParam 获取请求参数的值
          params: {
            id: this.decryptInput
          }
        }).then(response => {
          console.log(response)
          this.decryptOutput = response.data;
        })
      }

    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>

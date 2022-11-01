<template>
    <div>
        <router-link class="logo" to="./">Web<span>VSK</span>Studio</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  font-size: 30px;
  display: block;
  color: #fff;
  margin-right: 150px;
  padding-left: 15px;
  span{
    color: red;
  }}
</style>
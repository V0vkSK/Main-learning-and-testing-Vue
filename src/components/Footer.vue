<template>
    <footer class="footer">
    <div class="footer-container">
        <Logo />
    </div>
    </footer>
</template>

<script>
import Logo from './Logo.vue';
    export default {
    name: "Footer",
    components: { Logo }
}
</script>

<style lang="scss" scoped>
  .footer{
      display: flex;
  width: 100%;
  height: 70px;
  align-items: center;  
  margin-right: auto;
  margin-left: auto;
      background-color: #140657;


  }
  .footer-container{
   margin-right: auto;
   margin-left: auto;
    display: block;
    width: 1400px;   
  }

</style>
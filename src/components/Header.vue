<template>
    <header class="header">
        <div class="container">
            <Logo/>
            <nav>
              <router-link class="link" :to="{name:'home'}" @click="dropmenuClosed">Home</router-link>
              <router-link class="link" to="/counter" @click="dropmenuClosed">Counter</router-link>
              <router-link class="link" :to="{name:'todos'}" @click="dropmenuClosed">TODOs</router-link>
              <div class="drop-container">
                <button type="button" class="link isActive" @click="dropmenu">Books & Authors</button>
                <DropMenu 
                class="dropmenu"
                :isVisible="isVisible"
                @isvisible="dropmenuClosed"
                />
              </div>
              <router-link class="link" to="/tests" @click="dropmenuClosed">Tests</router-link>
              
            </nav>
        </div>
    </header>
</template>

<script>
import DropMenu from './DropMenu.vue';
import Logo from './Logo.vue';


    export default {
    name: "Header",
  components: { Logo, DropMenu },
  data() {
    return {
      isVisible: false,
      
    }
  },
  
  methods: {
    dropmenu() {
      return this.isVisible = !this.isVisible
    },  
    dropmenuClosed() {
      return this.isVisible = false
    },  
    
  }
  
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 7;
  display: flex;
  width: 100%;
  min-height: 70px;
  background-color: #140657;
   
  
}

.container {
  display: flex;
  width: 1400px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
}
nav{
  display: flex;
  flex-direction: row;
}
.link{
 text-decoration: none;
  background: #13b00b;
  color: #fff;
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
}
.drop-container{
  position: relative;
 
}
.dropmenu{
  position: absolute;
  top: 100%;
  left: 0;
    
}
.link:hover {
  background: #0a4e25;
  color: rgb(0, 191, 255);
}
.router-link-active{
    text-decoration: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 20px;
  background: #0a4e25;
color:rgb(0, 191, 255)  
}
  // .isActive{  
  //   background: #0a4e25;
  //   color: rgb(0, 191, 255);
  // }

</style>
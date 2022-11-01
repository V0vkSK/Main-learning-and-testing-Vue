<template>
  <div class="drop-container" v-if="isVisible">
    <router-link class="link" :to="{name:'books'}" @click="dropMenuClose">Books</router-link>
    <router-link class="link" to="/authors" @click="dropMenuClose">Authors</router-link>
    
  </div>
</template>

<script>
  
  export default {
  name: 'DropMenu',

  data() {
    return {
      names: '',
      books:[]
    }
  },
    
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    dropMenuClose() { 
      return this.$emit('isvisible', '');
    }
  },


}
</script>

<style lang="scss" scoped>
.link{
  text-decoration: none;
  display: flex;
  width: 150px;
  padding: 15px;
  margin-bottom: 5px;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  background-color: #13b00b;
  color: #fff;

  &:hover, &:focus {
     background: #0a4e25;
  color: rgb(0, 191, 255);
  }
}
.drop-container{
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 150px;
  background-color: none;
  border: 0;
  border-radius: 5px;
  margin-top: 10px;
  

}
</style>
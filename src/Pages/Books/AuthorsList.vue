<template>
  <div>
    <h1 class="head">Author List</h1>
    <ul class="container">
      <li class="list-item" v-for="author in authors" :key="author.id">
      <router-link class="link" :to="{name: 'author', params:{
        id: author.id}}"
      >{{author.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

  export default {
  name: 'AuthorsList',
  
  // data() {
  //   return{
  //     authors: [],
  //     names: '',
  //     books: []
  //   }
  // },
  computed: {
    // ...mapGetters([
    //   'AUTHORS',
    //   // 'BOOKS'
    // ]),
    ...mapState([
      'books',
      'authors'
    ])
  },
    mounted() {
    this.$store.dispatch('GET_AUTHORS')
    this.$store.dispatch('GET_BOOKS')
    
  }

  }
</script>

<style lang="scss" scoped>
.head{
  // margin-left: auto;
  // margin-right: auto;
  margin-top: 15px;
}
.container{
  display: flex;
  justify-content: center;
  width: 300px;
  max-height: max-content;
  align-items: center;
  flex-direction: column;
  
  background-color: white;
  margin-top: 50px;
  margin-right: auto;
  margin-left: -50px;
  //  box-shadow: 0 20px 30px -10px rgb(0 0 0 / 35%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 5px;
padding-bottom: 10px;
  
  }
  .list-item{
  list-style: none;
  padding-top: 5px;
  font-size: 20px;
  font-weight: 1.4;
  
  }
  .link{
    text-decoration: none !important;
    color: rgb(93, 90, 90);
  }
</style>
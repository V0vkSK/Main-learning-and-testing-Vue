<template>
  <div>
  <h1 class="head">Books List</h1>
  <div class="container-books-list">
    <ul class="book-container-list">
      <BookItem v-for="book in books"
      :key="book.id"
      :id="book.id"
      :authorName="authorsList.find( el => el.id === book.authorId).name"
      :books_data="book"
      />
  </ul>
      <a href="#" class="btn-link">Вверх</a>
  
</div>
</div>
</template>
 
 <script>
import BookItem from './BookItem.vue'
import {mapGetters, mapState} from 'vuex'
  
export default {
  name: 'BooksList',
  components: {
    BookItem,
},
  
  computed: {
    booksList() {
      return this.$store.getters.BOOKS
    },
    authorsList() {
      return this.$store.getters.AUTHORS;   
    },
    ...mapGetters([
      'BOOKS',
      'AUTHOR'
    ]),
    ...mapState([
      'books'
    ])
  },
  
  mounted() {
    this.$store.dispatch('GET_BOOKS'),
    this.$store.dispatch('GET_AUTHORS')
  }
};
</script>

<style lang="scss" scoped>

.head{
  display: flex;
  margin-top: 100px;
}
.book-container-list {
display: flex;
justify-content: space-between;
max-width: 100%;
flex-wrap: wrap;
margin-right: auto;
margin-left: auto;
}
.btn-link{
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 5%;
  background-color: #13b00b;
  color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
<template>  
<div class="container-item">
   <h1 class="container-head">{{authors[this.$route.params.id-1].name}}</h1>   
            
  <ul class="author-container-list">
      
      <BookItem v-for="book in books.filter(el => el.authorId === authors[this.$route.params.id-1].id)"
      :key="book.id"
      :id="book.id"
      :books_data="book"
      :authorName="authors.find(el => el.id === book.authorId).name"
      />
    
    </ul>
  </div>
</template>

<script>
import BookItem from './BookItem'
import {mapState} from 'vuex'


export default {
  name: 'AuthorItem',
  components: {
    BookItem
  },
  computed: {
    ...mapState([
      'books',
      'authors'
    ])
  }
         }
    
</script>

<style lang="scss" scoped>
.container-item{
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.container-head{
  display: flex;
}
.author-container-list {
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-right: auto;
margin-left: auto;
margin-bottom: 100px;
  }
</style> 


<template>
  <section>
      <h1>{{booksList.title}}</h1>
       <p class="author">Автор: {{authorsList.name}}</p> 
      <img :src="booksList.imgUrl" :alt="booksList.title">
      <p>{{booksList.descr}}</p>
      <p class="genre">Жанр: {{booksList.genre}}</p>
  </section>
</template>

<script>

export default {
  name: 'BookInfo',
  computed: {
 
    booksList() {
      let IdAuthors = this.$store.getters.BOOKS[this.$route.params.id - 1].authorId
      localStorage.IdAuthor = Number(IdAuthors)
      return this.$store.getters.BOOKS[this.$route.params.id - 1]
      
    },
    authorsList() {
      let ans = this.$store.getters.AUTHORS
          
      return ans.find(el => el.id === Number(localStorage.IdAuthor));   
    }
  },

  }
 
</script>

<style lang="scss" scoped>
section{
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 600px;
  height: max-content;
  align-items: center;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h1{
  margin-top: 30px;
  margin-bottom: 15px;
}
.author{
  margin-bottom: 30px;
  font-style: italic;
  font-size: 14px;
  font-weight: 1.4;
}
img{
  margin-bottom: 30px;
}
.genre{
  display: flex;
  justify-content: left;
  margin-top: 20px;
  margin-bottom: 20px;
  font-style: italic;
  font-size: 12px;
  font-weight: 1.4;
}

</style>

<template>

  <li class="book-item-container">
    <router-link  :to="{name:'book', params:{id:id}}" :key="book" class="book-link">  
      <div class="book-photo-container">
      <img :src="books_data.imgUrl" :alt="books_data.title" class="book-item-photo">
      </div>
      <h2 class="book-title">{{books_data.title}}</h2>
      <p class="book-author">Автор: {{authorName}}</p>
      <h3 class="book-genre">Жанр: {{books_data.genre}}</h3> 
      <p class="book-descr">{{books_data.descr}}</p> 
    </router-link> 
    </li>   
  
</template>

<script>

export default {
  name: 'BookItem',
  props: {
    id: {
      type: Number,
      // required: true,
    },
    authorName: {
      type: String,
    },
    books_data: {
      type: Object,
      default: () => { }
    }
  },

  data() {
    return {
      book: '',
    }
  },

}
</script>

<style lang="scss" scoped>
.book-item-container{
  display: flex; 
  flex-direction: column;
  width: 300px;
  height: max-content;
  list-style: none;
  background-color: white;
  margin-top: 20px;
  margin-right: 20px;
  // margin-left: auto;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
  }
   .book-link{
    position: relative;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: rgb(69, 67, 67);
        
      &:hover .book-descr,
      &:focus .book-descr{
     transform: scale(1);
     opacity: 1;
     cursor: pointer;
     
    }
  }
  
  .book-descr{
  position: absolute;
  top: 0;
  left: 0;
  
  display: flex;
  width: 100%;
  height: 100%;
// max-height: calc(1em * 1.4 *22); //количество строк в блоке
  overflow: hidden;
  margin: 0;
  padding: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  color: #fff;

  background-color: rgba(38, 105, 146, 0.9);

  opacity: 0;
  transform: scale(0.3);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 100ms;
      
   
  }
 .book-photo-container{
    width: 100%;
    height: 300px;
 }
  .book-item-photo{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
.book-title{
  font-size: 14px;
  padding-top: 12px;
padding-bottom: 10px;
padding-left: 15px;
}
.book-genre{
  padding-left: 15px;
padding-bottom: 15px;
}
.book-author{
  font-size: 12px;
  padding-left: 15px;
  padding-bottom: 10px;
}
</style>
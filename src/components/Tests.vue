
<template>
  <div class="test-container">
    <h1>Tests Page</h1>
    <hr>
    <!-- <button type="submit" @click="sending">add</button>
    <button type="submit" @click="gett">get</button> -->
    <div class="item">
    <li v-for="item in items" :key="item.id">
      <h3>{{item.title}}</h3>
      <img :src="item.multimedia.scr" :alt="item.display_title">
    </li>
    </div>
  </div>
</template>

<script>
  //  import {mapActions, mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'Tests',
  data() {
    return {
    items: []
  }
  },
  methods: {
//     sending() {
//       fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify({
//     title: "test product",
//     price: 13.5,
//     description: "lorem ipsum set",
//     image: "https://i.pravatar.cc",
//     category: "electronic",
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));
    },
    // async gett() {
    //   await axios.get("https://fakestoreapi.com/products")
    //   .then((res) => console.log(res.data))
    // }
  // },
  async mounted() {
    await axios.get('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=Qv3Uw8MK4moKsVcaupYp3sRHa7QuXmtl')
      .then(response => this.items = response.data.results)
      stop
      .then(console.log(this.items))

      // await axios.get("https://fakestoreapi.com/products")
      // .then((res) => console.log(res.data))
      // .then((json) => console.log(json));
      
  }
  
  }
// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Qv3Uw8MK4moKsVcaupYp3sRHa7QuXmtl

</script>

<style lang="scss" scoped>
.test-container{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    
}
h1, h3{
  margin-bottom: 15px;
}

hr{
  margin: 15px auto;
  width: 1400px;
}
.item{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // margin-left: 500px;
  margin-top: 10px;
}
img{
  display: flex;
  width: 300px;
  // height: 300px;
}
li{
  list-style: none;
}
</style>
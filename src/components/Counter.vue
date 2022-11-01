<template>
    <div class="container">
            <h1>{{title}}</h1>
            <div class="buttons">
              
              <EmptyButton class="inc-btn" @click="increment">
              <template v-slot:btnn><span class="title-btn">Увеличить</span></template></EmptyButton>
              
              <EmptyButton @click="decrement">
              <template v-slot:btnn><span class="title-btn">Уменьшить</span></template></EmptyButton>
            </div>
    </div>
</template>

<script>
import EmptyButton from './EmptyButton.vue';


export default {
  name: 'Counter',
    components: {
        EmptyButton,
    },
  data() {
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    increment() {    
      this.amountOfClicks ++
      this.setLocalCounter()
    },
    decrement() {
      this.amountOfClicks--       
      this.setLocalCounter()
    },
    setLocalCounter() {
      localStorage.amountOfClick=this.amountOfClicks
    }
  },
  mounted() {
    if (localStorage.amountOfClick) {
    this.amountOfClicks = +localStorage.amountOfClick
  }
}

}
</script>

<style lang="scss" scoped>
 .container{
  display: flex;
  width: 300px;
  height: 120px;
  align-items: center;
  flex-direction: column;
  
  background-color: white;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
    //  box-shadow: 0 20px 30px -10px rgb(0 0 0 / 35%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-top: 15px;

  font-size: 10px;
  
  }
  .buttons{
    padding-top: 15px;
    display: flex;
    
  }
  .inc-btn{
    margin-right: 15px;
  } 
  .title-btn{
    font-size: 15px;
  }
</style>
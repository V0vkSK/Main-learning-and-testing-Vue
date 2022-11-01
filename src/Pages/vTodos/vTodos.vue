<template>
  <div class="todo">
    <h1 class="head-todo">TODOs</h1>
    <div class="container-todo">
      <form
       class="todo-input-container"
       @submit="addTask"
      >
          <input autofocus maxlength="100" class="todo-input" type="text" key="input" 
          v-model.lazy="title" placeholder="Input task">
          <input type="submit" class="todo-btn" value="Add" >
          <!-- <textarea class="todo-description" maxlength="100" type="text"
          v-model="model.description" placeholder="Input description"/> -->
      </form>
    </div>
    <div class="tasks">
      <VTodoItem  
      :taskArray="taskArray"
      @taskDelete="taskDelete"
      @taskDone="taskDone"
      @editTaskTitle="taskEdit"
      />
    </div>
  </div>
</template>

<script>
import VTodoItem from './vTodoItem.vue'
import axios from 'axios'
import {mapActions } from 'vuex'
  export default {
  name: 'vtodos',
  components: {
      VTodoItem
  },

  data() {
    return {
          title: '',
          status: Boolean,
          index: Number,
          taskArray: []
      }
  },

  // computed: {
  //   ...mapState([
  //     'todos'
  //   ]),
  // },
   
  methods: {
    ...mapActions([
      'ADD_TODO',
      'TASK_DONE',
      'GET_TODOS'
    ]),
    async getTasks() {
      await axios.get('http://localhost:4041/todo')
        .then(res => this.taskArray = res.data)
        
    },

    addTask() {
      this.$store.dispatch('ADD_TODO', this.title, false)
 
    },

    taskDelete(index) {
      this.taskArray.splice(index, 1)

      axios.delete(`http://localhost:4041/todo/${index+1}`)
      .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
      console.error(error.response.data);
      })
    },

    taskDone(index, title, status) {
      console.log(index);
      console.log(title);
      console.log(status);
      let stat = !status;
      console.log(stat);
               
      this.$store.dispatch('TASK_DONE',
      { id: index + 1, title: title, status: stat }) 
    },

      taskEdit(index, title) {
      this.taskArray[index].title = title
      this.taskArray[index].status = false

      axios.put(`http://localhost:4041/todo/${index + 1}`, {
        title: this.taskArray[index].title,
        status: this.taskArray[index].status
      })
      .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
      console.error(error.response.data);
      })
    }
  },

  mounted() {
    this.$store.dispatch('GET_TODOS')
    this.title = ''         
  }

  }
</script>

<style lang="scss" scoped>
.todo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // outline: 1px solid red;
}
.head-todo{
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  // outline: 1px solid blue;
}
.container-todo {
    display: flex;
    margin-right: auto;
    margin-left: auto;
  width: 300px;
  height: fit-content;
  align-items: center;
  flex-direction: column;
  
  background-color: white;
  margin-top: 30px;
  margin-right: auto;
  // margin-left: -100px;
    //  box-shadow: 0 20px 30px -10px rgb(0 0 0 / 35%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-top: 15px;

  font-size: 10px;
}
.todo-input {
  margin-right: 15px;
  margin-left: 20px;
  width: 180px;
  height: 25px;
  border-radius: 5px;
  text-indent: 5px;
  }
.todo-btn {
  padding: 5px 20px;
  background-color: lightgrey;
  border: 0;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.todo-description{
  width: 180px;
  min-height: 70px;
margin-left: 20px;
margin-bottom: 20px;
resize:none;
border-radius: 5px;
padding: 5px;
}
.tasks {
     display: flex;
    margin-right: auto;
    margin-left: auto;
  width: 650px;
  height: fit-content;
  align-items: center;
  flex-direction: column;
  
  background-color: white;
  margin-top: 10px;
   //  box-shadow: 0 20px 30px -10px rgb(0 0 0 / 35%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}


</style>
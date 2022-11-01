<template>
  <div>
    <vEditTodo 
    :modalIsVisible="modalIsVisible"
    :id="index"
    />
  <ul>
  <li class="task" v-for="(item, index) in todos" :key="item.id">
      <div class="block" :class="{ 'task-done': item.status }">
        <p class="task-p">Task:</p>
        <p class="task__title">{{item.title}}</p>
      </div>
      
      <div class="btn">
        <button type="button" class="task__done" @click="taskEdit(index)">🖉</button>
        <button type="button" class="task__done" @click="taskDone(index, item.title, item.status)">🗸</button>
        <button type="button" class="task__delete" @click="taskDelete(index)">❌</button>
      </div>
    </li>
  </ul>

  </div>
</template>

<script>
import vEditTodo from './vEditTodo'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'vtodoitem',
  components: {
    vEditTodo
  },
  data() {
    return {
      modalIsVisible: false
    }
  },
  computed: {
    ...mapState([
      'todos'
    ])
  },

  methods: {
    ...mapActions([
      'TASK_DONE',
      'GET_TODOS'
    ]),
    taskEdit() {
      this.modalIsVisible = true
      // return this.$emit('taskEdit', index, title)
    },
    taskDelete(index) {
      return this.$emit('taskDelete', index)
    },

    taskDone(index,title,status) {
      // this.$store.state.commit('SET_TODO', index)
      return this.$emit('taskDone', index, title, status)
    },
    // mounted() {
    //   this.$store.dispatch('GET_TODOS')
    // }
  }
}

</script>

<style lang="scss" scoped>
.task {
  list-style: none;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 600px;
  max-height: max-content;
  align-items: center;
    
  background-color: white;
  margin: 10px auto 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:last-child{
      margin-bottom: 10px;
    }
		&__delete {
    margin-right: 15px;
		}
		&__title {
      font-weight: 600;
      font-size: 14px;
      // width: 200px;      
		}
		&__done {
      width: 20px;
      margin-right: 15px;
		}
}
.task-done{
  color:gray;
  text-decoration: line-through;
}
.task-p{
  font-size: 15px;
  display: flex;
  margin-right: 5px;
}
.block{
  display: flex;
  flex-direction: row;
}
.btn{
  display: flex;
}

</style>

<template>
    <div class="modal-shadow" v-if="modalIsVisible">
     <form
       class="todo-input-container"
       @submit="editTask">
          <input autofocus maxlength="100" class="todo-input" type="text" key="input" 
          v-model.lazy="title" :placeholder="id">
          <input type="submit" class="todo-btn" value="Edit" >
      </form>
    </div>
</template>

<script>
  export default {
  name: 'vedittodo',
  data() {
    return {
        title: '',
        status: false,
      }
  },
  props: {
      id: Number,
      modalIsVisible: Boolean
  },
  methods: {
    editTask(index) {
      console.log(index);
      console.log(this.title);
          
         return this.$emit('editTask', index, this.title )
      }
    }
  }
</script>

<style lang="scss" scoped>
.modal-shadow{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;

    // opacity: 0.7;
    background-color: gray;
    align-content: center;
    justify-content: center;

}
.todo-input-container{
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
    display: flex;
    // opacity: ;
    // flex-direction: row;
    
    // margin-left: -300px;
    width: 300px;
    height: 100px;
    align-items: center;
    
    background-color: white;
    margin-top: 30px;
    margin-right: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 15px;

    font-size: 10px;
}
.todo-input {
  display: flex;
  margin-right: 15px;
  margin-left: 20px;
  width: 180px;
  height: 25px;
  border-radius: 5px;
  text-indent: 5px;
  }
.todo-btn {
  display: flex;
  padding: 5px 20px;
  background-color: lightgrey;
  border: 0;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
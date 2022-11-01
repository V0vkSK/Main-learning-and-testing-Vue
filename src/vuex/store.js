// import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    books: {},
    authors: {},
    booksByAuthor: [],
    todos: [],
  },
  mutations: {
    SET_BOOKS: (state, payload) => {
      state.books = payload;
    },
    SET_AUTHORS: (state, payload) => {
      state.authors = payload;
    },
    SET_TODOS: (state, payload) => {
      state.todos = payload;
    },
    // SET_TODO: (state, index) => {
    //   state.todos[index].status = !state.todos[index].status;
    //   // state.todos.title = state.todos.title;
    // },
  },
  actions: {
    async GET_BOOKS({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:4040/books");
        commit("SET_BOOKS", data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async GET_AUTHORS(context) {
      try {
        const { data } = await axios.get("http://localhost:4040/authors");
        context.commit("SET_AUTHORS", data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    async GET_TODOS({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:4041/todo");
        commit("SET_TODOS", data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    ADD_TODO: async (context, title) => {
      let { data } = await axios.post("http://localhost:4041/todo", {
        title: title,
        status: false,
      });
      if (data.status == 200) {
        context.commit("SET_TODOS", { title: title, status: false });
      }
    },

    TASK_DONE: async (context, todo) => {
      //   // console.log(todo.status);
      //   // console.log(todo.title);
      //   // console.log(todo.status);

      let { data } = await axios.put(`http://localhost:4041/todo/${todo.id}`, {
        title: todo.title,
        status: todo.status,
      });

      if (data.status == 200) {
        let stat = !todo.status;
        // console.log(stat);
        context.commit("SET_TODO", {
          title: todo.title,
          status: stat,
        });
      }
    },

  },
  getters: {
    BOOKS(state) {
      // console.log(state.books);
      return state.books;
    },
    // BOOKS_BY_ID: (state) => {
    //   return state.booksByAuthor;
    // },
    AUTHORS(state) {
      // console.log(state.authors);
      return state.authors;
    },
    TODOS: (state) => {
      return state.todos;
    },
  },
});

export default store;

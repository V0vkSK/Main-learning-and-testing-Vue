import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import Counter from "@/components/Counter.vue";
import BooksList from "./Pages/Books/BooksList.vue";
import NotFound from "./components/NotFound";
import BookInfo from "./Pages/Books/BookInfo";
import Tests from "./components/Tests.vue";
import AuthorsList from "./Pages/Books/AuthorsList";
import AuthorInfo from "./Pages/Books/AuthorItem.vue";
import vTodos from "./Pages/vTodos/vTodos.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: { title: "Web VSK Studio" },
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter,
    },
    {
      path: "/todos",
      name: "todos",
      component: vTodos,
    },
    {
      path: "/books/",
      name: "books",
      props: true,
      component: BooksList,
    },
    {
      path: "/books/:id",
      name: "book",
      props: true,
      component: BookInfo,
    },
    {
      path: "/authors/",
      name: "authors",
      props: true,
      component: AuthorsList,
    },
    {
      path: "/authors/:id",
      name: "author",
      props: true,
      component: AuthorInfo,
    },
    {
      path: "/tests/",
      name: "tests",
      component: Tests,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;

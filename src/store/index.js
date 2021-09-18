import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subject:"",
    nameSubject:"",    
    nameAuthor:"",
    author:"",
    books: [],
  },
  mutations: {
    LOAD_AUTHOR: (state, payload) => (state.author = payload),
    LOAD_BOOKS: (state, payload) => (state.books = payload),
    LOAD_SUBJECT: (state, payload) => (state.subject = payload),

  },
  getters: {
    countBooks: (state) => state.books.length,
  },
  actions: {
    GET_BOOKS: (state) => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${state.state.author}`
      )
        .then((res) => {
          // console.log('autor es', res)
          return res.json();
        })
        .then((response) => {
          const arrayBooks = response.items.map((book) => book.volumeInfo)

          state.commit("LOAD_BOOKS",arrayBooks)
          console.log('los libros son', arrayBooks)
          // console.log('response es ', response)
        });
    },

    GET_SUBJECT: (state) => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${state.state.subject}`
      )
        .then((res) => {
          // console.log('tema es', res)
          return res.json();
        })
        .then((response) => {
          const arrayBooks = response.items.map((book) => book.volumeInfo)
          state.commit("LOAD_BOOKS",arrayBooks)
          console.log('GET_SUBJECT los libros son', arrayBooks)
          // console.log('GET_SUBJECT response es ', response)
        });
    }
  },
});

// $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response))


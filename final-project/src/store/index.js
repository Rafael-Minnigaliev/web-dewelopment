import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: [],
    search_list: []
  },

  getters: {
    getCatalog(state) {
      return state.catalog;
    },
    getCart(state) {
      return state.cart;
    },
    getSearchList(state) {
      return state.search_list;
    },
  },

  mutations: {
    setCatalog(state, payload) {
      state.catalog = [...state.catalog, ...payload];
    },

    setCart(state, payload) {
      state.cart = payload;
    },

    deleteGood(state, payload) {
      const updatedCart = state.cart.filter(good => good.id !== payload);
      state.cart = updatedCart;
    },

    clearCartGood(state) {
      state.cart = [];
    },

    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId);
      if (goodInCart) {
        goodInCart.quantity++;
      } else {
        const good = state.catalog.find((item) => item.id === goodId);
        state.cart.push({ ...good, quantity: 1 });
      }
    },

    pushSearchList(state, payload) {
      if (payload !== "") {
        const regexp = new RegExp(payload, "gi");
        const good = state.catalog.find((item) => regexp.test(item.title));
        if (good !== undefined) {
          state.search_list = [];
          state.search_list.push(good);
        } else {
          state.search_list = [];
        }
      } else {
        state.search_list = [];
      }
    }
  },

  actions: {
    loadCatalog({ commit }) {
      return fetch('api/good')
        .then((response) => {
          return response.json();
        })
        .then((goodList) => {
          commit('setCatalog', goodList);
        })
    },

    loadCart({ commit }) {
      return fetch('api/cart')
        .then((response) => {
          return response.json();
        })
        .then((goodList) => {
          commit('setCart', goodList);
        })
    },

    loadToCart({ commit }, good) {
      return fetch('api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(good),
      })
        .then(() => {
          commit('addToCart', good.id)
        })
    },

    deleteFromCart({ commit }, good) {
      return fetch('api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(good)
      })
        .then(() => {
          commit('deleteGood', good.id)
        })
    },

    clearCart({ commit }, good) {
      return fetch('api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(good)
      })
        .then(() => {
          commit('clearCartGood')
        })
    },

    searchList({ commit }, value) {
      commit('pushSearchList', value)
    }
  }
})

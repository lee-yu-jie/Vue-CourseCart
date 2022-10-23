import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    course: [],
    cartList: [],
    sum: 0
  },
  actions: {
    handgetCourse({ commit }) {
      axios
        .get("https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e")
        .then((res) => {
          commit("getCourse", res.data);
        });
    },
    handaddtoCart({ commit }, item) {
      commit("addtoCart", item);
      commit("getSum");
    },
    handdelted({ commit }, item) {
      commit("deleted", item);
      commit("getSum");
    },
    handdeltedChecked({ commit }, item) {
      commit("deletedChecked", item);
      commit("getSum");
    }
  },
  mutations: {
    getCourse(state, data) {
      state.course = data;
    },
    addtoCart(state, item) {
      let index = state.cartList.findIndex((data) => data.title === item.title);

      if (index !== -1) {
        state.cartList[index].amount++;
      } else {
        state.cartList.push({
          ...item,
          amount: 1
        });
      }
      console.log(state.cartList);
    },
    getSum(state) {
      state.sum = 0;
      state.cartList.forEach((el) => {
        state.sum += el.amount * el.price;
      });
    },
    deleted(state, item) {
      const index = state.cartList.findIndex((data) => data.name === item.name);
      if (index >= 0) {
        state.cartList.splice(index, 1);
      }
    },
    deletedChecked(state, item) {
      item.forEach(() => {
        const index = state.cartList.findIndex(
          (data) => data.name === item.name
        );
        if (index >= 0) {
          state.cartList.splice(index, 1);
        }
      });
    }
  },
  getters: {
    courseList(state) {
      return state.course;
    },
    cartList(state) {
      return state.cartList;
    },
    cartSum(state) {
      return state.sum;
    }
  }
});


import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      gender: "male",
      popUpVisible: true,
    };
  },
  mutations: {
    male: (state) => (state.gender = "male"),
    female: (state) => (state.gender = "female"),
    changingPopup: (state) => (state.popUpVisible = !state.popUpVisible),
    unspecified: (state) => (state.gender = "unspecified"),
  },
  actions: {
    changeToFemale() {
      this.commit("female");
    },
    changeToMale() {
      this.commit("male");
    },
    changePopup() {
      this.commit("changingPopup");
    },
    changeToUnspecified() {
      this.commit("unspecified");
    },
  },
  getters: {
    genderGetter: (state) => state.gender,
    popupGetter: (state) => state.popUpVisible,
  },
});

export default store;

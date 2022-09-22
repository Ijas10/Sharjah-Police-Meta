<template>
  <main
    class="app-main app-choose-body-type d-flex justify-content-center align-items-center"
  >
    <div>
      <b-modal
        centered
        hide-footer
        hide-header
        no-close-on-backdrop
        v-model="popupGetter"
        title="BootstrapVue"
        class="modal1"
      >
        <div class="d-flex flex-column align-items-center">
          <p class="mb-4 fw-bold text-center colorof">
            Please give access to experience an interactive voice session.
          </p>
          <b-button class="w-50" @click="afterClicking" variant="primary">
            Allow
          </b-button>
        </div>
      </b-modal>
    </div>
    <div
      class="container d-flex justify-content-center align-items-center flex-column height-100"
    >
      <div class="app-card app-card--lg text-center">
        <div class="app-circle app-circle--lg">
          <img src="../assets/img/cam-icon.svg" alt="" />
        </div>
        <p class="app-info text-blue">
          *For Better Results take a selfie with a neutral face <br />
          and good lighting
        </p>
        <button
          class="btnclass btn btn-primary btn-lg d-flex btn-full justify-content-center align-items-center"
        >
          Take a Photo
        </button>

        <div class="file-input text-center">
          <input type="file" name="" id="inputFile" />
          <label for="inputFile">Pick a File</label>
        </div>
        <button
          @click="navigatingthrough"
          class="btn btn-default btn-lg d-flex btn-full justify-content-center align-items-center"
        >
          Continue without a photo
        </button>
      </div>
      <p class="display">{{ note }}</p>
    </div>
  </main>
</template>

<script>
import useSpeechRecognition from "../components/SpeechRecognition.js";
import router from "../router/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
  setup() {
    const { note, error, isListening, toggleListening } =
      useSpeechRecognition();
    const greet = () =>
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          "Please say yes if you want to continue without a photo"
        )
      );
    return {
      note,
      error,
      greet,
      toggleListening,
      isListening,
    };
  },
  computed: {
    ...mapGetters(["popupGetter"]),
  },

  mounted() {
    if (!this.popupGetter) {
      this.greet();
      setTimeout(this.toggleListening, 3000);
    }
  },
  methods: {
    ...mapActions(["changePopup"]),
    navigatingthrough() {
      this.toggleListening();
      setTimeout(() => {
        router.push("/select-avatar");
      }, 300);
    },
    afterClicking() {
      this.greet();
      setTimeout(this.toggleListening, 3000);
      this.changePopup();
    },
  },

  updated() {
    if (this.note.slice(-3, -1) === "ye") {
      this.toggleListening();
      setTimeout(() => router.push("/select-avatar"), 300);
    }
    if (this.note.slice(-7, -1) === "go bac") {
      this.toggleListening();
      setTimeout(() => router.go(-1), 300);
    }
  },
};
</script>

<style>
.colorof {
  color: black !important;
}
</style>

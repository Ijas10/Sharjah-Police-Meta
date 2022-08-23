<template>
  <main class="app-main app-choose-body-type">
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
          <p class="mb-4 fw-bold text-center">
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
        <h3 class="app-h3 text-blue app-h3--lg">
          Choose your <br />
          Body Type
        </h3>

        <div class="form-group form-group--radio">
          <div class="form-check">
            <!-- <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" > -->
            <button
              class="form-check-label d-flex justify-content-center align-items-center"
              for="radio1"
              @click="navigateToMale"
            >
              Masculine
            </button>
          </div>
          <div class="form-check">
            <!-- <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2"> -->
            <button
              class="form-check-label d-flex justify-content-center align-items-center"
              for="radio2"
              @click="navigateToFemale"
            >
              Feminine
            </button>
          </div>
          <p class="display">
            {{ note }}
          </p>

          <div class="form-check">
            <!-- <input type="radio" name="optradio" id="radio3"  class="form-check-input"> -->
            <button
              class="form-check-label d-flex justify-content-center align-items-center"
              for="radio3"
              @click="navigateToFemale"
            >
              Dont't Specify
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import useSpeechRecognition from "../components/SpeechRecognition.js";
import router from "../router/index.js";

import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      speech: "",
    };
  },
  methods: {
    ...mapActions(["changeToFemale", "changeToMale", "changePopup"]),
    navigateToMale() {
      this.changeToMale();
      this.toggleListening();
      setTimeout(() => {
        router.push("/select-photo");
      }, 300);
    },
    navigateToFemale() {
      this.changeToFemale();
      this.toggleListening();
      setTimeout(() => {
        router.push("/select-photo");
      }, 300);
    },
    afterClicking() {
      this.greet();
      setTimeout(this.toggleListening, 2000);
      this.changePopup();
    },
  },
  computed: {
    ...mapGetters(["popupGetter"]),
  },
  setup() {
    const { note, error, isListening, toggleListening } =
      useSpeechRecognition();
    const greet = () =>
      speechSynthesis.speak(
        new SpeechSynthesisUtterance("Choose your body type")
      );
    return {
      note,
      error,
      toggleListening,
      isListening,
      greet,
    };
  },

  mounted() {
    if (!this.popupGetter) {
      this.greet();
      setTimeout(this.toggleListening, 2000);
    }
  },

  updated() {
    this.speech = this.note;

    console.log(this.note);
    if (this.note.slice(-9, -1) === "masculin") {
      this.changeToMale();
      this.toggleListening();
      setTimeout(() => router.push("/select-photo"), 300);
    }

    if (this.note.slice(-8, -1) === "feminin") {
      this.changeToFemale();
      this.toggleListening();
      setTimeout(() => router.push("/select-photo"), 300);
    }

    if (this.note.slice(-13, -1) === "don't specif") {
      this.toggleListening();
      setTimeout(() => router.push("/select-photo"), 300);
    }

    if (this.note.slice(-7, -1) === "go bac") {
      this.toggleListening();
      setTimeout(() => router.go(-1), 300);
    }
  },
};
</script>

<style>
.display {
  display: none;
}
</style>

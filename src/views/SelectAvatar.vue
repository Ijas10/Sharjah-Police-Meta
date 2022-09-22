<template>
  <div>
    <main class="app-main app-avatar app-choose-body-type">
      <div>
        <b-modal
          centered
          hide-footer
          hide-header
          v-model="popupGetter"
          no-close-on-backdrop
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
        <h3 class="app-h3 text-blue app-h3--lg mb-auto">Choose your Avatar</h3>
        <splide class="customSplide" :options="primaryOptions" ref="primary">
          <splide-slide
            class="customStyle"
            v-for="(item, index) in listOfData"
            :key="index"
          >
            <img
              v-if="genderGetter === 'male'"
              src="../assets/img/avatar.png"
              class="avatar1"
              alt="pic"
            />
            <img
              v-if="genderGetter === 'female'"
              src="../assets/img/avatar-1.png"
              class="avatar1"
              alt="pic"
            />
            <img
              v-if="genderGetter === 'unspecified'"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              class="avatar12"
              alt="pic"
            />

            <div class="app-slider__footer">
              <a
                class="btn btn-primary1 atag btn-md d-flex btn-full align-items-center justify-content-center"
                href="https://sharjah-police.xrpro.cloud/portal?name=publicuser&room=store_room_tcp"
                >Choose</a
              >
              <!-- <button
                class="btn btn-primary1 btn-md d-flex btn-full align-items-center justify-content-center"
              >
                Choose
              </button> -->
            </div>
          </splide-slide>
        </splide>
        <p class="hidden">{{ note }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import useSpeechRecognition from "../components/SpeechRecognition.js";
import { mapGetters, mapActions } from "vuex";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import router from "../router/index.js";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  computed: {
    ...mapGetters(["genderGetter", "popupGetter"]),
  },
  setup() {
    const { note, error, isListening, toggleListening } =
      useSpeechRecognition();
    const greet = () =>
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          "Choose your avatar by saying next or back and confirm by saying ok"
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
  methods: {
    ...mapActions(["changePopup"]),
    afterClicking() {
      this.greet();
      setTimeout(this.toggleListening, 4300);
      this.changePopup();
    },
  },
  mounted() {
    if (!this.popupGetter) {
      this.greet();
      setTimeout(this.toggleListening, 4300);
    }
  },
  updated() {
    if (this.note.slice(-7, -1) === "go bac") {
      this.toggleListening();
      setTimeout(() => router.go(-1), 300);
    }
    if (this.note.slice(-4, -1) === "nex") {
      document.querySelector(".splide__arrow--next").click();
    }
    if (this.note.slice(-4, -1) === "bac" || this.note.slice(-3, -1) === "Ba") {
      document.querySelector(".splide__arrow--prev").click();
    }
    if (this.note.slice(-2) === "ok") {
      document.querySelector(".atag").click();
    }
  },

  data() {
    return {
      primaryOptions: {
        type: "loop",
        rewind: true,

        pagination: false,
        gap: "1rem",
        width: "73%",
        trimSpace: false,
        fixedWidth: "27%",
        fixedHeight: "24vh",
        updateOnMove: true,
        padding: "20%",
        perPage: 5,
        perMove: 1,
        focus: "center",
        //cover: true,

        //          lazyLoad: 'nearby',
        //heightRatio: .75,
        //cover: true
      },
      listOfData: ["one", "two", "three", "four", "five"],
      count: 0,
      slides: [
        {
          thumb:
            "https://d58ma69y1tqp9.cloudfront.net/fit-in/200x200/filters:no_upscale()/images/vendors/products/Skp4Jwf3xc8pANfWhgClEq1mgXnX4BI9RRzvuxYf.png",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.hidden {
  display: none;
}
a {
  color: #42b983;
}
.splide__slide img {
  object-fit: contain;
  max-width: 100%;
  cursor: pointer;
}
.splide__list {
  display: flex;
  align-items: center !important;
}
.splide__slide {
  text-align: left;
}
.is-active.splide__slide.customStyle.is-visible {
  background: rgba(255, 255, 255, 0.67);
  padding: 70px 40px 18px;
  border-radius: 20px;
  margin-right: 1rem;
  width: 20vw !important;
  height: 100% !important;
  display: flex;

  flex-direction: column;
}
.splide__slide.customStyle.is-visible.is-active .app-slider__footer {
  width: 100%;
}

.splide__list {
  align-items: center !important;
}
.splide__arrow--next {
  right: -4em;
  background: url("../assets/img/arrow-slider.svg");
  border-radius: 0px;
  background-repeat: no-repeat;
  top: 28vh !important;
}
.splide__arrow--prev {
  left: -4em;

  border-radius: 0px;
  top: 28vh !important;
  background: url("../assets/img/arrow-slider.svg");
  border-radius: 0px;
  background-repeat: no-repeat;
  transform: translateY(-50%) rotate(180deg);
}
.splide__arrow svg {
  display: none;
}
.btn-primary1 {
  background-color: #1c4185 !important;
  margin-top: 20px !important;
  color: white !important;
}
.btn-primary1 :hover {
  background-color: #1c4185 !important;
}
.customSplide {
  position: absolute;
  top: 30vh;
}
.avatar1 {
  width: 100%;
}
.avatar12 {
  width: 90%;
  border-radius: 10px;
}
.customStyle {
  background: linear-gradient(
    180deg,
    rgba(204, 218, 255, 1) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 6px;
  border-top-right-radius: 15px !important;
  border-top-left-radius: 15px !important;
}
</style>

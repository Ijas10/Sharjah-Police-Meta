<script>
import useSpeechRecognition from "../components/SpeechRecognition.js";
import router from "../router/index.js";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  setup() {
    const { toggleListening, note, error, isListening } =
      useSpeechRecognition();
    const greet = () =>
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          "Hi, Welcome to the meta version of Sharjah Police. Please say your emirates ID and say submit after filling the input field"
        )
      );
    return {
      toggleListening,
      note,
      error,
      isListening,
      greet,
    };
  },

  computed: {
    ...mapGetters(["popupGetter"]),
    ...mapState(["popUpVisible"]),
    first() {
      var str = this.note;
      var c = "0123456789";

      function check(x) {
        return c.includes(x) ? true : false;
      }
      var matches = [...str].reduce((x, y) => (check(y) ? x + y : x), "");
      return matches;
    },
  },
  methods: {
    ...mapActions(["changePopup"]),
    navigatingthrough() {
      this.toggleListening();
      setTimeout(() => {
        router.push("/choose-body-type");
      }, 300);
    },
    afterClicking() {
      this.greet();
      setTimeout(this.toggleListening, 9000);
      this.changePopup();
    },
  },

  mounted() {
    if (!this.popupGetter) {
      this.greet();
      setTimeout(this.toggleListening, 9000);
    }
    console.log(this.isListening);
  },

  updated() {
    console.log("Input value is", this.note.replace(" ", ""));
    const finals = this.note.slice(-6, -1) === "submi";
    console.log("rescongition running", this.isListening);
    if (finals) {
      this.toggleListening();
      setTimeout(() => router.push("/choose-body-type"), 300);
    }
  },
};
</script>
<template>
  <div>
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

    <main role="main" class="app-home">
      <div class="container homeOF container-home">
        <div
          class="header-wrap d-flex align-items-center justify-content-between"
        >
          <a href="" class="logo-wrap"
            ><img src="../assets/img/logo.png" title="logo"
          /></a>
          <div class="menu">
            <ul>
              <li><a href="">About</a></li>

              <li class="help"><a href="">Help</a></li>

              <li>
                <a href=""><img src="../assets/img/help.svg" alt="help" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row welcome-wrap">
          <img
            src="../assets/img/police.png"
            class="banner-police-img"
            alt=""
          />
          <div class="offset-2 col-md-1 welcome-wrap-mobile-anim">
            <div class="left-dot-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="73"
                height="146"
                viewBox="0 0 73 146"
              >
                <g
                  id="Group_31"
                  data-name="Group 31"
                  transform="translate(-324 -169)"
                >
                  <circle
                    class="animate-dot animate-dot-4"
                    id="Ellipse_5"
                    data-name="Ellipse 5"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(324 223)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot animate-dot-9"
                    id="Ellipse_13"
                    data-name="Ellipse 13"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(355 304)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot animate-dot-2"
                    id="Ellipse_8"
                    data-name="Ellipse 8"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(355 196)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot animate-dot-6"
                    id="Ellipse_10"
                    data-name="Ellipse 10"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(355 250)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot animate-dot-7"
                    id="Ellipse_11"
                    data-name="Ellipse 11"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(386 250)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot animate-dot-3"
                    id="Ellipse_6"
                    data-name="Ellipse 6"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(324 196)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot animate-dot-8"
                    id="Ellipse_12"
                    data-name="Ellipse 12"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(355 277)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot animate-dot-5"
                    id="Ellipse_9"
                    data-name="Ellipse 9"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(324 250)"
                    fill="#fff"
                    opacity="0.51"
                  />
                  <circle
                    class="animate-dot"
                    id="Ellipse_7"
                    data-name="Ellipse 7"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(355 169)"
                    fill="#fff"
                    opacity="0.51"
                  />
                </g>
              </svg>
            </div>

            <div class="left-bottom-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="36"
                viewBox="0 0 42 36"
              >
                <g
                  id="Group_32"
                  data-name="Group 32"
                  transform="translate(-324 -634)"
                >
                  <circle
                    class="animate-dot animate-dot-5"
                    id="Ellipse_28"
                    data-name="Ellipse 28"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(355 634)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <circle
                    class="animate-dot animate-dot-7"
                    id="Ellipse_29"
                    data-name="Ellipse 29"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(324 634)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <circle
                    class="animate-dot animate-dot-8"
                    id="Ellipse_30"
                    data-name="Ellipse 30"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(355 659)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <circle
                    class="animate-dot animate-dot-9"
                    id="Ellipse_31"
                    data-name="Ellipse 31"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(324 659)"
                    fill="#fff"
                    opacity="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-md-5">
            <div class="form-wrapper">
              <div class="form-wrap">
                <h5>META</h5>
                <h3>Welcome to Sharjah Police</h3>
                <form>
                  <input
                    type="number"
                    :value="first"
                    class="form-control"
                    placeholder="Enter your Emirates ID to get started"
                  />

                  <div class="d-flex justify-content-space-between">
                    <button
                      class="btn d-flex align-items-center justify-content-center"
                      @click.prevent="navigatingthrough"
                    >
                      submit
                    </button>
                  </div>
                </form>
                <div class="safety">
                  <p>Guardians of Safety & Harmony</p>
                </div>
              </div>
              <div class="right-dot-wrap"></div>
            </div>
            <div class="top-center-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="6"
                viewBox="0 0 66 6"
              >
                <g
                  id="Group_34"
                  data-name="Group 34"
                  transform="translate(-599 -189)"
                >
                  <circle
                    class="animate-dot animate-dot-2"
                    id="Ellipse_14"
                    data-name="Ellipse 14"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(599 189)"
                    fill="#fff"
                    opacity="0.47"
                  />
                  <circle
                    class="animate-dot animate-dot-3"
                    id="Ellipse_15"
                    data-name="Ellipse 15"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(619 189)"
                    fill="#fff"
                    opacity="0.47"
                  />
                  <circle
                    class="animate-dot animate-dot-4"
                    id="Ellipse_16"
                    data-name="Ellipse 16"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(639 189)"
                    fill="#fff"
                    opacity="0.47"
                  />
                  <circle
                    class="animate-dot animate-dot-5"
                    id="Ellipse_17"
                    data-name="Ellipse 17"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(659 189)"
                    fill="#fff"
                    opacity="0.47"
                  />
                </g>
              </svg>
            </div>

            <div class="right-bottom-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="27"
                viewBox="0 0 66 27"
              >
                <g
                  id="Group_33"
                  data-name="Group 33"
                  transform="translate(-753 -643)"
                >
                  <circle
                    id="Ellipse_19"
                    class="animate-dot animate-dot-2"
                    data-name="Ellipse 19"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(753 664)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <circle
                    class="animate-dot animate-dot-3"
                    id="Ellipse_20"
                    data-name="Ellipse 20"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(773 664)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <circle
                    class="animate-dot animate-dot-4"
                    id="Ellipse_21"
                    data-name="Ellipse 21"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(793 664)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <circle
                    class="animate-dot animate-dot-5"
                    id="Ellipse_22"
                    data-name="Ellipse 22"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(813 664)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <g
                    id="Group_6"
                    data-name="Group 6"
                    transform="translate(57 -32)"
                    opacity="0.5"
                  >
                    <circle
                      class="animate-dot animate-dot-6"
                      id="Ellipse_24"
                      data-name="Ellipse 24"
                      cx="3"
                      cy="3"
                      r="3"
                      transform="translate(696 675)"
                      fill="#fff"
                    />
                    <circle
                      class="animate-dot animate-dot-7"
                      id="Ellipse_25"
                      data-name="Ellipse 25"
                      cx="3"
                      cy="3"
                      r="3"
                      transform="translate(716 675)"
                      fill="#fff"
                    />
                    <circle
                      class="animate-dot animate-dot-8"
                      id="Ellipse_26"
                      data-name="Ellipse 26"
                      cx="3"
                      cy="3"
                      r="3"
                      transform="translate(736 675)"
                      fill="#fff"
                    />
                    <circle
                      class="animate-dot animate-dot-9"
                      id="Ellipse_27"
                      data-name="Ellipse 27"
                      cx="3"
                      cy="3"
                      r="3"
                      transform="translate(756 675)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- /container -->
    </main>
  </div>
</template>

<style>
/*!
 * Sharjah Police -
 * Designer:Sojiya Mary
 * Copyright :Professional IT Solutions
 */
html,
body {
  height: 100vh;
  font-family: "Manrope", sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.rvNotification {
  border-radius: 12px;
}
.rvButtonRow {
  text-align: center !important;
}

main {
  background-image: url("../assets/img/banner.png");
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
}
.homeOF {
  width: 72% !important;
}
.header-wrap {
  padding-top: 22px;
}
.logo-wrap {
  background: #fff;
  padding: 17px 20px 22px;
  border-radius: 10px;
  display: inline-block;
}
.menu {
  display: flex;
  justify-content: end;
}
.menu ul {
  list-style: none;
}
.menu ul li {
  display: inline-block;
  padding-right: 15px;
  list-style: none;
}
.menu ul li a {
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 16px;
  padding: 10px;
}
.menu ul li.help {
  padding: 0;
}
.menu ul li.help a {
  padding: 3px;
}
.form-wrap {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.left-dot-wrap {
  width: 71px;
  height: 145px;
  position: relative;
}
.left-dot-wrap span {
  opacity: 0.51;
}
.left-dot-wrap span.dot1 {
  position: absolute;
  top: 0;
  left: 50%;
}
.left-dot-wrap span.dot2 {
  position: absolute;
  top: 20%;
  left: 0;
}
.left-dot-wrap span.dot3 {
  position: absolute;
  left: 0;
  top: 40%;
}
.left-dot-wrap span.dot4 {
  position: absolute;
  left: 0;
  top: 60%;
}
.left-dot-wrap span.dot5 {
  position: absolute;
  top: 20%;
  left: 50%;
}
.left-dot-wrap span.dot6 {
  position: absolute;
  left: 50%;
  top: 60%;
}
.left-dot-wrap span.dot7 {
  position: absolute;
  right: 0px;
  top: 60%;
}
.left-dot-wrap span.dot8 {
  position: absolute;
  top: 80%;
  left: 50%;
}
.left-dot-wrap span.dot9 {
  position: absolute;
  top: 100%;
  left: 50%;
}
.left-bottom-wrap {
  position: absolute;
  bottom: 4px;
  left: 0;
}
.top-center-wrap {
  position: absolute;
  top: 0;
  left: 50%;
}
.right-bottom-wrap {
  position: absolute;
  bottom: 0;
  right: 0;
}
.form-wrapper {
  position: relative;
  height: calc(100vh - 283px);
}
.right-dot-wrap {
  position: absolute;
  top: 0;
  left: 50%;
}
.right-dot-wrap span {
  opacity: 0.47;
  margin-right: 10px;
}
.form-wrap h5 {
  font-family: "Manrope", sans-serif;
  font-size: 19px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
}
.form-wrap h3 {
  font-family: "Manrope", sans-serif;
  font-size: 56px;
  font-weight: 500;
  width: 374px;
  color: #fff;
  line-height: 54px;
  margin: 0 0 18px;
}
form input[type="number"] {
  border-radius: 10px;
  color: white;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 400;
  background: transparent;
  width: 411px;
  height: 53px;
  border: 1px solid #fff;
  margin-bottom: 15px;
}
form input[type="number"]::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
  opacity: 0.5;
  /* Firefox */
}

form button.btn {
  width: 160px;
  height: 50px;
  background: #1c4185;
  border-radius: 8px;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: none;
  text-transform: uppercase;
}
form .btn:hover {
  background: #2855a9;
  color: #fff;
}

.safety-wrap {
  margin-top: 115px;
}
.safety {
  margin-top: auto;
}
.safety p {
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  line-height: 22px;
  width: 138px;
  height: 44px;
  margin: 0;
}
.bottom-lt-dots {
  position: relative;
  width: 40px;
  height: 45px;
}
.bottom-lt-dots span {
  opacity: 0.5;
}
.bottom-lt-dots span.dots1 {
  position: absolute;
  top: 0;
  left: 0;
}
.bottom-lt-dots span.dots2 {
  position: absolute;
  top: 0;
  right: 0;
}
.bottom-lt-dots span.dots3 {
  position: absolute;
  bottom: 0;
  left: 0;
}
.bottom-lt-dots span.dots4 {
  position: absolute;
  bottom: 0;
  right: 0;
}
.bottom-rt-dots {
  position: relative;
  width: 66px;
  height: 45px;
}
.bottom-rt-dots span {
  opacity: 0.5;
}
.bottom-rt-dots span.dots1 {
  position: absolute;
  top: 0;
  left: 0;
}
.bottom-rt-dots span.dots2 {
  position: absolute;
  top: 0;
  left: 33.3%;
}
.bottom-rt-dots span.dots3 {
  position: absolute;
  top: 0;
  left: 66.6%;
}
.bottom-rt-dots span.dots4 {
  position: absolute;
  top: 0;
  left: 100%;
}
.bottom-rt-dots span.dots5 {
  position: absolute;
  bottom: 0;
  left: 0;
}
.bottom-rt-dots span.dots6 {
  position: absolute;
  bottom: 0;
  left: 33.3%;
}
.bottom-rt-dots span.dots7 {
  position: absolute;
  bottom: 0;
  left: 66.6%;
}
.bottom-rt-dots span.dots8 {
  position: absolute;
  bottom: 0;
  left: 100%;
}
.container-home {
  position: relative;
  height: 100%;
}
.container-home .banner-police-img {
  position: absolute;
  width: auto;
  bottom: -25px;
  right: 0;
}
main.app-home {
  background-image: url("../assets/img/home-banner-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.animate-dot {
  animation: blink 1s ease alternate infinite;
}
.animate-dot.animate-dot-2 {
  animation-delay: 0.1s;
}
.animate-dot.animate-dot-3 {
  animation-delay: 0.2s;
}
.animate-dot.animate-dot-4 {
  animation-delay: 0.3s;
}
.animate-dot.animate-dot-5 {
  animation-delay: 0.4s;
}
.animate-dot.animate-dot-6 {
  animation-delay: 0.5s;
}
.animate-dot.animate-dot-7 {
  animation-delay: 0.6s;
}
.animate-dot.animate-dot-8 {
  animation-delay: 0.7s;
}
.animate-dot.animate-dot-9 {
  animation-delay: 0.8s;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1088px;
  }
}

@media screen and (min-height: 699px) {
  main {
    height: 100%;
  }
}

@media screen and (max-width: 767px) {
  .form-wrap h3 {
    width: auto;
    height: auto;
  }
  form input[type="text"] {
    width: 100%;
    margin-top: 20px;
  }
  .container-home .banner-police-img {
    display: none;
  }
  .form-wrapper {
    height: calc(100vh - 216px);
  }
  .header-wrap {
    padding-top: 15px;
  }
  .logo-wrap {
    padding: 10px;
  }
  .logo-wrap img {
    width: 30px;
  }
  form button {
    margin-bottom: 0;
  }
  .left-bottom-wrap {
    position: absolute;
    bottom: 74px;
    left: 15px;
  }
  .right-bottom-wrap {
    position: absolute;
    bottom: 0;
    right: 14px;
  }
  .welcome-wrap-mobile-anim {
    position: absolute;
    left: 0;
    margin: 0;
    width: 100%;
    top: 0;
    margin-top: 20px;
    height: 100%;
  }
  .welcome-wrap {
    position: relative;
  }
  main.app-home {
    height: 100%;
  }
  .left-dot-wrap svg {
    width: 35px;
    height: 55px;
  }
}

@media screen and (min-width: 768px) {
  .menu ul {
    margin-bottom: 80px;
  }
}

/* New Styles 22-07-2022 */
.app-h3 {
  font-size: 40px;
  font-weight: 700;
}
.app-h3.app-h3--lg {
  margin-bottom: 56px;
}
.app-choose-body-type {
  background-image: url("../assets/img/bg-img.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.app-card {
  box-shadow: 0px 3px 6px #103d6529;
  background: rgba(255, 255, 255, 0.46);
}
.app-card.app-card--lg {
  width: 473px;
  border-radius: 24px;
  padding: 41px 31px;
}
.text-blue {
  color: #1c4185;
}
.form-group--radio {
  margin: 0;
}
.form-group--radio .form-check-label {
  height: 87px;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: transparent;
  width: 100%;
  color: #1c4185;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
}
.form-group--radio .form-check-label:hover {
  border-color: #1c4185;
  background: #1c4185;
  color: #ffffff;
  text-decoration: none;
}

.form-group--radio .form-check-input {
  opacity: 0;
}
.form-group--radio .form-check-input:checked + .form-check-label {
  background-color: #1c4185;
  color: #fff;
}
.form-group--radio .form-check:not(:last-child) {
  margin-bottom: 16px;
}
.app-circle {
  border-radius: 100%;
  background: white;
  margin: 0 auto;
}
.app-circle.app-circle--lg {
  width: 130px;
  height: 130px;
  padding: 40px;
  margin-bottom: 25px;
}
.app-info {
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 400;
  line-height: 17px;
}
.btn {
  border-radius: 8px;
  font-weight: 500;
}
.btnclass {
  background-color: #1c4185 !important;
}
.file-input {
  padding: 30px 0;
  position: relative;
}
.file-input input {
  opacity: 0;
  position: absolute;
  left: 0;
  z-index: -1;
}
.file-input label {
  text-decoration: underline;
  cursor: pointer;
  color: #1c4185;
}
.btn-lg {
  height: 87px;
  font-size: 20px;
}
.btn-md {
  height: 57px;
}
.btn-full {
  width: 100%;
}
.btn-primary {
  border-color: #1c4185 !important;
  background-color: #1c4185;
  color: #fff;
}
.btn-primary:hover {
  background-color: #1c4185;
  color: #fff;
}
.btn-default {
  background-color: #fff !important;
  color: #1c4185;
}
.mb-auto {
  margin-bottom: auto;
}
.app-avatar .app-h3 {
  padding-top: 73px;
}
.app-slider {
  width: 100%;
}
.slick-nav {
  position: absolute;
}
.slick-track {
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in;
}
.height-100 {
  height: 100%;
}
.slick-slide {
  width: 168px;
  margin: 0 5px;
  opacity: 0;
}
.slick-slide img {
  width: 100%;
}
.slick-slide.slick-active {
  opacity: 1;
}
.slick-slide {
  transform: scale(0.9);
  transition: opacity 0.5s ease-in-out;
}
.slick-list {
  margin: 0 -11px !important;
}
.slick-slide div {
  height: 100%;
}
.slick-slide .btn {
  margin-top: 20px;
}
.slick-center > div {
  transform: scale(1);
}
.slick-slide.slick-center {
  width: 320px;
  height: 380px;
  box-shadow: 0px 3px 6px #103d6529;
}
.app-slider__footer {
  display: none;
}
.app-slider__item {
  padding-top: 10px;
  border-radius: 16px;
  background: rgb(204, 218, 255);
  background: linear-gradient(
    180deg,
    rgba(204, 218, 255, 1) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  width: 150px;
}
.slick-center .app-slider__item {
  background: rgba(255, 255, 255, 0.67);
  padding: 70px 40px 18px;
}
.slick-center img {
  height: 218px;
}
.slick-center .app-slider__footer {
  display: block;
}
.splide__slide.customStyle.is-visible.is-active .app-slider__footer {
  display: block;
}
.avatar-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: url("../img/arrow-slider.svg");
  background-repeat: no-repeat;
  width: 30px;
  height: 25px;
  border: 0;
  background-size: 100% 100%;
}
.avatar-prev {
  left: -50px;
  transform: translateY(-50%) rotate(180deg);
}
.avatar-next {
  right: -50px;
}
.app-slider__item.is-active {
  width: 150px;
}
.avatar-slider-wrapper {
  width: 100%;
  position: relative;
}
.avatar-slider {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.avatar-slide {
  flex-shrink: 0;
  transition: height 0.5s ease-in;
  cursor: pointer;
}
.avatar-slide.centered .avatar-slide-inner {
  background: rgba(255, 255, 255, 0.67);
  padding: 70px 40px 18px;
}

.avatar-slide.centered .app-slider__footer {
  display: block;
  margin-top: 18px;
}

.avatar-slide img {
  width: 100%;
}
.avatar-slide.centered img {
  height: 218px;
  object-fit: contain;
}
.avatar-wrapper {
  display: flex;
  align-items: center;
  transition: all 0.5s ease-out;
}
.avatar-slide-inner {
  padding-top: 10px;
  border-radius: 16px;
  background: rgb(204, 218, 255);
  background: linear-gradient(
    180deg,
    rgba(204, 218, 255, 1) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
}

@media screen and (max-width: 767px) {
  .avatar-next {
    right: 0;
  }
  .avatar-prev {
    left: 0;
  }
  .app-card.app-card--lg {
    width: 100%;
  }
}

@media screen and (max-height: 690px) {
  .container-home .banner-police-img {
    width: 25%;
  }
}
</style>

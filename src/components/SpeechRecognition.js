import { watch, ref } from "vue";

// import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";

// const appId = "ef3395e8-3ed4-4b83-a455-18dd4be4dab6";
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// const recognition = new SpeechlySpeechRecognition();

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";
export default function useSpeechRecognition() {
  const isListening = ref(false);
  const note = ref("");
  const numbers = ref("");
  const error = ref(null);
  const handleListen = () => {
    if (isListening.value) {
      recognition.start();
    } else {
      recognition.stop();
    }
  };
  const toggleListening = () => {
    isListening.value = !isListening.value;
  };
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    // .filter((result) => result.transcript !== " delete")

    // .map((each) => each.transcript)

    // if (note.value === transcript) {
    //   console.log(true);
    // }

    // if (transcript.slice(-6, -1) === "delet") {
    //   note.value = transcript.slice(0, -8);
    // }

    note.value = transcript;

    const first = () => {
      var str = note.value;
      var c = "0123456789";

      function check(x) {
        return c.includes(x) ? true : false;
      }
      var matches = [...str].reduce((x, y) => (check(y) ? x + y : x), "");
      return matches;
    };
    //  numbers.value = transcript.value.replace(/[^0-9]/g, "");
    numbers.value = first();
    console.log("note", note.value);
    console.log("transcript", transcript);
  };
  recognition.onerror = (event) => {
    error.value = event.error;
  };
  watch(isListening, () => {
    handleListen();
  });
  return {
    toggleListening,
    note,
    error,
    numbers,
    isListening,
  };
}

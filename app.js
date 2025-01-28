import { createApp, ref, defineAsyncComponent } from "./js/vue.esm-browser.prod.js";
import comboBox from "./components/comboBox.js";

const app = createApp({
    template: `<combo-box></combo-box>`,
    data() {
        return { count: 0 }
    }
});

app
    .component('comboBox', comboBox)
    .mount("#app");

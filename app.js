import { createApp, ref, defineAsyncComponent } from "./js/vue.esm-browser.prod.js";
import dashBoard from "./components/dashBoard/dashBoard.js";

const app = createApp({
    components: { dashBoard },
    template: `<dash-board></dash-board>`,
    data() {
    }
});

app
.mount("#app");

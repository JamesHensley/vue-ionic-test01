import { ref, defineAsyncComponent } from "../js/vue.esm-browser.prod.js";

import repoService from "../services/repoService.js";

const comboBox = defineAsyncComponent(() => {
    return repoService.getTextHtml("./components/comboBox.html")
    .then(template => {
        const comp = {
            template: template,
            data() {
                return {

                }
            },

        }

        return Promise.resolve(comp);
    })
});

export default comboBox;
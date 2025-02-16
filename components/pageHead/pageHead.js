import { ref, defineAsyncComponent } from "../../js/vue.esm-browser.prod.js";

import repoService from "../../services/repoService.js";
import stateService from "../../services/stateService.js";

const pageHead = defineAsyncComponent(() => {
    return repoService.getTextHtml("./components/pageHead/pageHead.html")
    .then(template => {
        const comp = {
            template: template,
            data() {
                return {
                    areaText: stateService.appSettings.headerText
                }
            },

        }

        return Promise.resolve(comp);
    })
});

export default pageHead;
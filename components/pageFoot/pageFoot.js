import { ref, defineAsyncComponent } from "../../js/vue.esm-browser.prod.js";

import repoService from "../../services/repoService.js";
import stateService from "../../services/stateService.js";

const pageFoot = defineAsyncComponent(() => {
    return repoService.getTextHtml("./components/pageFoot/pageFoot.html")
    .then(template => {
        const comp = {
            template: template,
            data() {
                return {
                    areaText: stateService.appSettings.footerText
                }
            },

        }

        return Promise.resolve(comp);
    })
});

export default pageFoot;
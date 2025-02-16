import { ref, defineAsyncComponent } from "../../js/vue.esm-browser.prod.js";

import pageHead from "../pageHead/pageHead.js";
import pageFoot from "../pageFoot/pageFoot.js";
import contentArea from "../contentArea/contentArea.js";

import repoService from "../../services/repoService.js";

const dashBoard = defineAsyncComponent(() => {
    return repoService.getTextHtml("./components/dashBoard/dashBoard.html")
    .then(template => {
        const comp = {
            components: { pageHead, pageFoot, contentArea },
            template: template,
            data() {
                return {

                }
            },

        }

        return Promise.resolve(comp);
    })
});

export default dashBoard;
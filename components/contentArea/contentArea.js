import { ref, defineAsyncComponent } from "../../js/vue.esm-browser.prod.js";

import repoService from "../../services/repoService.js";
import stateService from "../../services/stateService.js";

const contentArea = defineAsyncComponent(() => {
    return repoService.getTextHtml("./components/contentArea/contentArea.html")
    .then(template => {
        const comp = {
            template: template,
            data() {
                return {
                    curTab: this.curTab,
                    allTabs: this.allTabs
                }
            },
            created() {
                this.curTab = 0;
                this.allTabs = stateService.appSettings.appTabs;
            },
            beforeMount() {

            },
            mounted() {

            },
            methods: {
                tabChanged(newTab) {
                    this.curTab = newTab.idx;
                    console.log(newTab)
                }
            }
        }

        return Promise.resolve(comp);
    })
});

export default contentArea;
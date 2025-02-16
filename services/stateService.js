import appSettings from "../appSettings.js";


const stateService = (() => {

    return {
        appSettings: appSettings
    }
})();

export default stateService;

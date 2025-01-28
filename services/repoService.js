const repoService = (() => {
    const getTextHtml = (url) => {
        return fetch(url, { headers: { accept: "text/html" }})
        .then(d => d.text())
        .then(d => Promise.resolve(d))
    }

    return {
        getTextHtml
    }
})();

export default repoService;

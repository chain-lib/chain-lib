export const loadStyle = (src) => {
    return new Promise(function (resolve, reject) {
        let link = document.createElement('link');
        link.href = src;
        link.rel = 'stylesheet';
        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error(`Style load error for ${src}`));
        document.head.append(link);
    });
};
export const loadDefaultStylesheets = () => {
    loadStyle('https://fonts.googleapis.com/css?family=Roboto:300,400,500')
        .then(() => loadStyle('https://fonts.googleapis.com/css?family=Material+Icons&display=block'))
        .catch(err => alert(err));
};

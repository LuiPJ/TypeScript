const formatter = new Intl.DateTimeFormat("en-US");
export const formatTime = (date) => formatter.format(date);
export const createHeader = (title) => {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    return h1;
};
export const getDate = () => new Date();
//# sourceMappingURL=until.js.map
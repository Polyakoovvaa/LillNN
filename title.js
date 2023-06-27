let docTitle = document.title;

window.addEventListener("blur", ()=>{
    document.title = "Не уходи...";
});

window.addEventListener("focus", ()=>{
    document.title = docTitle;
});